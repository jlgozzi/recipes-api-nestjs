import { Recipe } from 'src/resources/recipes/entities/recipe.entity';
import { User } from 'src/resources/user/entities/user.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  public id: string;

  @Column()
  public name: string;

  @Column()
  userId: string;

  @ManyToOne(() => User, (user) => user.recipes, { onDelete: 'CASCADE' })
  user: User;

  @ManyToMany(() => Recipe, (recipe) => recipe.categories)
  recipes: Recipe[];
}

import { Recipe } from 'src/resources/recipes/entities/recipe.entity';
import { User } from 'src/resources/user/entities/user.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('ingredients')
export class Ingredient {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  userId: string; // Porções

  @ManyToOne(() => User, (user) => user.recipes, { onDelete: 'CASCADE' })
  user: User;

  @ManyToMany(() => Recipe, (recipe) => recipe.ingredients)
  recipes: Recipe[];
}

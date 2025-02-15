import { Category } from 'src/resources/categories/entities/category.entity';
import { Ingredient } from 'src/resources/ingredients/entities/ingredient.entity';
import { User } from 'src/resources/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('recipes')
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'int' })
  prepTime: number; // Tempo de preparo (em minutos)

  @Column({ type: 'int' })
  servings: number; // Porções

  @Column({ nullable: true })
  imageUrl: string; // URL da imagem (opcional)

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  userId: string;

  @ManyToOne(() => User, (user) => user.recipes, { onDelete: 'CASCADE' })
  user: User;

  @ManyToMany(() => Category, (category) => category.recipes)
  @JoinTable({
    name: 'recipe_categories',
    joinColumn: { name: 'recipe_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'category_id', referencedColumnName: 'id' },
  })
  categories: Category[];

  @ManyToMany(() => Ingredient, (ingredient) => ingredient.recipes)
  @JoinTable({
    name: 'recipe_ingredients',
    joinColumn: { name: 'recipe_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'ingredient_id', referencedColumnName: 'id' },
  })
  ingredients: Ingredient[];
}

import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipesController } from './recipes.controller';
import { Recipe } from './entities/recipe.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ingredient } from '../ingredients/entities/ingredient.entity';
import { Category } from '../categories/entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Recipe, Ingredient, Category])],

  controllers: [RecipesController],
  providers: [RecipesService],
})
export class RecipesModule {}

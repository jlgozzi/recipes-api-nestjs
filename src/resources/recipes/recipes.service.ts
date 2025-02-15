import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { Recipe } from './entities/recipe.entity';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Ingredient } from '../ingredients/entities/ingredient.entity';
import { Category } from '../categories/entities/category.entity';

@Injectable()
export class RecipesService {
  constructor(
    @InjectRepository(Recipe)
    private recipesRepository: Repository<Recipe>,
    @InjectRepository(Ingredient)
    private ingredientsRepository: Repository<Ingredient>,
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}
  async create(createRecipeDto: CreateRecipeDto) {
    try {
      const {
        title,
        description,
        prepTime,
        servings,
        imageUrl,
        userId,
        categories,
        ingredients,
      } = createRecipeDto;

      const ingredientEntities = await this.ingredientsRepository.find({
        where: { id: In(ingredients) },
      });

      const categoryEntities = await this.categoriesRepository.find({
        where: { id: In(categories) },
      });

      const recipe = this.recipesRepository.create({
        title,
        description,
        prepTime,
        servings,
        imageUrl,
        userId,
        categories: categoryEntities,
        ingredients: ingredientEntities,
      });
      return await this.recipesRepository.save(recipe);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async findAll(userId: string) {
    return this.recipesRepository.find({ where: { userId: userId } });
  }

  findOne(id: number) {
    return `This action returns a #${id} recipe`;
  }

  update(id: number, updateRecipeDto: UpdateRecipeDto) {
    return `This action updates a #${id} recipe`;
  }

  remove(id: number) {
    return `This action removes a #${id} recipe`;
  }
}

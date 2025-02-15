import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './resources/recipes/recipes.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './resources/user/user.module';
import { IngredientsModule } from './resources/ingredients/ingredients.module';
import { CategoriesModule } from './resources/categories/categories.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './resources/user/entities/user.entity';
import { Recipe } from './resources/recipes/entities/recipe.entity';
import { Category } from './resources/categories/entities/category.entity';
import { Ingredient } from './resources/ingredients/entities/ingredient.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'recipes',
      entities: [User, Recipe, Category, Ingredient],
      synchronize: true,
    }),
    DatabaseModule,
    RecipesModule,
    UserModule,
    IngredientsModule,
    CategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

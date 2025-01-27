import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './resources/recipes/recipes.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './resources/user/user.module';
import { IngredientsModule } from './resources/ingredients/ingredients.module';
import { CategoriesModule } from './resources/categories/categories.module';

@Module({
  imports: [DatabaseModule, RecipesModule, UserModule, IngredientsModule, CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

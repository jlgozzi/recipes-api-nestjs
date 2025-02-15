export class CreateRecipeDto {
  id: number;

  title: string;

  description: string;

  prepTime: number;

  servings: number;

  imageUrl?: string;

  userId: string;

  categories: number[];

  ingredients: number[];
}

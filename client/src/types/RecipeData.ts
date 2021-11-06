export default interface RecipeData {
  photo: string,
  title: string,
  course: Array<string>,
  cuisine: Array<string>,
  servings: number,
  calories: number,
  ingredientList: {
    [index: number]: {
        ingredient: string,
        quantity: string,
    }
  },
  instructions: string,
  keywords: {
    [index: number]: string,
  },
  glutenFree: boolean,
  vegan: boolean,
  vegetarian: boolean,
  nutFree: boolean,
}
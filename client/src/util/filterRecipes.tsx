import RecipeData from "../types/RecipeData";

/**
 * Returns the recipes after applying the filters (e.g. vegetarian, gluten-free, ...)
 */
export default function filterRecipes(recipes: RecipeData[], appliedFilters: string[]): RecipeData[] {
    return recipes.filter(recipe => {
        // Makes a tag list of the dietary restrictions options that each recipe has
        const tags: String[] = []
        if (recipe.glutenFree) {
            tags.push("Gluten-Free");
        }
        if (recipe.vegetarian) {
            tags.push("Vegetarian");
        }
        if (recipe.vegan) {
            tags.push("Vegan");
        }
        if (recipe.nutFree) {
            tags.push("Nut-Free");
        }
        if (recipe.dairyFree) {
            tags.push("Dairy-Free");
        }
        // Checks that the current recipe have every tag that is checked in its tags list
        return appliedFilters.every(i => tags.includes(i));
    })
}

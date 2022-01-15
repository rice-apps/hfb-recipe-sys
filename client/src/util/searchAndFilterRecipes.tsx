import RecipeData from "../types/RecipeData";

/**
 * Returns the recipes remaining after applying the filter and search query
 */
export default function searchAndFilterRecipes(recipes: RecipeData[], searchString: String, appliedFilters: string[]): RecipeData[] {
    let filteredRecipes = getFilteredRecipes(recipes, appliedFilters);
    return getSearchedRecipes(filteredRecipes, searchString)
}

/**
 * Returns the recipes after applying the filters (e.g. vegetarian, gluten-free, ...)
 */
function getFilteredRecipes(recipes: RecipeData[], appliedFilters: string[]): RecipeData[] {
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
        // Checks that the current recipe have every tag that is checked in its tags list
        return appliedFilters.every(i => tags.includes(i));
    })
}

/**
 * Returns the recipes after applying the search query
 */
function getSearchedRecipes(recipes: RecipeData[], searchString: String): RecipeData[] {
    if (searchString === "") return recipes;
    // Perform a case-insensitive search
    let query = searchString.toLowerCase();
    // Check both title and ingredient list for search string
    return recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(query) ||
        recipe.ingredientList.some(ingredient => ingredient.ingredient.toLowerCase().includes(query))
    )
}
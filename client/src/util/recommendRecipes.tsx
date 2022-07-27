import RecipeData from "../types/RecipeData";

/**
 * Returns the top n=3 recipes remaining after sorting by similarity to saved recipes
 */

export default function getRecommendedRecipes(allRecipes: RecipeData[], myRecipes: RecipeData[], numRefreshes: number): RecipeData[] {
    const model = buildRecModel(myRecipes);
    const unsaved = allRecipes.filter(item => myRecipes.indexOf(item) < 0);
    const recommended = unsaved.sort((recipe1, recipe2) => 
        evalRecipe(recipe2, model) - evalRecipe(recipe1, model));

    const firstRecIdx = (3 * numRefreshes) % (unsaved.length - 3)
    return recommended.slice(firstRecIdx, firstRecIdx + 3);
}

function buildRecModel(myRecipes: RecipeData[]): Map<string, number>{
    let model = new Map<string, number>();
    for (let recipe of myRecipes) {
        const curTags = getRecipeTags(recipe)
        // Could be changed to be within loop if want to add custom weights to certain categories of tags
        const curScore = 1 / curTags.length
        for (let tag of curTags) {
            let curWeight = model.get(tag) || 0
            model.set(tag, curWeight + curScore);
        }
    }
    return model;
}
   
function evalRecipe(recipe: RecipeData, model: Map<string, number>): number{
    let score = 0;

    const curTags = getRecipeTags(recipe)
    for (let tag of curTags) {
        score += model.get(tag) || 0
    }

    score = score / curTags.length 
    console.log(recipe.title, score)
    return score;
}

function getRecipeTags(recipe: RecipeData): string[] {
    let tags = []
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
    
    tags = tags.concat(recipe.keywords, recipe.course, recipe.cuisine);
    return tags;
}
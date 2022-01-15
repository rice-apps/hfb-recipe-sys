import React, { useState, ChangeEvent } from 'react';
import { SearchOutlined, FilterOutlined} from "@ant-design/icons";
import RecipeData from '../../types/RecipeData';
import '../../style/Main.css';


function Search(props: { recipes: RecipeData[]}) {
    const [searchString, setSearchString] = useState('');

    /**
   * Saves the new search state
   */
   function onSearchChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchString(event.target.value);
  };

    /**
  * Returns the recipes after applying the search query
  */
  function getSearchedRecipes(recipes: RecipeData[]): RecipeData[] {
    if (searchString === "") return recipes;
    // Perform a case-insensitive search
    let query = searchString.toLowerCase();
    // Check both title and ingredient list for search string
    return recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(query) || 
        recipe.ingredientList.some(ingredient => ingredient.ingredient.toLowerCase().includes(query))
    )
  }

   /**
  * Returns the recipes after applying the search query
  */
    function getSearchedRecipes(recipes: RecipeData[]): RecipeData[] {
        if (searchString === "") return recipes;
        // Perform a case-insensitive search
        let query = searchString.toLowerCase();
        // Check both title and ingredient list for search string
        return recipes.filter(recipe =>
          recipe.title.toLowerCase().includes(query) || 
            recipe.ingredientList.some(ingredient => ingredient.ingredient.toLowerCase().includes(query))
        )
      }

      return(
      <div className="searchContainer">
      <div className="recipeCardContainer">
        {/** Maps and displays recipes by the checked dietary restrictions tags in the filter */}
          {getRecipesToDisplay().map(recipe => {
          return (
              <div className="recipeCard" onClick={() => history.push(`/${recipe.id}`)} key={recipe.id}>
              <RecipeCard data={recipe} />
              </div>
          );
          })}
      </div>
    </div>);
  
}

export default Search;
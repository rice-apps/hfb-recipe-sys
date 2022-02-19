import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import RecipeData from '../types/RecipeData';
import { RecipeCard } from '../components/main/RecipeCard';
import Header from '../components/main/Header';
import MediaQuery, { useMediaQuery } from 'react-responsive';

import '../style/Main.css'
import searchAndFilterRecipes from '../util/searchAndFilterRecipes';
import SearchBar from '../components/main/SearchBar';
import FilterPanel from '../components/main/FilterPanel';
import { HFBHeader } from '../components/main/HFBHeader';


function MainPage(props: { recipes: RecipeData[] }) {
  const history = useHistory();

  const [searchString, setSearchString] = useState('');
  const [checkedFilters, setCheckedFilters] = useState<string[]>([]); // State where the checked dietary restrictions tags are stored
  const isBigScreen = useMediaQuery({ query: '(min-width: 1200px)' });
  /**
   * Returns the recipes to display (after applying the filter and search query)
   */
  function getRecipesToDisplay() {
    return searchAndFilterRecipes(props.recipes, searchString, checkedFilters)
  }

  return (
    
    <div>
      <HFBHeader />
      <div className="titleContainer">
        <Header title="Recipes" />
        <SearchBar setSearchString={setSearchString} />
      </div>
      
      <div className={isBigScreen ? "" : "mobile"}>
        <div className="bottomContainer">
          <FilterPanel checkedFilters={checkedFilters} setCheckedFilters={setCheckedFilters} />
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
          </div>
        </div>
      </div>
            
    </div>
          
  )
}


export default MainPage;

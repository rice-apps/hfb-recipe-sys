import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Layout from '../layouts/Layout';
import RecipeData from '../types/RecipeData';
import { RecipeCard } from '../components/main/RecipeCard';
import Header from '../components/main/Header';
import HFBHeader from '../components/shared/HFBHeader';


import '../style/Main.css'
import searchAndFilterRecipes from '../util/searchAndFilterRecipes';
import SearchBar from '../components/main/SearchBar';
import FilterPanel from '../components/main/FilterPanel';

function MainPage(props: { recipes: RecipeData[] }) {
  const history = useHistory();

  const [searchString, setSearchString] = useState('');
  const [checkedFilters, setCheckedFilters] = useState<string[]>([]); // State where the checked dietary restrictions tags are stored

  /**
   * Returns the recipes to display (after applying the filter and search query)
   */
  function getRecipesToDisplay() {
    return searchAndFilterRecipes(props.recipes, searchString, checkedFilters)
  }

  return (
    <Layout>
      
      <div className="titleContainer">
        <Header title="Recipes" />
        <SearchBar setSearchString={setSearchString} />
      </div>

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
    </Layout>
  )
}

export default MainPage;

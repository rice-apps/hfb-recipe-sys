import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import RecipeData from '../types/RecipeData';
import { RecipeCard } from '../components/main/RecipeCard';
import Header from '../components/main/Header';


import '../style/Main.css'
import filterRecipes from '../util/filterRecipes';
import SearchBar from '../components/main/SearchBar';
import FilterPanel from '../components/main/FilterPanel';

import HFBHeader from '../components/header/HFBHeader';
import HFBFooter from '../components/footer/HFBFooterFinal';

function MainPage(props: { recipes: RecipeData[] }) {
  const history = useHistory();

  const [searchString, setSearchString] = useState('');
  const [checkedFilters, setCheckedFilters] = useState<string[]>([]); // State where the checked dietary restrictions tags are stored

  return (
    <div>
      <HFBHeader />
      <div className="titleContainer">
        <Header title="Recipes" />
        <SearchBar setSearchString={setSearchString} />
      </div>


      <div className="bottomContainer">
        <FilterPanel checkedFilters={checkedFilters} setCheckedFilters={setCheckedFilters} />
        <div className="searchContainer">
          <div className="recipeCardContainer">
            {
            // Display recipes that pass the checked-off dietary restrictions in the filter.
            // Note that each recipe card is responsible for applying the search string to itself and hiding/showing accordingly.
            filterRecipes(props.recipes, checkedFilters).map(recipe =>
              <RecipeCard data={recipe} searchString={searchString} onClick={() => history.push(`/${recipe.id}`)} key={recipe.id} />)
            }
          </div>
        </div>
      </div>
      <HFBFooter/>
    </div>
  )
}

export default MainPage;

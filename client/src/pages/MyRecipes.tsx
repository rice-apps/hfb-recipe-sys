import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import RecipeData from '../types/RecipeData';
import { RecipeCard} from '../components/main/RecipeCard';
import Header from '../components/main/Header';
import MediaQuery, { useMediaQuery } from 'react-responsive';

import '../style/MyRecipes.css'
import searchAndFilterRecipes from '../util/searchAndFilterRecipes';
import FilterPanel from '../components/main/FilterPanel';


function MyRecipes(props: { recipes: RecipeData[] }) {
  const navigate = useNavigate();

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
      <div className="titleContainer">
        <Header title="My Recipes" />
        <div className="home" onClick={() => navigate(`/`)} >
          <div className="print_text">View All Recipes</div>
        </div>
      </div>

      <div className="info">
        click on a recipe to view it or unsave it!
      </div>
      
      <div className={isBigScreen ? "" : "mobile"}>
        <div className="bottomContainer">
          <FilterPanel checkedFilters={checkedFilters} setCheckedFilters={setCheckedFilters} />
          <div className="searchContainer">

            <div className="recipeCardContainer">
                {/* <div className="container"> */}
              {/** Maps and displays recipes by the checked dietary restrictions tags in the filter */}
              {getRecipesToDisplay().map(recipe => {
                return (
                  <div className="recipeCard">

                    <RecipeCard data={recipe} />
                    
                    {/* <div className="mybuttonoverlap">	
	                    <button type="button" className="mybuttonoverlap">UNSAVE</button>
                    </div> */}
                  </div>
                );
              })}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
            
    </div>
          
  )
}


export default MyRecipes;


import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import RecipeData from '../types/RecipeData';
import { RecipeCard } from '../components/main/RecipeCard';
import Header from '../components/main/Header';
import MediaQuery, { useMediaQuery } from 'react-responsive';

import '../style/Main.css'
import searchAndFilterRecipes from '../util/searchAndFilterRecipes';
import getRecommendedRecipes from '../util/recommendRecipes'
import SearchBar from '../components/main/SearchBar';
import FilterPanel from '../components/main/FilterPanel';

import { Button } from 'antd';
import { ReloadOutlined } from "@ant-design/icons";

function MyRecipes(props: { recipes: RecipeData[] }) {
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

  const allRecipes = props.recipes;
  const myRecipes = props.recipes.slice(0, 3);
  const [numRefreshes, setNumRefreshes] = useState(0);
  // myRecipes.forEach(recipe => console.log(recipe))

  const reloadIcon = <ReloadOutlined style={{ "fontSize": "30px" }} />;
  const handleRecRefresh = () => {
    setNumRefreshes(numRefreshes + 1);
    //window.location.reload();
  };

  return (
    <div>
      <div className="titleContainer">
        <Header title="Saved Recipes"/>
      </div>
      
      <div className={isBigScreen ? "" : "mobile"}>
        <div className="bottomContainer">
          <div>
            <div style={{ "backgroundColor": "#f0f0f0", "padding": "10px", "margin": "20px" }}>
              <div style={{ "justifyContent": "space-between", "flexDirection": "column"}}>
                <h1 style={{ "margin": "20px", "display": "inline-block" }}>Recommended Recipes</h1>
                <Button style={{ "padding": "10px", "alignSelf": "flex-end"}} onClick={handleRecRefresh}>
                  {reloadIcon}
                </Button>
              </div>
              <div className="recipeRecContainer"> 
                {getRecommendedRecipes(allRecipes, myRecipes, numRefreshes).map(recipe => { //recipeCardContainer
                  return (
                    <div className="recipeCard" onClick={() => history.push(`/${recipe.id}`)} key={recipe.id}>
                      <RecipeCard data={recipe} />
                    </div>
                  );
                })}
                </div>
            </div>
            <div> {/* style={{ "background-color": "#e5e5e5" }} */}
              <h1 style={{ "margin": "20px" }}>Saved Recipes</h1>
              <div className="recipeRecContainer">
                {myRecipes.map(recipe => {
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
    </div>
  )
}

export default MyRecipes;
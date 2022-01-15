import React, { useState, ChangeEvent } from 'react';
import { Input, Button, Checkbox } from 'antd';
import { SearchOutlined, FilterOutlined} from "@ant-design/icons";
import { RecipeCard } from './RecipeCard';
import Header from '../shared/Header';
import { useHistory } from 'react-router-dom';
import RecipeData from '../../types/RecipeData';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { Filter } from './Filter';
import { Search } from './Search';

import '../../style/Main.css'

function MainPage(props: { recipes: RecipeData[] }) {
  const history = useHistory();

  /**
   * Returns the recipes to display (after applying the filter and search query)
   */
  function getRecipesToDisplay() {
    return Search.getSearchedRecipes(Filter.getFilteredRecipes(props.recipes))
  }

  return (
    <div>
        <div className="titleContainer">
            <Header title="Recipes" > </Header>

            {/* styling only works for inline css */}
            <Input style={{"border": "solid", "borderWidth": "0px", "borderRadius": "30px", "height": "50px", "width": "70%", "marginTop": "20px"}}
                            prefix={searchIcon} allowClear={true}
                            size="large" placeholder="Search by recipe or ingredients" 
                            onChange={onSearchChange}/>
        </div>

        <div className="bottomContainer">
          <Filter />
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
  )
}

export default MainPage;

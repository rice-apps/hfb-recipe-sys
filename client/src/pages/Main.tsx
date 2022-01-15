import React, { useState, ChangeEvent } from 'react';
import { Input, Button, Checkbox, Divider } from 'antd';
import { SearchOutlined, FilterOutlined} from "@ant-design/icons";
import { RecipeCard } from '../components/RecipeCard';
import Header from '../components/Header';
import { useHistory } from 'react-router-dom';
import RecipeData from '../types/RecipeData';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';

import '../style/Main.css'

function Main(props: { recipes: RecipeData[] }) {
  const history = useHistory();
  const [checkedFilters, setCheckedFilters] = useState<string[]>([]);
  const [searchString, setSearchString] = useState('');

  const plainOptions = ['Gluten-Free', 'Vegetarian', 'Vegan', 'Nut-Free'];
  const CheckboxGroup = Checkbox.Group;

  //icons for search bar
  const searchIcon = <SearchOutlined />;
  const searchSuffix = <span />

  //icons for filter bar
    //change later, since figma icon is not available on antD
  const filterIcon = <FilterOutlined style={{"fontSize": "40px"}}/>;

  /**
   * Saves the new filter state
   */
  function onFilterChange(list: CheckboxValueType[]) {
    setCheckedFilters(list as string[]);
  };

  /**
   * Saves the new search state
   */
   function onSearchChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchString(event.target.value);
  };

  /**
   * Returns the recipes after applying the filters (e.g. vegetarian, gluten-free, ...)
   */
  function getFilteredRecipes(recipes: RecipeData[]): RecipeData[] {
    return recipes.filter(recipe => {
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
      return checkedFilters.every(i => tags.includes(i));
    })
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

  /**
   * Returns the recipes to display (after applying the filter and search query)
   */
  function getRecipesToDisplay() {
    return getSearchedRecipes(getFilteredRecipes(props.recipes))
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
          <div className="filterContainer">
            <div className="filterTitle">
                {filterIcon}
                <h1 style={{"marginBottom": "20px", "marginLeft": "10px"}}>Filter Results</h1>
            </div>
            <div className="checkboxTitle">
              <p>DIETARY RESTRICTIONS</p>
            </div>

            <div className="checkboxContainer">
              <CheckboxGroup options={plainOptions} value={checkedFilters} onChange={onFilterChange} />
            </div>
            <div className="filterBottom">
                <Button type="default" onClick={() => setCheckedFilters([])}>
                    Reset Filters
                </Button>
            </div>
          </div>
          <div className="searchContainer">

            <div className="recipeCardContainer">
                {getRecipesToDisplay().map(recipe => {
                return (
                    <div className="recipeCard" onClick={() => history.push(`/${recipe.id}`)} key={recipe.id}>
                    <RecipeCard data={recipe}/>
                    </div>
                );
                })}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Main;

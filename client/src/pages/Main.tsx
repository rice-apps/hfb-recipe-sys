import React, { useState } from 'react';
import { Input, Button, Checkbox, Divider } from 'antd';
import { RecipeCard } from '../components/RecipeCard';
import Header from '../components/Header';
import { useHistory } from 'react-router-dom';
import RecipeData from '../types/RecipeData';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';

import '../style/Main.css'

function Main(props: { recipes: RecipeData[] }) {
  const history = useHistory();
  const [checkedFilters, setCheckedFilters] = useState<string[]>([]);

  const plainOptions = ['Gluten-Free', 'Vegetarian', 'Vegan', 'Nut-Free'];
  const CheckboxGroup = Checkbox.Group;

  /**
   * Saves the new filter state
   */
  function onFilterChange(list: CheckboxValueType[]) {
    setCheckedFilters(list as string[]);
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
   * Returns the recipes to display (after applying the filter and search query)
   */
  function getRecipesToDisplay() {
    return getFilteredRecipes(props.recipes)
  }

  return (
    <div>
      <Header title="Recipes" > </Header>

      <Divider />
      <Button type="link" onClick={() => setCheckedFilters([])}>
        Reset Filters
      </Button>
      <CheckboxGroup options={plainOptions} value={checkedFilters} onChange={onFilterChange} />

      <Input.Search size="large" placeholder="Search by recipe or ingredients" enterButton />

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
  )
}

export default Main;

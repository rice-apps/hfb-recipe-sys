import React, { useState, ChangeEvent } from 'react';
import { Input, Button, Checkbox } from 'antd';
import RecipeData from '../../types/RecipeData';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import '../../style/Main.css';


function Filter( props: { recipes: RecipeData[]} ) {
    const [checkedFilters, setCheckedFilters] = useState<string[]>([]); // State where the checked dietary restrictions tags are stored

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
      // Makes a tag list of the dietary restrictions options that each recipe has
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
      // Checks that the current recipe have every tag that is checked in its tags list
      return checkedFilters.every(i => tags.includes(i));
    })
  }

  return(
    <div className="filterContainer">
        <div className="filterTitle">
            {filterIcon}
                <h1 style={{"marginBottom": "20px", "marginLeft": "10px"}}>Filter Results</h1>
            </div>
            <div className="checkboxTitle">
              <p>DIETARY RESTRICTIONS</p>
            </div>

            <div className="checkboxContainer">
              {/** Creates the checkbox display on the main page */}
              <CheckboxGroup options={plainOptions} value={checkedFilters} onChange={onFilterChange} />
            </div>
            <div className="filterBottom">
              {/** Filter reset button, clears the current values in the checkedFilters state */}
                <Button type="default" onClick={() => setCheckedFilters([])}>
                    Reset Filters
                </Button>
            </div>
          </div>
    );
}

export default Filter;
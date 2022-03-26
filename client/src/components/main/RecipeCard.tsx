import React, { useRef } from 'react';
import RecipeData from '../../types/RecipeData';
import CourseTags from  '../shared/CourseTags';
import RestrictionTags from '../shared/RestrictionTags';

import '../../style/RecipeCard.css';

/**
 * Recipe card, displays recipe photo, meal types, and dietary restrictions
 * Note: the recipe card applies the search string to itself, and does not display if the search text excludes the recipe
 *       this responsibility enables searching by the translated title/ingredients
 */
export const RecipeCard = (props: { data: RecipeData, searchString: string, onClick: () => void }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const ingredientsRef = useRef<HTMLParagraphElement>(null);

  function getIngredientString() {
    return props.data.ingredientList.map(entry => entry.ingredient).join(" ");
  }
  /**
   * Determines whether this recipe should be displayed, given the search string from the user
   * @returns true if the recipe should be displayed, false otherwise
   */
  function shouldShowThisRecipe(): boolean {
    // Get the translated version of the title
    let translatedTitle = titleRef.current?.innerText
    // Get the translated version of the ingredients
    let translatedIngredients = ingredientsRef.current?.innerText;

    // Show the recipe if there is no search string
    if (!props.searchString) return true;
    // Show the recipe if the title is null
    if (!translatedTitle) return true;


    //Show the recipe if the ingredient is included in the ingredient prop
    if(translatedIngredients?.toLowerCase().includes(props.searchString.toLowerCase())) return true;
    // Show the recipe if the search string appears in the translated title
    return translatedTitle.toLowerCase().includes(props.searchString.toLowerCase())
  }

  /**
   * A style object that determines whether this recipe will be shown or not
   */
  const displayStyle = shouldShowThisRecipe() ? {} : { display: "none"};

  return (
    <div className="recipeCard" onClick={props.onClick} style={displayStyle}>
      <div className="recipeCardData">
        { /* Recipe image (or a spacer if no image provided) */ }
        {props.data.photo ?
          <img src={props.data.photo} className="recipePhoto" alt={props.data.title} />
          : <br></br>
        }
        <div className="recipeCardInfo">
          <div>
            { /* Recipe title */ }
            <h4 ref={titleRef}>{props.data.title}</h4>
            { /* Course tags, displayed in 3 columns */ }
            <CourseTags data={props.data} />
            <p ref={ingredientsRef} style={{display: "none"}}>{getIngredientString()}</p>
          </div>
          { /* Dietary restriction tags */ }
          <RestrictionTags data={props.data} showText={false} />
        </div>
      </div>
    </div>
  )
}

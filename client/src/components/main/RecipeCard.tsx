import React, { useRef } from 'react';
import RecipeData from '../../types/RecipeData';
import CourseTags from  './recipe-card/CourseTags';
import RestrictionTags from './recipe-card/RestrictionTags';

import '../../style/RecipeCard.css';

/**
 * Recipe card, displays recipe photo, meal types, and dietary restrictions
 * Note: the recipe card applies the search string to itself, and does not display if the search text excludes the recipe
 *       this responsibility enables searching by the translated title/ingredients
 */
export const RecipeCard = (props: { data: RecipeData, searchString: string, onClick: () => void }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  /**
   * Determines whether this recipe should be displayed, given the search string from the user
   * @returns true if the recipe should be displayed, false otherwise
   */
  function shouldShowThisRecipe(): boolean {
    // Get the translated version of the title
    let translatedTitle = titleRef.current?.innerText
    // Show the recipe if there is no search string
    if (!props.searchString) return true;
    // Show the recipe if the title is null
    if (!translatedTitle) return true;
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
        { /* Recipe image */ }
        <img src={props.data.photo} className="recipePhoto" alt={props.data.title} />
        <div className="recipeCardInfo">
          <div>
            { /* Recipe title */ }
            <h4 ref={titleRef}>{props.data.title}</h4>
            { /* Course tags, displayed in 3 columns */ }
            <CourseTags data={props.data} />
          </div>
          
          { /* Dietary restriction tags */ }
          <RestrictionTags data={props.data} />
        </div>
      </div>
    </div>
  )
}

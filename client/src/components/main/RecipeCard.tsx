import React from 'react';
import RecipeData from '../../types/RecipeData';
import CourseTags from  './recipe-card/CourseTags';
import RestrictionTags from './recipe-card/RestrictionTags';

import '../../style/RecipeCard.css';

// Recipe card, displays recipe photo, meal types, and dietary restrictions
export const RecipeCard = (props: { data: RecipeData }) => {
  return (
    <div className="recipeCardData">
      { /* Recipe image */ }
      <img src={props.data.photo} className="recipePhoto" alt={props.data.title} />
      <div className="recipeCardInfo">
        <div>
          { /* Recipe title */ }
          <h4>{props.data.title}</h4>
          { /* Course tags, displayed in 3 columns */ }
          <CourseTags data={props.data} />
        </div>
        
        { /* Dietary restriction tags */ }
        <RestrictionTags data={props.data} />
      </div>
    </div>
  )
}

import React from 'react';
import RecipeData from '../../types/RecipeData';
import '../../style/Recipe.css';

export const RecipeImage = (props: { recipe: RecipeData } ) => {
    return (
        <div>
            {/* Photo of the recipe */}
            <div className="photoContainer">
                <img src={props.recipe.photo} alt={props.recipe.title} className="image" />
            </div>
        </div> 
    )
}



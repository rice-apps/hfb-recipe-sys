import React from 'react';
import RecipeData from '../../types/RecipeData';
import '../../style/Recipe.css';
import { formatFraction } from './Recipe';

export const Ingredients = (props: { recipe: RecipeData, scale: number } ) => {
    return (
        <div>
            {/* Ingreident List*/
            }
            <div className="ingredients">
                <h2>Ingredients</h2>
                <ul className="ingredientsList">
                    {props.recipe.ingredientList && props.recipe.ingredientList.map((dict: any) => {
                        return (
                            <li>{formatFraction(dict["quantity"], props.scale)} {dict["ingredient"]}</li>
                        );
                    })}
                </ul>
            </div>
        </div>     
    )
}



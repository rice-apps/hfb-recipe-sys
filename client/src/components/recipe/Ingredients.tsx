import React from 'react';
import RecipeData from '../../types/RecipeData';
import '../../style/Recipe.css';
import Fraction from 'fraction.js';


export const Ingredients = (props: { recipe: RecipeData, scale: number } ) => {
    const formatFraction = (frac: string, sc: number) => {
        var f = new Fraction(frac);
        return f.mul(sc).toFraction(true);
    }

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



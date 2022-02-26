import React from 'react';
import RecipeData from '../../types/RecipeData';
import '../../style/Recipe.css';
import Fraction from 'fraction.js';


export const Ingredients = (props: { recipe: RecipeData, scale: number } ) => {
    const formatFraction = (frac: string, sc: number) => {
        if(frac == "0") {
            return "";
        }

        console.log(frac);

        var ff = frac.trim().split('-');
        console.log(ff);
        var f = new Fraction(ff[0]);
        if(ff.length > 1) {
            var f2 = new Fraction(ff[1]);
            return f.mul(sc).toFraction(true) + " - " + f2.mul(sc).toFraction(true);
        }

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



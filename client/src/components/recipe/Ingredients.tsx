import React from 'react';
import RecipeData from '../../types/RecipeData';
import '../../style/Recipe.css';


export const Ingredients = (props: { recipe: RecipeData } ) => {
    return (
        <div>
            {/* Ingreident List*/}
            <div className="ingredients">
                <h2>Ingredients</h2>
                <ul className="ingredientsList">
                    {props.recipe.ingredientList && props.recipe.ingredientList.map((dict: any) => {
                        return (
                            <li>{dict["quantity"]} {dict["ingredient"]}</li>
                        );
                    })}
                </ul>
            </div>
        </div>     
    )
}



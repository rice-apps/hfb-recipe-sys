import React from 'react';
import RecipeData from '../../types/RecipeData';
import '../../style/Recipe.css';


export const Instructions = (props: { recipe: RecipeData } ) => {
    return(
       <div>
            <div className="instructionsContainer">
                    <h2>Instructions</h2>
                    {props.recipe.instructions && props.recipe.instructions.split("\n").map((instr: string) => {
                        return (
                            <p>{instr}</p>
                        );
                    })}
                </div>
        </div>
        )
    }



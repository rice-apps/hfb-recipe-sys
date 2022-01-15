import React from 'react';
import { useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Row, Col } from 'antd';
import { Icon } from 'semantic-ui-react'
import RecipeData from '../../types/RecipeData';
import { RestrictionTag } from '../main/RecipeCard';
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



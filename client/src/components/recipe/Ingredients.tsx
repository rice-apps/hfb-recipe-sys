import React from 'react';
import { useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Row, Col } from 'antd';
import { Icon } from 'semantic-ui-react'
import RecipeData from '../../types/RecipeData';
import { RestrictionTag } from '../main/RecipeCard';
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



import React from 'react';
import { useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Row, Col } from 'antd';
import { Icon } from 'semantic-ui-react'
import RecipeData from '../../types/RecipeData';
import { RestrictionTag } from '../main/RecipeCard';
import '../../style/Recipe.css';


export const MainRecipeData = (props: { recipe: RecipeData } ) => {
        //Function to render the 4 dietary restriction tags 
    const renderDietaryRestrictions = () => {
        if (!props.recipe) return null;

        var rest = [];
        if (props.recipe.glutenFree) {
            rest.push(
                <div className="restTag">
                    <span style={{ color: "#F1C94D" }}>Gluten-free</span>
                    <RestrictionTag color="#F1C94D" icon="leaf" />
                </div>);
        }
        if (props.recipe.vegan) {
            rest.push(<RestrictionTag color="#3E833D" icon="leaf" />);
        }
        if (props.recipe.vegetarian) {
            rest.push(<RestrictionTag color="#7EAF53" icon="leaf" />);
        }
        if (props.recipe.nutFree) {
            rest.push(<RestrictionTag color="#CD5237" icon="leaf" />);
        }
        return (
            <div className="recipeRestTagContainer">
                {rest}
            </div>
        );
    }
        return (
            <div>
                      <div className="recipeDataContainer">
                <div className="ingrPhotoContainer">
                    <div className="ingrContainer">
                        <div className="ingrRestContainer">
                            <div className="restrictions">
                                {renderDietaryRestrictions()}
                            </div>
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
                    </div>
                     {/* Photo of the recipe */}
                    <div className="photoContainer">
                        <img src={props.recipe.photo} className="image" />
                    </div>
                </div> 
            </div>
             {/* Intstructions*/}
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



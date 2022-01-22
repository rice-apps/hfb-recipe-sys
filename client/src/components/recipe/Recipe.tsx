import React from 'react';
import RecipeData from '../../types/RecipeData';
import '../../style/Recipe.css';
import { Ingredients } from './Ingredients';
import { RecipeImage } from './RecipeImage';
import { Instructions } from './Instructions';
import RestrictionTags from '../shared/RestrictionTags';
import CourseTags from '../shared/CourseTags';


export const Recipe = (props: { recipe: RecipeData }) => {
    /*Function to render the 4 dietary restriction tags 
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
    }*/
    return (
        <div>
            <div className="recipeDataContainer">
                <div className="ingrPhotoContainer">
                    <div className="ingrContainer">
                        <div className="ingrRestContainer">
                            <div className="tags">
                                <RestrictionTags data={props.recipe} showText={true} />
                                <CourseTags data={props.recipe} />
                            </div>
                            <Ingredients recipe={props.recipe} />
                        </div>
                    </div>
                    {/* Photo of the recipe */}
                    <RecipeImage recipe={props.recipe} />
                </div>
            </div>
            {/* Intstructions*/}
            <Instructions recipe={props.recipe} />
        </div>
    )
}



import React from 'react';
import RecipeData from '../../types/RecipeData';
import '../../style/Recipe.css';
import { Ingredients } from './Ingredients';
import { RecipeImage } from './RecipeImage';
import { Instructions } from './Instructions';
import RestrictionTags from '../shared/RestrictionTags';
import CourseTags from '../shared/CourseTags';


export const Recipe = (props: { recipe: RecipeData }) => {
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



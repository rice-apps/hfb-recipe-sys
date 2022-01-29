import React from 'react';
import RecipeData from '../../types/RecipeData';
import '../../style/Recipe.css';
import { Ingredients } from './Ingredients';
import { RecipeImage } from './RecipeImage';
import { Instructions } from './Instructions';
import RestrictionTags from '../shared/RestrictionTags';
import CourseTags from '../shared/CourseTags';
import { useMediaQuery } from 'react-responsive';


export const Recipe = (props: { recipe: RecipeData }) => {
    const isBigScreen = useMediaQuery({ query: '(min-width: 1200px)' });

    return (
        <div className={isBigScreen ? "" : "mobile"}>
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
                            {/* Intstructions*/}
              <Instructions recipe={props.recipe} />
            </div>

        </div>
    )
}



import { useState } from 'react';
import RecipeData from '../../types/RecipeData';
import '../../style/Recipe.css';
import { Ingredients } from './Ingredients';
import { RecipeImage } from './RecipeImage';
import { Instructions } from './Instructions';
import RestrictionTags from '../shared/RestrictionTags';
import CourseTags from '../shared/CourseTags';
import { useMediaQuery } from 'react-responsive';
import Slider from '@mui/material/Slider';


function valuetext(scale: number) {
    return scale + " serving(s)";
}
  
export const Recipe = (props: { recipe: RecipeData }) => {
    const isBigScreen = useMediaQuery({ query: '(min-width: 1200px)' });
    const [scale, setScale] = useState(1);

    const handleChange = ((event: any, value: any, activeThumb: any) => {setScale(value)})

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
                            <h3>Want more servings?</h3>
                            <Slider
                                aria-label="Serving"
                                defaultValue={1}
                                getAriaValueText={valuetext}
                                valueLabelDisplay="auto"
                                step={0.5}
                                marks
                                min={0.5}
                                max={10}
                                onChange={handleChange}
                                />
                            <Ingredients recipe={props.recipe} scale={scale} />
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



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
import Fraction from 'fraction.js';

export const formatFraction = (frac: string, sc: number) => {
    if(frac == "0" || frac == undefined) {
        return "";
    }

    try {
        var ff = frac.trim().split('-');
        var f = new Fraction(ff[0]);
        if(ff.length > 1) {
            var f2 = new Fraction(ff[1]);
            return f.mul(sc).toFraction(true) + " - " + f2.mul(sc).toFraction(true);
        }
        return f.mul(sc).toFraction(true);
    } catch (e) {
        console.log(e);
    }

    return null;
}
  
export const Recipe = (props: { recipe: RecipeData, updateScale: Function}) => {
    const isBigScreen = useMediaQuery({ query: '(min-width: 1200px)' });
    const [scale, setScale] = useState(1);

    const handleChange = ((event: any, value: any, activeThumb: any) => {
        setScale(value);
        props.updateScale(value);
    })

    // Deal with image vs. no image
    const containsImage = Boolean(props.recipe.photo);
    const ingrContainerStyle = containsImage ? {} : { width: "62%" };

    return (
        <div className={isBigScreen ? "" : "mobile"}>
            <div className="recipeDataContainer">
                <div className="ingrPhotoContainer">
                    <div className="ingrContainer" style={ingrContainerStyle}>
                        <div className="ingrRestContainer">
                            <div className="tags">
                                <RestrictionTags data={props.recipe} showText={true} />
                                <CourseTags data={props.recipe} />
                            </div>
                            <h3>Change serving number: &nbsp; x{scale}</h3>
                            <Slider
                                className="servingsSlider"
                                aria-label="Serving"
                                defaultValue={1}
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
                    {containsImage? 
                        <RecipeImage recipe={props.recipe} />:
                        null}
                </div>
                            {/* Intstructions*/}
              <Instructions recipe={props.recipe} />
            </div>

        </div>
    )
}



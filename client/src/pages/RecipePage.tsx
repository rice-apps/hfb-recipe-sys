import React from 'react';
import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import RecipeData from '../types/RecipeData';
import { PrintableRecipe } from '../components/recipe/PrintableRecipe';

import '../style/Recipe.css';
import { Recipe } from '../components/recipe/Recipe';
import Header from '../components/recipe/header/Header';

import HFBHeader from '../components/header/HFBHeader';
import HFBFooter from '../components/footer/HFBFooterFinal';

/**
 * Props are the list of recipes 
 */
export default function RecipePage(props: { recipes: RecipeData[] }) {
    //Get the ID from the URL for this specific recipe
    const { id } = useParams<{ id: string }>();
    const [scale, setScale] = useState(1);
    //Define the reference to the printable component 
    const printComponentRef = useRef<HTMLDivElement>(null);

    function updateScale(scaleVal: number) {
        setScale(scaleVal);
    }

    //Set the recipe to be the one in the List with the ID from the URL
    const recipe = props.recipes.find(recipe => recipe.id === id)

    //Main Rendered component checks if the recipes have been found before loading anything
    return (recipe === undefined ? <></> :
        <>
            <HFBHeader />
            <Header recipe={recipe} scale={scale}/>

            <Recipe recipe={recipe} updateScale={updateScale} />

            {/* What is being printed -> technically on the page but display is None meaning it wont show up*/}
            <div style={{ display: "none" }}>
                {/*What gets printed  */}
                <div ref={printComponentRef}>
                    <PrintableRecipe recipe={recipe} scale={scale} />
                </div>
            </div>
            <HFBFooter />
        </>
    )
}

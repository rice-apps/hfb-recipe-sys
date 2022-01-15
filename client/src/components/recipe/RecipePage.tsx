import React from 'react';
import { useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Row, Col } from 'antd';
import { Icon } from 'semantic-ui-react'
import ReactToPrint from "react-to-print";

import { RestrictionTag } from '../main/RecipeCard';
import RecipeData from '../../types/RecipeData';
import { PrintableRecipe } from './PrintableRecipe';

import '../../style/Recipe.css';
import { TopHeader } from './TopHeader';
import { MainRecipeData } from './MainRecipeData';
import { BottomHeader } from './BottomHeader';

/*
    Props are the list of recipes 
*/
export default function RecipePage(props: {recipes: RecipeData[]}) {
    //Get the ID from the URL for this specific recipe
    const { id } = useParams<{ id: string }>();
    //Define the reference to the printable component 
    const printComponentRef = useRef<HTMLDivElement>(null);

    //Set the recipe to be the one in the List with the ID from the URL
    const recipe = props.recipes.find(recipe => recipe.id === id)


    

    //Main Rendered component checks if the recipes have been found before loading anything
    return ( recipe === undefined ? <></> :
        <>

            <div className="header_bar">
                <header>
                    <TopHeader recipe = {recipe}/>
                        {/* Sub information to title on the next row underneath */}
 
                    <BottomHeader recipe = {recipe} />
                </header>
            </div>

            <MainRecipeData recipe = {recipe}/>


             {/* What is being printed -> technically on the page but display is None meaning it wont show up*/}
            <div style={{ display: "none" }}>
                 {/*What gets printed  */}
                <div ref={printComponentRef}>
                     <PrintableRecipe recipe = {recipe}/>
                </div>
            </div>
    </>
  )
}

import React from 'react';
import { useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import RecipeData from '../types/RecipeData';
import { PrintableRecipe } from '../components/recipe/PrintableRecipe';

import '../style/Recipe.css';
import { Recipe } from '../components/recipe/Recipe';
import Header from '../components/recipe/header/Header';

import { RecipeCard } from '../components/main/RecipeCard';
import getRecommendedRecipes from '../util/recommendRecipes'

/**
 * Props are the list of recipes 
 */
export default function RecipePage(props: { recipes: RecipeData[] }) {
    const history = useHistory();

    //Get the ID from the URL for this specific recipe
    const { id } = useParams<{ id: string }>();
    //Define the reference to the printable component 
    const printComponentRef = useRef<HTMLDivElement>(null);

    //Set the recipe to be the one in the List with the ID from the URL
    const recipe = props.recipes.find(recipe => recipe.id === id)

    //Main Rendered component checks if the recipes have been found before loading anything
    return (recipe === undefined ? <></> :
        <>
            <Header recipe={recipe}/>

            <Recipe recipe={recipe} />

            <div className="recipeRecContainer"> 
                {getRecommendedRecipes(props.recipes, [recipe], 0).map(recipe => { //recipeCardContainer
                  return (
                    <div className="recipeCard" onClick={() => history.push(`/${recipe.id}`)} key={recipe.id}>
                      <RecipeCard data={recipe} />
                    </div>
                  );
                })}
                </div>

            {/* What is being printed -> technically on the page but display is None meaning it wont show up*/}
            <div style={{ display: "none" }}>
                {/*What gets printed  */}
                <div ref={printComponentRef}>
                    <PrintableRecipe recipe={recipe} />
                </div>
            </div>
        </>
    )
}

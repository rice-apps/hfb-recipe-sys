import { Row, Col } from 'antd';
import RecipeData from '../../types/RecipeData';
import '../../style/PrintableRecipe.css';
import { formatFraction } from './Recipe';

const PrintableContainer = (props: { recipe: RecipeData, scale: number }) => {
    return (
        <div className="printableContainer" >
            <h1 className="recipeTitle">{props.recipe.title}</h1>
            {/* Ingredients*/}
            <h2 className="ingredientsHeader">Ingredients</h2>
            <div className="ingredientsContainer">
                {props.recipe.ingredientList && props.recipe.ingredientList.map((dict: any) => {
                    return (
                        <div className="ingredient"> - {formatFraction(dict["quantity"], props.scale)} {dict["ingredient"]}</div>
                    );
                })}
            </div>
            {/* Instructions*/}
            <h2 className="directionsHeader">Directions</h2>
            <div className="directionsContainer">
                {props.recipe.instructions && props.recipe.instructions.split("\n").map((instr: string) => {
                    return (
                        <div className="direction">
                            {instr}
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export const PrintableRecipe = (props: { recipe: RecipeData, scale: number }) => {
    return (
        <div className="printablePage">
            {/* STULL BROKEN NOT ON CHROME */}
            <PrintableContainer recipe={props.recipe} scale={props.scale} />
            {/* Line */}
            <hr></hr>
            {/* Repeat of top half*/}
            <PrintableContainer recipe={props.recipe} scale={props.scale} />
        </div>
    )
}



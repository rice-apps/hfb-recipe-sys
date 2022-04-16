import RecipeData from '../../types/RecipeData';
import '../../style/PrintableRecipe.css';
import { formatFraction } from './Recipe';
import appleLogo from './apple.png';

const PrintableContainer = (props: { recipe: RecipeData, scale: number }) => {
    return (
        <div>
            <div className="printableContainer" >
                <img alt="Houston Food Bank Apple Icon" className="appleLogo" src={appleLogo}></img>
                <h1 className="recipeTitle">{props.recipe.title}</h1>
                {/* Ingredients */}
                <h2 className="ingredientsHeader">Ingredients</h2>
                <div className="ingredientsContainer">
                    {props.recipe.ingredientList && props.recipe.ingredientList.map((dict: any) => {
                        return (
                            <div className="ingredient"> - {formatFraction(dict["quantity"], props.scale)} {dict["ingredient"]}</div>
                        );
                    })}
                </div>
                {/* Instructions */}
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
                <div  className="USDA">USDA label: USDA is an equal opportunity provider and employer. This material was funded by USDA’s Supplemental Nutrition Assistance Program — SNAP. For more information about SNAP and how to apply, visit YourTexasBenefits.com</div>
                <img alt="Houston Food Bank Logo" className="hfbLogo" src="https://www.houstonfoodbank.org/wp-content/uploads/2018/08/Logo_HFB_Horz_color_6in_300dpi.jpg"></img>
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

export default PrintableContainer;


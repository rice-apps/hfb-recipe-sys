import React from 'react';
import { useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Row, Col } from 'antd';
import { Icon } from 'semantic-ui-react'
import ReactToPrint from "react-to-print";

import { RestrictionTag } from '../components/RecipeCard';
import RecipeData from '../types/RecipeData';
import { preProcessFile } from 'typescript';



const { Text } = Typography;

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

/*
    Props are the list of recipes 
*/
export default function Recipe(props: {recipes: RecipeData[]}) {
    //Get the ID from the URL for this specific recipe
    const { id } = useParams<{ id: string }>();
    //Define the reference to the printable component 
    const printComponentRef = useRef<HTMLDivElement>(null);

    //Set the recipe to be the one in the List with the ID from the URL
    const recipe = props.recipes.find(recipe => recipe.id === id)

    //All us to have a back button
    let history = useHistory();

    //Function to render the 4 dietary restriction tags 
    const renderDietaryRestrictions = () => {
        if (!recipe) return null;

        var rest = [];
        if (recipe.glutenFree) {
            rest.push(
                <div className="restTag">
                    <span style={{ color: "#F1C94D" }}>Gluten-free</span>
                    <RestrictionTag color="#F1C94D" icon="leaf" />
                </div>);
        }
        if (recipe.vegan) {
            rest.push(<RestrictionTag color="#3E833D" icon="leaf" />);
        }
        if (recipe.vegetarian) {
            rest.push(<RestrictionTag color="#7EAF53" icon="leaf" />);
        }
        if (recipe.nutFree) {
            rest.push(<RestrictionTag color="#CD5237" icon="leaf" />);
        }
        return (
            <div className="recipeRestTagContainer">
                {rest}
            </div>
        );
    }

    //Main Rendered component checks if the recipes have been found before loading anything
    return ( recipe === undefined ? <></> :
        <>

            <div className="header_bar">
                <header>
                    {/* forms the green header bar seen*/}
                    <Row className="top_row">
                        {/* Go back button using the Icons from semantic UI*/}
                        <Col className="gutter-row" flex={1} onClick={() => history.goBack()}>
                            <Icon name='angle left' className="back_button" size="large" inverted />
                        </Col>
                        <Col className="gutter-row" flex={20}>
                            {/* Main title*/}
                            <div className="name_header">{recipe.title}</div>
                        </Col>
                        <Col className="gutter-row" flex={1}>

                        </Col>
                    </Row>
                        {/* Sub information to title on the next row underneath */}
 
                    <Row gutter={8} className="info_row" justify="center">
                        <Col className="gutter-row" span={3} >
                             {/* Cusine Type */}
                            <div className="detail_header" >Cusine</div>
                            <div className="information_header">{recipe.cuisine}</div>
                        </Col>
                        <Col>
                             {/* Bar */}
                            <div className="vl"></div>
                        </Col>
                        <Col className="gutter-row" span={3}>
                             {/* Serving Size */}
                            <div className="detail_header" >Serving Size</div>
                            <div className="information_header">{recipe.servings}</div>

                        </Col>
                        <Col>
                         {/* Bar */}
                            <div className="vl"></div>
                        </Col>
                        <Col className="gutter-row" span={3}>
                             {/* Calories  */}
                            <div className="detail_header" >Calories</div>
                            <div className="information_header">{recipe.calories}</div>
                        </Col>
                        <Col className="gutter-row" span={3}>
                             {/* Print Button */}
                            <ReactToPrint
                                trigger={() =>
                                    <div className="print_button">                <Icon name='print' size='large' color='green' />
                                        <text className="print_text">Print Recipe</text></div>
                                }
                                content={() => printComponentRef.current}
                                documentTitle="AwesomeFileName"
                            />
                             {/* Prints from the print div below*/}

                        </Col>
                    </Row>
                </header>
            </div>

            <div className="recipeDataContainer">
                <div className="ingrPhotoContainer">
                    <div className="ingrContainer">
                        <div className="ingrRestContainer">
                            <div className="restrictions">
                                {renderDietaryRestrictions()}
                            </div>
                             {/* Ingreident List*/}
                            <div className="ingredients">
                                <h2>Ingredients</h2>
                                <ul className="ingredientsList">
                                    {recipe.ingredientList && recipe.ingredientList.map((dict: any) => {
                                        return (
                                            <li>{dict["quantity"]} {dict["ingredient"]}</li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                     {/* Photo of the recipe */}
                    <div className="photoContainer">
                        <img src={recipe.photo} className="image" />
                    </div>
                </div> 
            </div>
             {/* Intstructions*/}
            <div className="instructionsContainer">
                    <h2>Instructions</h2>
                    {recipe.instructions && recipe.instructions.split("\n").map((instr: string) => {
                        return (
                            <p>{instr}</p>
                        );
                    })}

                </div>


             {/* What is being printed -> technically on the page but display is None meaning it wont show up*/}
            <div style={{ display: "none" }}>
                 {/*What gets printed  */}
                <div ref={printComponentRef}>
                     {/*Title */}
                    <div style={{ height: "50vh", width: "95vw" }}>
                        <h1>{recipe.title}</h1>
                        <Row gutter={[8, 16]}>
                             {/* Ingreidents*/}
                            <Col span={8} flex={"flex"} style={{ height: "40vh", width: "95vw" }}> <h2>Ingredients</h2>
                                {recipe.ingredientList && recipe.ingredientList.map((dict: any) => {
                                    return (
                                        <p style={{ margin: "2mm" }}> - {dict["quantity"]} {dict["ingredient"]}</p>
                                    );
                                })}</Col>
                             {/* Instructions*/}
                            <Col span={16} flex={"flex"} style={{ height: "40vh", width: "95vw" }}> <h2>Instructions</h2>
                                {recipe.instructions && recipe.instructions.split("\n").map((instr: string) => {
                                    return (
                                        <p>{instr}</p>
                                    );
                                })}  </Col>
                        </Row>
                    </div>
                     {/* Line */}
                    <hr></hr>
                     {/* Repeat of top half*/}
                    <div style={{ height: "50vh", width: "95vw" }}>
                        <h1>{recipe.title}</h1>
                        <Row gutter={[8, 16]}>

                            <Col span={8} flex={"flex"} style={{ height: "40vh", width: "95vw" }}> <h2>Ingredients</h2>
                                {recipe.ingredientList && recipe.ingredientList.map((dict: any) => {
                                    return (
                                        <p style={{ margin: "2mm" }}> - {dict["quantity"]} {dict["ingredient"]}</p>
                                    );
                                })}</Col>
                            <Col span={16} flex={"flex"} style={{ height: "40vh", width: "95vw" }}> <h2>Instructions</h2>
                                {recipe.instructions && recipe.instructions.split("\n").map((instr: string) => {
                                    return (
                                        <p>{instr}</p>
                                    );
                                })}  </Col>
                        </Row>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Recipe;
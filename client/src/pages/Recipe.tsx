import React from 'react';
import { useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Row, Col } from 'antd';
import { Icon } from 'semantic-ui-react'
import ReactToPrint from "react-to-print";

import { RestrictionTag } from '../components/RecipeCard';
import RecipeData from '../types/RecipeData';

import '../style/Recipe.css';


function Recipe(props: { recipes: RecipeData[] }) {
  const { id } = useParams<{ id: string }>();
  const printComponentRef = useRef<HTMLDivElement>(null);

  const recipe = props.recipes.find(recipe => recipe.id === id)

  let history = useHistory();

  function renderDietaryRestrictions() {
    if (!recipe) return null;

    var rest = [];
    if (recipe.glutenFree) {
      rest.push(
        <div className="restTag" key={0}>
          <span style={{ color: "#F1C94D" }}>Gluten-free</span>
          <RestrictionTag color="#F1C94D" icon="leaf" />
        </div>);
    }
    if (recipe.vegan) {
      rest.push(<RestrictionTag color="#3E833D" icon="leaf" key={1}/>);
    }
    if (recipe.vegetarian) {
      rest.push(<RestrictionTag color="#7EAF53" icon="leaf" key={2}/>);
    }
    if (recipe.nutFree) {
      rest.push(<RestrictionTag color="#CD5237" icon="leaf" key={3}/>);
    }
    return (
      <div className="recipeRestTagContainer">
        {rest}
      </div>
    );
  }


  return (recipe === undefined ? <></> :
    <>
      <div className="header_bar">
        <header>

          <Row className="top_row">
            <Col className="gutter-row" flex={1} onClick={() => history.goBack()}>
              <Icon name='angle left' className="back_button" size="large" inverted />
            </Col>
            <Col className="gutter-row" flex={20}>
              <div className="name_header">{recipe.title}</div>
            </Col>
            <Col className="gutter-row" flex={1}>

            </Col>
          </Row>

          <Row gutter={8} className="info_row" justify="center">
            <Col className="gutter-row" span={3} >
              <div className="detail_header" >Cusine</div>
              <div className="information_header">{recipe.cuisine}</div>
            </Col>
            <Col>
              <div className="vl"></div>
            </Col>
            <Col className="gutter-row" span={3}>
              <div className="detail_header" >Serving Size</div>
              <div className="information_header">{recipe.servings}</div>

            </Col>
            <Col>
              <div className="vl"></div>
            </Col>
            <Col className="gutter-row" span={3}>

              <div className="detail_header" >Calories</div>
              <div className="information_header">{recipe.calories}</div>
            </Col>
            <Col className="gutter-row" span={3}>
              <ReactToPrint
                trigger={() =>
                  <div className="print_button">
                    <Icon name='print' size='large' color='green' />
                    <span className="print_text">Print Recipe</span>
                  </div>
                }
                content={() => printComponentRef.current}
                documentTitle="AwesomeFileName"
              />
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
              <div className="ingredients">
                <h2>Ingredients</h2>
                <ul className="ingredientsList">
                  {recipe.ingredientList && recipe.ingredientList.map((ingredient, idx) => {
                    return (
                      <li key={idx}>{ingredient.quantity} {ingredient.ingredient}</li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="photoContainer">
            <img src={recipe.photo} className="image" alt="Recipe"/>
          </div>
        </div>
      </div>
      <div className="instructionsContainer">
        <h2>Instructions</h2>
        {recipe.instructions && recipe.instructions.split("\n").map((instr, idx) => {
          return (
            <p key={idx}>{instr}</p>
          );
        })}
      </div>

      <div style={{ display: "none" }}>
        <div ref={printComponentRef}>
          <div style={{ height: "50vh", width: "95vw" }}>
            <h1>{recipe.title}</h1>
            <Row gutter={[8, 16]}>

              <Col span={8} flex={"flex"} style={{ height: "40vh", width: "95vw" }}> <h2>Ingredients</h2>
                {recipe.ingredientList && recipe.ingredientList.map((ingredient, idx) => {
                  return (
                    <p style={{ margin: "2mm" }} key={idx}> - {ingredient.quantity} {ingredient.ingredient}</p>
                  );
                })}</Col>
              <Col span={16} flex={"flex"} style={{ height: "40vh", width: "95vw" }}> <h2>Instructions</h2>
                {recipe.instructions && recipe.instructions.split("\n").map((instr, idx) => {
                  return (
                    <p key={idx}>{instr}</p>
                  );
                })}  </Col>
            </Row>
          </div>

          <hr></hr>
          <div style={{ height: "50vh", width: "95vw" }}>
            <h1>{recipe.title}</h1>
            <Row gutter={[8, 16]}>

              <Col span={8} flex={"flex"} style={{ height: "40vh", width: "95vw" }}> <h2>Ingredients</h2>
                {recipe.ingredientList && recipe.ingredientList.map((ingredient, idx) => {
                  return (
                    <p style={{ margin: "2mm" }} key={idx}> - {ingredient.quantity} {ingredient.ingredient}</p>
                  );
                })}</Col>
              <Col span={16} flex={"flex"} style={{ height: "40vh", width: "95vw" }}> <h2>Instructions</h2>
                {recipe.instructions && recipe.instructions.split("\n").map((instr, idx) => {
                  return (
                    <p key={idx}>{instr}</p>
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
import React from 'react';
import RecipeData from '../../types/RecipeData';
import CourseTags from  '../shared/CourseTags';
import { Row, Col } from 'antd';
import RestrictionTags from '../shared/RestrictionTags';
import saved from '../saved.png';

import '../../style/RecipeCard.css';

// Recipe card, displays recipe photo, meal types, and dietary restrictions
export const RecipeCardMyRecipe = (props: { data: RecipeData }) => {
  const unsaveRecipe = () => {
    console.log("recipe unsaved");
  }
  return (
    <div className="recipeCardData">
      { /* Recipe image */ }
      <img src={props.data.photo} className="recipePhoto" alt={props.data.title} />
      <div className="middle" onClick={ unsaveRecipe }>
        <div className="text">Unsave!</div>
      </div>
          <div className="recipeCardInfo">
            <div> 
              { /* Recipe title */ }
              {/* <Row>  */}
              
              <Col className="gutter-row" span={15} > 

                  <h4 >{props.data.title} </h4>
              </Col>
              <Col className="gutter-row" span = {25}>
                  <img src = {saved} className = "saved"/>
              </Col>

              {/* <Col className="gutter-row" span={15} > 

                  <h4 >{props.data.title} </h4>
              </Col>
              <Col className="gutter-row" span = {25}>
                  <img src = {saved} className = "saved"/>
              </Col> */}
              {/* </Row> */}
              
              { /* Course tags, displayed in 3 columns */ }
              
              <CourseTags data={props.data} />
            </div>
        
        { /* Dietary restriction tags */ }
        <RestrictionTags data={props.data} showText={false} />
      </div>
    </div>
  )
}

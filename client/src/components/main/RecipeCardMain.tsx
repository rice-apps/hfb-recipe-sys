import React from 'react';
import RecipeData from '../../types/RecipeData';
import CourseTags from  '../shared/CourseTags';
import RestrictionTags from '../shared/RestrictionTags';
import { Row, Col } from 'antd';
import unsaved from '../unsaved.png';
import saved from '../saved.png';

import '../../style/RecipeCard.css';


// Recipe card, displays recipe photo, meal types, and dietary restrictions
export const RecipeCardMain = (props: { data: RecipeData }) => {
  var isSaved:Boolean = true;
  // fix feature
  const saveRecipe = () => {
    isSaved = !isSaved;
    console.log("recipe unsaved");

    // if(isSaved){
    //   <div className="text">Save!</div>
    // }
    // else
    // {
    //    <div className="text">Unsave!</div>
    // }

    // return {isSaved}
  }
  return (
    <div className="recipeCardData">
      { /* Recipe image */ }
      <img src={props.data.photo} className="recipePhoto" alt={props.data.title} />


      <div className="middle" onClick={ saveRecipe }>
        {/* <div className="text">Save!</div> */}
      </div>

      {/* <div className="save" onClick={ unsaveRecipe }>
        <div className="text">Save!</div>
      </div>
      <div className="view" onClick={ unsaveRecipe }>
        <div className="text">View Recipe</div>
      </div> */}
          <div className="recipeCardInfo">
            <div> 
              { /* Recipe title */ }
              <Col className="gutter-row" span={15} > 

                  <h4 >{props.data.title} </h4>
              </Col>
              <Col className="gutter-row" span = {25}>
                  <img src = {unsaved} className = "saved"/>
              </Col>
            
              { /* Course tags, displayed in 3 columns */ }
              <CourseTags data={props.data} />
            </div>
        
        { /* Dietary restriction tags */ }
        <RestrictionTags data={props.data} showText={false} />
      </div>
    </div>
  )
}

import React, { useState } from 'react';
import RecipeData from '../../types/RecipeData';
import CourseTags from  '../shared/CourseTags';
import RestrictionTags from '../shared/RestrictionTags';
import {  useNavigate } from 'react-router-dom';
import { Row, Col } from 'antd';
import unsaved from '../unsaved.png';
import saved from '../saved.png';

import '../../style/RecipeCard.css';


// Recipe card, displays recipe photo, meal types, and dietary restrictions
export const RecipeCard = (props: { data: RecipeData }) => {
  // FIX!
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(false);

  // fix feature

  const saveRecipe = () => {

    setIsSaved(!isSaved);
  }
  return (
    <div className="recipeCardData">
      { /* Recipe image */ }
      <img src={props.data.photo} className="recipePhoto" alt={props.data.title} />


      <div className="save" onClick={ saveRecipe }>
        <div className="text"> { isSaved ? "Unsave!" : "Save!"}</div>
      </div>

      <div className="view" onClick={() => navigate(`/${props.data.id}`)} key={props.data.id}>
        <div className="text">View Recipe</div>
      </div>
          <div className="recipeCardInfo">
            <div> 
              { /* Recipe title */ }
              <Col className="gutter-row" span={15} > 

                  <h4 >{props.data.title} </h4>
              </Col>
              <Col className="gutter-row" span = {25}>
                  <img src = { isSaved ? saved : unsaved} className = "saved"/>
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

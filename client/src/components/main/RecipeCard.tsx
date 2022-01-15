import React from 'react';
import { Row, Col } from 'antd';
import RecipeData from '../../types/RecipeData';
import '../../style/RecipeCard.css';
import { Icon, SemanticICONS } from 'semantic-ui-react';

// Course tag, displays meal type
const CourseTag = (props: { text: string }) => {
  return (
    <p className="courseTagText">{props.text}</p>
  )
}

// Restriction tag (gluten free, vegan, etc.)
export const RestrictionTag = (props: { color: string, icon: SemanticICONS }) => {
  return (
    <div
      style={{
        /* Tag color based on input */
        backgroundColor: props.color,
      }}
      className="restrictionTag"
    >
      <Icon inverted name={props.icon} />
    </div>
  )
}

// Recipe card, displays recipe photo, meal types, and dietary restrictions
export const RecipeCard = (props: { data: RecipeData }) => {
  // Checks for dietary restrictions and returns container with tags for each
  const renderDietaryRestrictions = () => {
    var rest = [];
    // Gluten free tag
    if (props.data.glutenFree) {
      rest.push(<RestrictionTag color="#F1C94D" icon="leaf" key={0}/>);
    }
    // Vegan tag
    if (props.data.vegan) {
      rest.push(<RestrictionTag color="#3E833D" icon="leaf" key={1}/>);
    }
    // Vegetarian tag
    if (props.data.vegetarian) {
      rest.push(<RestrictionTag color="#7EAF53" icon="leaf" key={2}/>);
    }
    // Nut free tag
    if (props.data.nutFree) {
      rest.push(<RestrictionTag color="#CD5237" icon="leaf" key={3}/>);
    }
    // Create and return container with all tags
    return (
      <div className="restrictionTagContainer">
        {rest}
      </div>
    );
  }

  return (
    <div className="recipeCardData">
      { /* Recipe image */ }
      <img src={props.data.photo} className="recipePhoto" alt={props.data.title} />
      <div className="recipeCardInfo">
        <div className="courseTags">
          { /* Recipe title */ }
          <h4>{props.data.title}</h4>
          { /* Course tags, displayed in 3 columns */ }
          <Row
            style={{
              marginBottom: "10px",
            }}
            gutter={[8, 8]}>
            {props.data.course.map((course, idx) => {
              return (
                <Col span={8} key={idx}>
                  <CourseTag text={course} />
                </Col>
              );
            })}
          </Row>
        </div>
        
        { /* Dietary restriction tags */ }
        <div className="restrictionTags">
          {renderDietaryRestrictions()}
        </div>
      </div>
    </div>
  )
}

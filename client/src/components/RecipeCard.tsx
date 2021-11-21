import React from 'react';
import { Row, Col } from 'antd';
import RecipeData from '../types/RecipeData';
import '../style/RecipeCard.css';
import { Icon, SemanticICONS } from 'semantic-ui-react';

const CourseTag = (props: { text: string }) => {
  return (
    <p className="courseTagText">{props.text}</p>
  )
}

export const RestrictionTag = (props: { color: string, icon: SemanticICONS }) => {
  return (
    <div
      style={{
        backgroundColor: props.color,
      }}
      className="restrictionTag"
    >
      <Icon inverted name={props.icon} />
    </div>
  )
}

export const RecipeCard = (props: { data: RecipeData }) => {
  const renderDietaryRestrictions = () => {
    var rest = [];
    if (props.data.glutenFree) {
      rest.push(<RestrictionTag color="#F1C94D" icon="leaf" key={0}/>);
    }
    if (props.data.vegan) {
      rest.push(<RestrictionTag color="#3E833D" icon="leaf" key={1}/>);
    }
    if (props.data.vegetarian) {
      rest.push(<RestrictionTag color="#7EAF53" icon="leaf" key={2}/>);
    }
    if (props.data.nutFree) {
      rest.push(<RestrictionTag color="#CD5237" icon="leaf" key={3}/>);
    }
    return (
      <div className="restrictionTagContainer">
        {rest}
      </div>
    );
  }

  return (
    <div className="recipeCardData">
      <img src={props.data.photo} className="recipePhoto" alt="Recipe" />
      <div className="recipeCardInfo">
        <div className="courseTags">
          <h4>{props.data.title}</h4>
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

        <div className="restrictionTags">
          {renderDietaryRestrictions()}
        </div>
      </div>
    </div>
  )
}

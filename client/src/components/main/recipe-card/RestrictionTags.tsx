import React from 'react';
import RecipeData from '../../../types/RecipeData';
import RestrictionTag, { RTColors } from '../../shared/RestrictionTag';

import '../../../style/RecipeCard.css';

// Check for dietary restrictions and returns container with tags for each
const renderDietaryRestrictions = (data: RecipeData) => {
    var rest = [];
    // Gluten free tag
    if (data.glutenFree) {
        rest.push(<RestrictionTag color={RTColors.GlutenFree} icon="leaf" key={0}/>);
    }
    // Vegan tag
    if (data.vegan) {
        rest.push(<RestrictionTag color={RTColors.Vegan} icon="leaf" key={1}/>);
    }
    // Vegetarian tag
    if (data.vegetarian) {
        rest.push(<RestrictionTag color={RTColors.Vegetarian} icon="leaf" key={2}/>);
    }
    // Nut free tag
    if (data.nutFree) {
        rest.push(<RestrictionTag color={RTColors.NutFree} icon="leaf" key={3}/>);
    }
    // Create and return container with all tags
    return (
        <div className="restrictionTagContainer">
            {rest}
        </div>
    );
}

// Render recipe tags within a right aligned container
const RestrictionTags = (props: { data: RecipeData }) => {
    return (
        <div className="restrictionTags">
          {renderDietaryRestrictions(props.data)}
        </div>
    )
}

export default RestrictionTags;
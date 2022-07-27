import React from 'react';
import { Icon, SemanticICONS } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, faLeaf, faBreadSlice, faSeedling, faLemon, faCheese } from '@fortawesome/free-solid-svg-icons'
import RecipeData from '../../types/RecipeData';

import '../../style/RecipeCardMain.css';

// Tag colors
const RTColors = {
    GlutenFree: "#F1C94D",
    Vegan: "#3E833D",
    Vegetarian: "#7EAF53",
    NutFree: "#CD5237",
    DairyFree: "#037BFC",
}

// Tag icons
const RTIcons = {
    GlutenFree: faBreadSlice,
    Vegan: faLeaf,
    Vegetarian: faSeedling,
    NutFree: faLemon,
    DairyFree: faCheese,
}

// Check for dietary restrictions and returns container with tags for each
export const renderDietaryRestrictions = (data: RecipeData) => {
    var rest = [];

    // Gluten free tag
    if (data.glutenFree) {
        rest.push(<RestrictionTag color={RTColors.GlutenFree} icon={RTIcons.GlutenFree} key={0}/>);
    }
    // Vegan tag
    if (data.vegan) {
        rest.push(<RestrictionTag color={RTColors.Vegan} icon={RTIcons.Vegan} key={1}/>);
    }
    // Vegetarian tag
    if (data.vegetarian) {
        rest.push(<RestrictionTag color={RTColors.Vegetarian} icon={RTIcons.Vegetarian} key={2}/>);
    }
    // Nut free tag
    if (data.nutFree) {
        rest.push(<RestrictionTag color={RTColors.NutFree} icon={RTIcons.NutFree} key={3}/>);
    }
    // Nut free tag
    if (data.dairyFree) {
        rest.push(<RestrictionTag color={RTColors.DairyFree} icon={RTIcons.DairyFree} key={3}/>);
    }

    // Create and return container with all tags
    return (
        <div className="restrictionTagContainer">
            {rest}
        </div>
    );
}

export const renderDietaryRestrictionsWithText = (data: RecipeData) => {
    var rest = [];

    // Gluten free tag
    if (data.glutenFree) {
        rest.push(
            <div className="restTag">
                <RestrictionTag color={RTColors.GlutenFree} icon={RTIcons.GlutenFree} />
                <span style={{ color: RTColors.GlutenFree }}>Gluten-free</span>
            </div>);
    }
    // Vegan tag
    if (data.vegan) {
        rest.push(
            <div className="restTag">
                <RestrictionTag color={RTColors.Vegan} icon={RTIcons.Vegan} />
                <span style={{ color: RTColors.Vegan }}>Vegan</span>
            </div>);
    }
    // Vegetarian tag
    if (data.vegetarian) {
        rest.push(
            <div className="restTag">
                <RestrictionTag color={RTColors.Vegetarian} icon={RTIcons.Vegetarian} />
                <span style={{ color: RTColors.Vegetarian }}>Vegetarian</span>
            </div>);
    }
    // Nut free tag
    if (data.nutFree) {
        rest.push(
            <div className="restTag">
                <RestrictionTag color={RTColors.NutFree} icon={RTIcons.NutFree} />
                <span style={{ color: RTColors.NutFree }}>Nut free</span>
            </div>);
    }
    // Dairy free tag
    if (data.dairyFree) {
        rest.push(
            <div className="restTag">
                <RestrictionTag color={RTColors.DairyFree} icon={RTIcons.DairyFree} />
                <span style={{ color: RTColors.DairyFree }}>Dairy free</span>
            </div>);
    }

    // Create and return container with all tags
    return (
        <div className="recipeRestTagContainer">
            {rest}
        </div>
    );
}

// Restriction tag (gluten free, vegan, etc.)
const RestrictionTag = (props: { color: string, icon: IconDefinition }) => {
    return (
        <div
        style={{
            /* Tag color based on input */
            backgroundColor: props.color,
        }}
        className="restrictionTag"
        >
            <FontAwesomeIcon icon={props.icon} className="whiteIcon" />
        </div>
    )
}

// Wrapper for calling renderDietaryRestrictions, returns container with tags
const RestrictionTags = (props: { data: RecipeData, showText: Boolean }) => {
    return props.showText ? (
        renderDietaryRestrictionsWithText(props.data)
    ) : (
        renderDietaryRestrictions(props.data)
    )
}

export default RestrictionTags;
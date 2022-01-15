import React from 'react';
import { Icon, SemanticICONS } from 'semantic-ui-react';

import '../../style/RecipeCard.css';

export enum RTColors {
    GlutenFree = "#F1C94D",
    Vegan = "#3E833D",
    Vegetarian = "#7EAF53",
    NutFree = "#CD5237",
}

// Restriction tag (gluten free, vegan, etc.)
const RestrictionTag = (props: { color: string, icon: SemanticICONS }) => {
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

export default RestrictionTag;
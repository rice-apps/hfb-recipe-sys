import React from 'react';
import { useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Row, Col } from 'antd';
import { Icon } from 'semantic-ui-react'
import RecipeData from '../../types/RecipeData';
import { RestrictionTag } from '../main/RecipeCard';
import '../../style/Recipe.css';


export const RecipeImage = (props: { recipe: RecipeData } ) => {
        return (
            <div>
                     {/* Photo of the recipe */}
                    <div className="photoContainer">
                        <img src={props.recipe.photo} className="image" />
                    </div>
                </div> 
        )
    }



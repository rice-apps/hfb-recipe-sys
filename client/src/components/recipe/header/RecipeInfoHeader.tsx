import React from 'react';
import { useHistory } from 'react-router-dom';

import { Row, Col } from 'antd';
import { Icon } from 'semantic-ui-react'
import RecipeData from '../../../types/RecipeData';

import '../../../style/Recipe.css';
import { bottomNavigationClasses } from '@mui/material';

export const TopHeader = (props: { recipe: RecipeData }) => {
    //All us to have a back button
    const history = useHistory();
    return (
        <div>
            {/* forms the green header bar seen*/}
            <Row className="top_row">
                {/* Go back button using the Icons from semantic UI*/}
                <Col className="gutter-row" flex={1} onClick={() => history.goBack}>
                    <Icon name='angle left' className="back_button" size="large" inverted />
                </Col>
                <Col className="gutter-row" flex={20}>
                    {/* Main title*/}
                    <div className="name_header">{props.recipe.title}</div>
                </Col>
                <Col className="gutter-row" flex={1}>
                </Col>
            </Row>
        </div>
    )
}



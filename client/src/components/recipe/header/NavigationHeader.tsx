import React from 'react';
import { useRef } from 'react';
import { Row, Col } from 'antd';
import { Icon } from 'semantic-ui-react'
import RecipeData from '../../../types/RecipeData';
import ReactToPrint from "react-to-print";
import { PrintableRecipe } from '../PrintableRecipe';

import '../../../style/Recipe.css';


export const BottomHeader = (props: { recipe: RecipeData }) => {
    const printComponentRef = useRef<HTMLDivElement>(null);

    return (
        <div>
            <Row gutter={8} className="info_row" justify="center">
                <Col className="gutter-row" span={3} >
                    {/* Cusine Type */}
                    <div className="detail_header" >Cusine</div>
                    <div className="information_header">{props.recipe.cuisine}</div>
                </Col>
                <Col>
                    {/* Bar */}
                    <div className="vl"></div>
                </Col>
                <Col className="gutter-row" span={3}>
                    {/* Serving Size */}
                    <div className="detail_header" >Serving Size</div>
                    <div className="information_header">{props.recipe.servings}</div>

                </Col>
                <Col>
                    {/* Bar */}
                    <div className="vl"></div>
                </Col>
                <Col className="gutter-row" span={3}>
                    {/* Calories  */}
                    <div className="detail_header" >Calories</div>
                    <div className="information_header">{props.recipe.calories}</div>
                </Col>
                <Col className="gutter-row" span={3}>
                    {/* Print Button */}
                    <ReactToPrint
                        trigger={() =>
                            <div className="print_button">                <Icon name='print' size='large' color='green' />
                                <text className="print_text">Print Recipe</text></div>
                        }
                        content={() => printComponentRef.current}
                        documentTitle="AwesomeFileName"
                    />
                    {/* Prints from the print div below*/}

                </Col>
            </Row>
            <div />
            <div style={{ display: "none" }}>
                {/*What gets printed  */}
                <div ref={printComponentRef}>
                    <PrintableRecipe recipe={props.recipe} />
                </div>
            </div>
        </div>
    )
}

import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import { Icon } from 'semantic-ui-react'
import RecipeData from '../../../types/RecipeData';
import ReactToPrint from "react-to-print";
import { PrintableRecipe } from '../PrintableRecipe';
import {useMediaQuery} from 'react-responsive'
import {  useNavigate } from 'react-router-dom';

import '../../../style/Recipe.css';


export const BottomHeader = (props: { recipe: RecipeData }) => {
    const printComponentRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
      const isSmallScreen = useMediaQuery({ query: '(max-width: 800px)' })
      const isBigScreen = useMediaQuery({ query: '(min-width: 800px)' })
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
      const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
      const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    
    return (
        <div>
            {
                isBigScreen && 
                <div>
                
                <div className="info_row" >
                {/* <Row gutter={8} className="info_row" justify="center"> */}
                    <Col className="gutter-row" span={5} >
                        {/* Cuisine Type */}
                        <div id = "parent" >
                            <div className="detail_header">Cuisine</div>
                            <div className="information_header">{props.recipe.cuisine}</div>
                        </div>
                    </Col>

                    <Col className='gutter-row'>
                        <div className="vl"></div>
                    </Col>

                    <Col className="gutter-row" span={5}>
                        {/* Serving Size */}
    
                        <div className="detail_header" >Serving Size</div>
                        <div className="information_header">{props.recipe.servings}</div>
    
                    </Col>
                    
                    <Col>
                        {/* Bar */}
                        <div className={`${isBigScreen ? "vl" : "hl"}`}></div>
                    </Col>
                    <Col className="gutter-row" span={5}>
                        {/* Calories  */}
                        <div className="detail_header" >Calories</div>
                        <div className="information_header">{props.recipe.calories}</div>
                    </Col>
                    <Col className="gutter-row" span={3}>
                        <div className="myRecipe" onClick={() => navigate(`/MyRecipes`)} >
                            <div className="print_text">View My Recipes</div>
                        </div>
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
                    {/* <Col className = "myRecipe" span = {3}>
                    <div className="myRecipe">
                    <div className="text">View My Recipes</div>
                </div>
                    </Col> */}
                {/* </Row> */}
                </div>
                <div style={{ display: "none" }}>
                    {/*What gets printed  */}
                    <div ref={printComponentRef}>
                        <PrintableRecipe recipe={props.recipe} />
                    </div>
                </div>
            </div>
            }

            {isSmallScreen && 
                <div>
                <div className="info_row">
                <Row gutter={3} className="info_row" justify="center">
                    <Col className="gutter-row" span={30} >
                        {/* Cuisine Type */}
                        <div id = "parent" >
                            <div className="detail_header">Cuisine: </div>
                        </div>
                    </Col>

                    <Col className="gutter-row" span={50} >
                        {/* Cuisine Type */}
                        <div id = "parent" >
                            <div className="detail_header">{props.recipe.cuisine}</div>
                        </div>
                    </Col>
                 </Row>
                    
                <Col>
                    {/* Bar */}
                    {/* <div className={`${isBigScreen ? "vl" : "hl"}`}></div> */}
                    <div className="hl"></div>
                </Col>

                <Row gutter={3} className="info_row" justify="center">
                    <Col className="gutter-row" span={25} >
                        {/* Cuisine Type */}
                        <div id = "parent" >
                            <div className="detail_header">Serving Size: </div>
                        </div>
                    </Col>

                    <Col className="gutter-row" span={25} >
                        {/* Cuisine Type */}
                        <div id = "parent" >
                            <div className="detail_header">{props.recipe.servings}</div>
                        </div>
                    </Col>
                 </Row>
                  
                <Col>
                    {/* Bar */}
                    <div className={`${isBigScreen ? "vl" : "hl"}`}></div>
                </Col>

                <Row gutter={3} className="info_row" justify="center">
                    <Col className="gutter-row" span={25} >
                        {/* Cuisine Type */}
                        <div id = "parent" >
                            <div className="detail_header">Calories: </div>
                        </div>
                    </Col>

                    <Col className="gutter-row" span={25} >
                        {/* Cuisine Type */}
                        <div id = "parent" >
                            <div className="detail_header">{props.recipe.calories}</div>
                        </div>
                    </Col>
                 </Row>

                    <Col className="gutter-row" span={10}>
                    <div className="myRecipe" onClick={() => navigate(`/MyRecipes`)} >
                    <div className="print_text">View My Recipes</div>
                </div>
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
                {/* </Row> */}
                </div>
                <div style={{ display: "none" }}>
                    {/*What gets printed  */}
                    <div ref={printComponentRef}>
                        <PrintableRecipe recipe={props.recipe} />
                    </div>

                </div>

                <Row gutter={50} className="info_row" justify="center" margin-bottom="50px">

                 </Row>
            </div>
            
            }
           
        </div>
        
    )
}



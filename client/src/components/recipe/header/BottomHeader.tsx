import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import { Icon } from 'semantic-ui-react'
import RecipeData from '../../../types/RecipeData';
import ReactToPrint from "react-to-print";
import { PrintableRecipe } from '../PrintableRecipe';
import {useMediaQuery} from 'react-responsive'
import { useReactToPrint } from 'react-to-print';

import '../../../style/Recipe.css';
import { usePrint, isSafari } from "../hooks";

export const BottomHeader = (props: { recipe: RecipeData; scale: number }) => {
    const printComponentRef = useRef(null);

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
      const isSmallScreen = useMediaQuery({ query: '(max-width: 800px)' })
      const isBigScreen = useMediaQuery({ query: '(min-width: 800px)' })
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
      const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
      const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
      const handlePrint = usePrint(printComponentRef, "Recipe");
      const handlePrint2 = useReactToPrint({
        content: () => printComponentRef.current,
      });
 
    return (
        <div>
            {
                isBigScreen && 
                <div>
                <div className="info_row">
                    {/* Course */}
                    <Col className="gutter-row" span={5} >
                        <div id = "parent" >
                            {props.recipe.course.map(course => 
                                <div className="information_header2"> {course}</div>
                            )}
                        </div>
                    </Col>

                    <Col className='gutter-row'>
                        <div className="vl"></div>
                    </Col>

                    {/* Food Groups */}
                    <Col className="gutter-row" span={5}>
                        {props.recipe.dairyFoodGroup && <div className="information_header2"> Dairy</div> }
                        {props.recipe.vegatableFoodGroup && <div className="information_header2"> Vegatable</div> }
                        {props.recipe.grainFoodGroup && <div className="information_header2"> Grain</div> }
                        {props.recipe.fruitFoodGroup && <div className="information_header2"> Fruit</div> }
                        {props.recipe.proteinFoodGroup && <div className="information_header2"> Protien</div> }
                    </Col>
                    
                    {/* Bar */}
                    <Col>
                        <div className={`${isBigScreen ? "vl" : "hl"}`}></div>
                    </Col>

                    {/* Serving Size */}
                    <Col className="gutter-row" span={5}>
                        <div className="detail_header" >Serving Size</div>
                        <div className="information_header">{Math.floor(props.recipe.servings * props.scale)}</div>
                    </Col>

                    {/* Print Button */}
                    <Col className="gutter-row" span={3}>
                        {!isSafari() &&
                            <ReactToPrint
                            trigger={() =>
                                <div className="print_button">  <Icon name='print' size='large' color='green' />
                                    <p className="print_text">Print Recipe</p></div>
                            }
                            content={() => printComponentRef.current}
                            documentTitle="AwesomeFileName"
                        />
                        }
                        {isSafari() &&
                            <div className="print_button" onClick={handlePrint}> <Icon name='print' size='large' color='green' />
                            <p className="print_text">Print Recipe</p></div>
                        }
                        
                        {/* Prints from the print div below*/}
    
                    </Col>
                {/* </Row> */}
                </div>
                <div style={{ display: "none" }}>
                    {/*What gets printed  */}
                    <div ref={printComponentRef}>
                        <PrintableRecipe recipe={props.recipe} scale={props.scale} />
                    </div>
                </div>
            </div>
            }

            {isSmallScreen && 
                <div>
                <div className="info_row">
                {/* Cuisine */}
                <Row gutter={3} className="info_row" justify="center">
                    <div id = "parent" >
                        {props.recipe.course.map(course => 
                            <div className="information_header2"> {course}</div>
                        )}
                    </div>
                 </Row>
                
                {/* Bar */}
                <Col>
                    {/* <div className={`${isBigScreen ? "vl" : "hl"}`}></div> */}
                    <div className="hl"></div>
                </Col>

                {/* Food group */}
                <Row gutter={3} className="info_row" justify="center">
                    <Col className="gutter-row" span={25} >
                        <div id = "parent" >
                        {props.recipe.dairyFoodGroup && <div className="information_header2"> Dairy</div> }
                        {props.recipe.vegatableFoodGroup && <div className="information_header2"> Vegatable</div> }
                        {props.recipe.grainFoodGroup && <div className="information_header2"> Grain</div> }
                        {props.recipe.fruitFoodGroup && <div className="information_header2"> Fruit</div> }
                        {props.recipe.proteinFoodGroup && <div className="information_header2"> Protien</div> }
                        </div>
                    </Col>
                 </Row>
                  
                {/* Bar */}
                <Col>
                    <div className={`${isBigScreen ? "vl" : "hl"}`}></div>
                </Col>

                {/* Serving Size */}
                <Row gutter={3} className="info_row" justify="center">
                    <Col className="gutter-row" span={25} >
                        <div id = "parent" >
                            <div className="detail_header">Serving Size: </div>
                        </div>
                    </Col>

                    <Col className="gutter-row" span={25} >
                        <div id = "parent" >
                            <div className="detail_header">{props.recipe.servings}</div>
                        </div>
                    </Col>
                 </Row>

                {/* Row */}
                 <Row gutter={50} className="info_row" justify="center"/>

                {/* Print Button */}
                <Col className="gutter-row" span={10}>
                    { !isSafari() &&
                    
                        <ReactToPrint
                        trigger={() =>
                            <div className="print_button">  <Icon name='print' size='large' color='green' />
                                <p className="print_text">Print Recipe</p></div>
                        }
                        content={() => printComponentRef.current}
                        documentTitle="AwesomeFileName"
                    />
                    }
                    {isSafari() &&
                        <div className="print_button" onClick={handlePrint}> <Icon name='print' size='large' color='green' />
                        <p className="print_text">Print Recipe</p></div>
                    }
                    {/* Prints from the print div below*/}

                </Col>

                {/* </Row> */}
                </div>
                <Row gutter={50} className="info_row" justify="center"/>
            </div>
            
            }
           
        </div>
        
    )
}
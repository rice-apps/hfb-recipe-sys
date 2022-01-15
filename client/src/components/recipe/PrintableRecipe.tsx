import React from 'react';
import { Row, Col } from 'antd';
import RecipeData from '../../types/RecipeData';

export const PrintableRecipe = (props: { recipe: RecipeData }) => {
    return (
        <div>
            <div style={{ height: "50vh", width: "95vw" }}>
                <h1>{props.recipe.title}</h1>
                <Row gutter={[8, 16]}>
                    {/* Ingreidents*/}
                    <Col span={8} flex={"flex"} style={{ height: "40vh", width: "95vw" }}> <h2>Ingredients</h2>
                        {props.recipe.ingredientList && props.recipe.ingredientList.map((dict: any) => {
                            return (
                                <p style={{ margin: "2mm" }}> - {dict["quantity"]} {dict["ingredient"]}</p>
                            );
                        })}</Col>
                    {/* Instructions*/}
                    <Col span={16} flex={"flex"} style={{ height: "40vh", width: "95vw" }}> <h2>Instructions</h2>
                        {props.recipe.instructions && props.recipe.instructions.split("\n").map((instr: string) => {
                            return (
                                <p>{instr}</p>
                            );
                        })}  </Col>
                </Row>
            </div>
            {/* Line */}
            <hr></hr>
            {/* Repeat of top half*/}
            <div style={{ height: "50vh", width: "95vw" }}>
                <h1>{props.recipe.title}</h1>
                <Row gutter={[8, 16]}>

                    <Col span={8} flex={"flex"} style={{ height: "40vh", width: "95vw" }}> <h2>Ingredients</h2>
                        {props.recipe.ingredientList && props.recipe.ingredientList.map((dict: any) => {
                            return (
                                <p style={{ margin: "2mm" }}> - {dict["quantity"]} {dict["ingredient"]}</p>
                            );
                        })}</Col>
                    <Col span={16} flex={"flex"} style={{ height: "40vh", width: "95vw" }}> <h2>Instructions</h2>
                        {props.recipe.instructions && props.recipe.instructions.split("\n").map((instr: string) => {
                            return (
                                <p>{instr}</p>
                            );
                        })}  </Col>
                </Row>
            </div>
        </div>
    )
}



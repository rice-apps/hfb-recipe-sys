import React from 'react';
import { Row, Col } from 'antd';
import RecipeData from '../../types/RecipeData';
import Fraction from 'fraction.js';

export const PrintableRecipe = (props: { recipe: RecipeData, scale: number }) => {
    const formatFraction = (frac: string, sc: number) => {
        if(frac == "0" || frac == undefined) {
            return "";
        }

        try {
            var ff = frac.trim().split('-');
            var f = new Fraction(ff[0]);
            if(ff.length > 1) {
                var f2 = new Fraction(ff[1]);
                return f.mul(sc).toFraction(true) + " - " + f2.mul(sc).toFraction(true);
            }
            return f.mul(sc).toFraction(true);
        } catch (e) {
            console.log(e);
        }

        return null;
    }
    
    return (
        <div>
            <div style={{ height: "50vh", width: "95vw", padding: "3vw"}}>
                <h1>{props.recipe.title}</h1>
                <Row gutter={[8, 16]}>
                    {/* Ingreidents*/}
                    <Col span={8} flex={"flex"} style={{ height: "40vh", width: "95vw" }}> <h2>Ingredients</h2>
                        {props.recipe.ingredientList && props.recipe.ingredientList.map((dict: any) => {
                            return (
                                <p style={{ margin: "2mm" }}> - {formatFraction(dict["quantity"], props.scale)} {dict["ingredient"]}</p>
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
            <div style={{ height: "50vh", width: "95vw", padding:"3vw" }}>
                <h1>{props.recipe.title}</h1>
                <Row gutter={[8, 16]}>

                    <Col span={8} flex={"flex"} style={{ height: "40vh", width: "95vw" }}> <h2>Ingredients</h2>
                        {props.recipe.ingredientList && props.recipe.ingredientList.map((dict: any) => {
                            return (
                                <p style={{ margin: "2mm" }}> - {formatFraction(dict["quantity"], props.scale)} {dict["ingredient"]}</p>
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



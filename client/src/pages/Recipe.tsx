import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { RecipeCard } from '../components/RecipeCard';
import { useParams } from 'react-router-dom';
import { Card, Typography } from 'antd';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Row, Col, Input, AutoComplete, Dropdown, Button, Menu } from 'antd';
import ReactToPrint from "react-to-print";


const { Text } = Typography;

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function Recipe(props: any) {
    const { id } = useParams<{ id: string }>();
    const printComponentRef = useRef<HTMLDivElement>(null);

    const recipe = (props.recipes.length > 0) ? props.recipes[id]: {};

    return (
        <>
        <h1>{recipe.title}</h1>
        <ReactToPrint
          trigger={() => <button>Print this out!</button>}
          content={() => printComponentRef.current}
          documentTitle="AwesomeFileName"
        />

        <div style={{ display: "none" }}>

            <div ref={printComponentRef}>
                <div style={{height: "5in", width: "8.5in", border:"solid grey 1px"}}>
            <h1>{recipe.title}</h1>
            <Row gutter={[8, 16]}>

            <Col span={8} flex = {"flex"} style={{height: "5in", width: "8.5in", border:"solid grey 1px"}}> <h2>Ingredients</h2>
        {recipe.ingredientList && recipe.ingredientList.map((dict: any) => {
            return (
                <p> - {dict["quantity"]} {dict["ingredient"]}</p>
            );
        })}</Col>
            <Col span={8}flex = {"flex"}> <h2>Instructions</h2>
        {recipe.instructions && recipe.instructions.split("\n").map((instr: string) => {
            return (
                <p>{instr}</p>
            );
        })}  </Col>
        </Row>
        </div>
        <hr></hr>
        <div style={{height: "5in", width: "8.5in", border:"solid grey 1px"}}>
        <h1>{recipe.title}</h1>
            <Row gutter={[8, 16]} wrap = {true}>

            <Col span={8} flex = {"flex"}style={{height: "5in", width: "8.5in", border:"solid grey 1px"}} > <h2>Ingredients</h2>
        {recipe.ingredientList && recipe.ingredientList.map((dict: any) => {
            return (
                <p> - {dict["quantity"]} {dict["ingredient"]}</p>
            );
        })}</Col>
            <Col span={8}flex = {"flex"}> <h2>Instructions</h2>
        {recipe.instructions && recipe.instructions.split("\n").map((instr: string) => {
            return (
                <p>{instr}</p>
            );
        })}  </Col>
        </Row>
        </div>
            </div>
        </div>




        <Row gutter={[8, 16]}>
        <Col span={8}> <b>Servings</b>: {recipe.servings} </Col>
        <Col span={8}> <b> Calories</b>: {recipe.calories}</Col>
        <Col span={8} />
        </Row>

        <Row gutter={[16, 16]}>
        <Col span={10}>  <img src={recipe.photo} style={{
          borderRadius: "50%",
          width: "40vh",
          height: "40vh",
          background: "red",
          display: "block"
        }} />  </Col>
        <Col span={12}> <h2>Ingredients</h2>
        {recipe.ingredientList && recipe.ingredientList.map((dict: any) => {
            return (
                <p> - {dict["quantity"]} {dict["ingredient"]}</p>
            );
        })}</Col>

        <Col span={12}> <h1> Tags: </h1>
<Text type="secondary">{recipe.cuisine}</Text>
        {recipe.course &&
        recipe.course.map((c: string) => {
            return (
                <Text type="secondary"> {c}</Text>
            );
        })}
 </Col>
        <Col span={12} > <h2>Instructions</h2>
        {recipe.instructions && recipe.instructions.split("\n").map((instr: string) => {
            return (
                <p>{instr}</p>
            );
        })}  </Col>
        </Row>



        </> 
        )
}

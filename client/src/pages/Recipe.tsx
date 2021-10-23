import React from 'react';
import { RecipeCard } from '../components/RecipeCard';
import { useParams } from 'react-router-dom';
import { Card, Typography } from 'antd';
const { Text } = Typography;

export default function Recipe(props: any) {
    const { id } = useParams<{ id: string }>();
    const recipe = props.recipes[id];

    return (
        
        <Card title={recipe.title}>
            {console.log(recipe)}
        <img src={recipe.image} />
        <Text type="secondary">{recipe.cuisine}</Text>
        {recipe.course.map((c: string) => {
            return (
                <Text type="secondary">{c}</Text>
            );
        })}
        <b>Servings</b>: {recipe.servings}
        <b>Calories</b>: {recipe.calories}
        <h2>Ingredients</h2>
        {recipe.ingredientList.map((dict: any) => {
            return (
                <p> - {dict["value"]} {dict["key"]}</p>
            );
        })}
        <h2>Instructions</h2>
        {recipe.instructions.split("\n").map((instr: string) => {
            return (
                <p>{instr}</p>
            );
        })}
    </Card>
    
        )
}

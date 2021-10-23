import React from 'react'
import { Card, Typography } from 'antd';
const { Text } = Typography;

export const RecipeCard = (props: any) => {
    return (
        <div>
            <Card title={props.data.title}>
                <h3>{props.data.id}</h3>
                <Text type="secondary">{props.data.cuisine}</Text>
                {props.data.course.map((c: string) => {
                    return (
                        <Text type="secondary">{c}</Text>
                    );
                })}
                <b>Servings</b>: {props.data.servings}
                <b>Calories</b>: {props.data.calories}
                <h2>Ingredients</h2>
                {props.data.ingredients.map((ingr: string) => {
                    return (
                        <p>{ingr}</p>
                    );
                })}
                <h2>Steps</h2>
                {props.data.instructions.map((instr: string, i: number) => {
                    return (
                        <p>{i + 1}. {instr}</p>
                    );
                })}
            </Card>
        </div>
    )
}

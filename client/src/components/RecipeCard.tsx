import React from 'react'
import { Card } from 'antd';

export const RecipeCard = (props: any) => {
    return (
        <div>
            <Card title={props.data.title}>
                <h3>{props.data.id}</h3>
                <h2>Ingredients</h2>
                {props.data.ingredients.map((ingr: any) => {
                    return (
                        <p>{ingr}</p>
                    );
                })}
                <h2>Steps</h2>
                {props.data.steps.map((step: any, i: number) => {
                    return (
                        <p>{i + 1}. {step}</p>
                    );
                })}
            </Card>
        </div>
    )
}

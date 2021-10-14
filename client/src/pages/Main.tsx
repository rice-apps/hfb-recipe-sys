import React from 'react'
import 'antd/dist/antd.css';
import { Row } from 'antd';
import { Col } from 'antd';
import { RecipeCard } from '../components/RecipeCard';
import Header from '../components/Header';

const Main = () => {
    const recipes = [
        {
            "title": "eggs",
            "ingredients": ["Apples"," Pears "],
            "steps": ["Cook", "Clean"]
        },
        {
            "title": "not eggs",
            "ingredients": ["Oranges","Peaches"],
            "steps": ["Bake", "Clean"]
        }
    ]
    return (
        <div>
            <Header title="Title" > </Header>

            <Row gutter={[16, 16]}>
                {recipes.map(recipe => {
                    return (
                    <Col span={8}>
                        <RecipeCard data={recipe}></RecipeCard>
                    </Col>
                    );
                })}
            </Row>
        </div>
    )
}

export default Main

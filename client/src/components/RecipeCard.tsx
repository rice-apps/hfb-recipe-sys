import React from 'react'
import { Card, Row, Col, Typography } from 'antd';
import styled from 'styled-components';
const { Text } = Typography;

const Tag = styled.p`
    color: darkGray,
    background-color: gray,
    padding: 5px,
    border-radius: 10px
`;

export const RecipeCard = (props: any) => {
    return (
        <div>
            <Card title={props.title}>
                <img src={props.image} style={{
                    width: "100%",
                    height: "500px",
                }} />
                <Row gutter={[16, 16]}>
                    <Col span={6}>
                        <Tag>{props.cuisine}</Tag>
                    </Col>
                    {props.course.map((c: string) => {
                        return (
                            <Col span={6}>
                                <Tag>{c}</Tag>
                            </Col>
                        );
                    })}
                </Row>
            </Card>

            {
            /*
            <Card title={props.title}>
                <img src={props.image} />
                <Text type="secondary">{props.cuisine}</Text>
                {props.course.map((c: string) => {
                    return (
                        <Text type="secondary">{c}</Text>
                    );
                })}
                <b>Servings</b>: {props.servings}
                <b>Calories</b>: {props.calories}
                <h2>Ingredients</h2>
                {props.ingredients.map((ingr: any) => {
                    return (
                        <p>{ingr}</p>
                    );
                })}
                <h2>Instructions</h2>
                {props.instructions.split("\n").map((instr: string) => {
                    return (
                        <p>{instr}</p>
                    );
                })}
            </Card>
            */
            }
        </div>
    )
}

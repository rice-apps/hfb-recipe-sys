import React from 'react';
import { Row, Col, Typography } from 'antd';
import { TagsOutlined } from '@ant-design/icons';
const { Text } = Typography;

const CourseTag = (props: any) => {
    return (
        <p
        style={{
            color: "#CD5327",
            backgroundColor: "#CD52371F",
            borderRadius: "20px",
            padding: "5px",
            textAlign: "center",
            fontStyle: "italic",
        }}>{props.text}</p>
    )
}

const RestrictionTag = (props: any) => {
    return (
        <div
        style={{
            width: "30px",
            height: "30px",
            backgroundColor: props.color,
            borderRadius: "20px",
            display: "inline-block",
            margin: "0px 10px 0px 0px",
        }}></div>
    )
}

export const RecipeCard = (props: any) => {
    const renderDietaryRestrictions = () => {
        var rest = [];
        if(props.glutenFree) {
            rest.push(<RestrictionTag color="#F1C94D" />);
        }
        if(props.vegan) {
            rest.push(<RestrictionTag color="#3E833D" />);
        }
        if(props.vegetarian) {
            rest.push(<RestrictionTag color="#7EAF53" />);
        }
        if(props.nutFree) {
            rest.push(<RestrictionTag color="#CD5237" />);
        }
        return (
            <div
            style={{
                display: "flex",
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginLeft: "auto",
            }}>
                {rest}
            </div>
        );
    }

    return (
        <div
        style={{
            height: "100%",
            width: "100%",
            borderRadius: "50px",
            border: "1px solid black",
        }}>
            <img src={props.image} style={{
                width: "100%",
                height: "400px",
                borderRadius: "50px 50px 0px 0px",
            }} />
            <div
            style={{
                padding: "20px",
            }}>
                <h2
                style={{
                    fontStyle: "bold",
                }}>{props.title}</h2>
                <Row gutter={[16, 16]}>
                    {props.course.map((c: string) => {
                        return (
                            <Col span={8}>
                                <CourseTag text={c} />
                            </Col>
                        );
                    })}
                </Row>
                {renderDietaryRestrictions()}
            </div>

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

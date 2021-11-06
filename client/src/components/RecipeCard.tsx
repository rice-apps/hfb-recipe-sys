import React from 'react';
import { Row, Col, Typography } from 'antd';
import { TagsOutlined } from '@ant-design/icons';
import RecipeData from '../types/RecipeData';
const { Text } = Typography;

const CourseTag = (props: { text: string }) => {
    return (
        <p
        style={{
            color: "#CD5327",
            backgroundColor: "#CD52371F",
            borderRadius: "20px",
            padding: "5px",
            textAlign: "center",
            fontStyle: "italic",
            margin: 0,
        }}>{props.text}</p>
    )
}

const RestrictionTag = (props: { color: string }) => {
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

export const RecipeCard = (props: { data: RecipeData }) => {
    const renderDietaryRestrictions = () => {
        var rest = [];
        if(props.data.glutenFree) {
            rest.push(<RestrictionTag color="#F1C94D" />);
        }
        if(props.data.vegan) {
            rest.push(<RestrictionTag color="#3E833D" />);
        }
        if(props.data.vegetarian) {
            rest.push(<RestrictionTag color="#7EAF53" />);
        }
        if(props.data.nutFree) {
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
            backgroundColor: "white",
        }}>
            <img src={props.data.photo} style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "50px 50px 0px 0px",
            }} />
            <div style={{ padding: "20px" }}>
                <h2 style={{ fontStyle: "bold" }}>{props.data.title}</h2>

                <div
                style={{
                    bottom: 0,
                    verticalAlign: "bottom",
                }}>
                    <Row
                    style={{
                        marginBottom: "10px",
                    }}
                    gutter={[16, 16]}>
                        {props.data.course.map((c: string) => {
                            return (
                                <Col xs={24} xl={8}>
                                    <CourseTag text={c} />
                                </Col>
                            );
                        })}
                    </Row>
                    {renderDietaryRestrictions()}
                </div>
            </div>
        </div>
    )
}

import React from 'react';
import RecipeData from '../../types/RecipeData';
import { Row, Col } from 'antd';

import '../../style/RecipeCard.css';

// Course tag, displays meal type
const CourseTag = (props: { text: string }) => {
    return (
        <div className="courseTag">
            <p className="courseTagText">{props.text}</p>
        </div>
    )
}

// Render course tags within a row/column container
const CourseTags = (props: { data: RecipeData }) => {
    return (
        <div
            style={{
                marginBottom: "10px",
            }}
            className="courseTagContainer">
            {props.data.course.map((course, idx) => {
                return (
                    <CourseTag text={course} />
                );
            })}
        </div>
        /*
        <Row
            style={{
                marginBottom: "10px",
            }}
            gutter={[8, 8]}>
            {props.data.course.map((course, idx) => {
                return (
                    <Col span={8} key={idx}>
                        <CourseTag text={course} />
                    </Col>
                );
            })}
        </Row>
        */
    )
}

export default CourseTags;
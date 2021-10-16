import React from 'react'
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import { RecipeCard } from '../components/RecipeCard';
import Header from '../components/Header';
import { useParams, useHistory } from 'react-router-dom';

const Main = (props: any) => {
    const history = useHistory();
    
    return (
        <div>
            <Header title="Recipes" > </Header>
            <Row gutter={[16, 16]}>
                {props.recipes.map((recipe: any) => {
                    return (
                    <Col span={8} onClick ={() => history.push(`/recipes/${recipe.id}`)} >
                        <RecipeCard data={recipe}></RecipeCard>
                    </Col>
                    );
                })}
            </Row>
        </div>
    )
}

export default Main
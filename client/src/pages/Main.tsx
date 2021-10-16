import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col, Input, AutoComplete } from 'antd';
import { RecipeCard } from '../components/RecipeCard';
import Header from '../components/Header';
import { useParams, useHistory } from 'react-router-dom';

const Main = (props: any) => {
    const history = useHistory();

    const renderTitle = (title: string) => (
        <span>
            {title}
        </span>
    );
        
    const renderItem = (title: string, id: string) => ({
        value: [title, id],
        label: (
            <span>
                {title}
            </span>
        ),
    });

    const options = [
        {
            label: renderTitle("Recipes"),
            options: props.recipes.map((recipe: any) => { 
                return renderItem(recipe.title, recipe.id);
            })
        }
    ]

    return (
        <div>
            <Header title="Recipes" > </Header>
            {console.log(options)}
            <AutoComplete
                dropdownClassName="certain-category-search-dropdown"
                dropdownMatchSelectWidth={500}
                options={options}
                filterOption={true}
                onSelect={(value) => history.push(`/recipes/${value[1]}`)}
                style={{
                    width: '100%',
                    padding: '15px'
                }}
            >
                <Input.Search size="large" placeholder="input here" />
            </AutoComplete>
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
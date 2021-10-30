import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Row, Col, Input, AutoComplete, Dropdown, Button, Menu } from 'antd';
import { RecipeCard } from '../components/RecipeCard';
import Header from '../components/Header';
import { useParams, useHistory} from 'react-router-dom';

const Main = (props: any) => {
    const history = useHistory();
    const [ searchCat, setSearchCat ] = useState("title");

    const searchByMenu = (
        <Menu onClick={(e) => setSearchCat(e.key)}>
            <Menu.Item key="title">
            Title
            </Menu.Item>
            <Menu.Item key="ingredients">
            Ingredient
            </Menu.Item>
            <Menu.Item key="cuisine">
            Cuisine
            </Menu.Item>
            <Menu.Item key="course">
            Course
            </Menu.Item>
        </Menu>
    );

    const renderTitle = (title: string) => (
        <span>
            {title}
        </span>
    );
        
    const renderItem = (title: string, searchTerms: any) => ({
        value: searchTerms,
        label: (
            <span>
                {title}
            </span>
        ),
    });

    const [ searchOptions, setSearchOptions ] = useState([
        {
            label: renderTitle("Recipes"),
            options: props.recipes.map((recipe: any) => { 
                return renderItem(recipe.title, recipe[searchCat]);
            })
        }
    ]);

    useEffect(() => {
        console.log("search cat", searchCat);
        setSearchOptions([
            {
                label: renderTitle(searchCat),
                options: props.recipes.map((recipe: any) => {
                    console.log("search terms", recipe[searchCat]);
                    return renderItem(recipe.title, recipe[searchCat]);
                })
            }
        ]);
    }, [searchCat]);

    return (
        <div>
            <Header title="Recipes" > </Header>
            <Dropdown overlay={searchByMenu}>
                <Button>
                    Search by: {searchCat}
                </Button>
            </Dropdown>
            <AutoComplete
                dropdownClassName="certain-category-search-dropdown"
                dropdownMatchSelectWidth={500}
                options={searchOptions}
                filterOption={true}
                onSelect={(value) => history.push(`/recipes/${value[1]}`)}
                style={{
                    width: '100%',
                    padding: '15px'
                }}
            >
                <Input size="large" placeholder="Search by recipe or ingredients" />
            </AutoComplete>
            <Row gutter={[16, 16]}>
                {props.recipes.map((recipe: any, id: number) => {
                    return (
                    <Col span={6} onClick ={() => history.push(`/recipes/${id}`)} >
                        <RecipeCard id={id} title={recipe.title} course={recipe.course} cuisine={recipe.cuisine} servings={recipe.servings} calories={recipe.calories} ingredients={recipe.ingredients} instructions={recipe.instructions} image={recipe.photo} glutenFree={recipe.glutenFree} vegan={recipe.vegan} vegetarian={recipe.vegetarian} nutFree={recipe.nutFree}></RecipeCard>
                    </Col>
                    );
                })}
            </Row>
        </div>
    )
}

export default Main
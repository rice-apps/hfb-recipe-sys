import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Row, Col, Input, AutoComplete, Dropdown, Button, Menu, Table, Checkbox, Divider } from 'antd';
import { RecipeCard } from '../components/RecipeCard';
import Header from '../components/Header';
import { useParams, useHistory} from 'react-router-dom';
import RecipesObject from '../types/RecipesObject';
import RecipeData from '../types/RecipeData';

import '../style/Main.css'

const Main = (props: { recipes: RecipesObject }) => {

    const plainOptions = ['Gluten-Free', 'Vegetarian', 'Vegan', 'Nut-Free'];
    const defaultCheckedList: string[] = [];
    const CheckboxGroup = Checkbox.Group;


    const history = useHistory();

    const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
    const [indeterminate, setIndeterminate] = React.useState(true);
    const [checkAll, setCheckAll] = React.useState(false);

  const onChange = (list: any) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);

    

  };

function filterObject(obj: any, callback: any) {
    return Object.fromEntries(Object.entries(obj).filter(([key, val]) => callback(val)));
}

    function getFilteredRecipes(): { [k: string]: unknown; } {
        if(props.recipes == {}) {
            return {};
        }

        return filterObject(props.recipes, (recipe: any) => {
            const tags: String[] = []
            if(recipe.glutenFree) {
                tags.push("Gluten-Free");
            }
            if(recipe.vegetarian) {
                tags.push("Vegetarian");
            }
            if(recipe.vegan) {
                tags.push("Vegan");
            }
            if(recipe.nutFree) {
                tags.push("Nut-Free");
            }

            console.log(checkedList)

            return checkedList.every(i => tags.includes(i));
        });
    }

    return (
        <div>
            <Header title="Recipes" > </Header>

            <Divider />
            <Button type = "link" onClick = {() => setCheckedList([])}>
                Reset Filters
            </Button>
            <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
            
            <div className="recipeCardContainer">
                {
                Object.keys(props.recipes).map((key: string) => {
                    return (
                        <div className="recipeCard" onClick ={() => history.push(`/recipes/${key}`)}>
                            <RecipeCard data={props.recipes[key]}></RecipeCard>
                        </div>
                    );
                })
            }
            </div>
        </div>
    )
}

export default Main
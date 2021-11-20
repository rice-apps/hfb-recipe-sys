import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Row, Col, Input, AutoComplete, Dropdown, Button, Menu, Checkbox, Divider } from 'antd';
import { SelectProps } from 'antd/es/select';
import { RecipeCard } from '../components/RecipeCard';
import Header from '../components/Header';
import { useParams, useHistory} from 'react-router-dom';
import RecipeData from '../types/RecipeData';
import '../style/Main.css'

const Main = (props: { recipes: RecipeData[] }) => {

    const plainOptions = ['Gluten-Free', 'Vegetarian', 'Vegan', 'Nut-Free'];
    const defaultCheckedList: string[] = [];
    const CheckboxGroup = Checkbox.Group;

    const history = useHistory();
    const [ searchCat, setSearchCat ] = useState("title");

    const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
    const [indeterminate, setIndeterminate] = React.useState(true);
    const [checkAll, setCheckAll] = React.useState(false);

  const onChange = (list: any) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const renderTitle = (title: string) => (
    <span>
        {title}
    </span>
)  ;

    const renderItem = (title: string, searchTerms: any) => ({
    value: searchTerms,
    label: (
        <span>
            {title}
        </span>
    ),
});

    function getFilteredRecipes(): Array<RecipeData> {

        return props.recipes.filter(recipe => {
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

            return checkedList.every(i => tags.includes(i));

        })
    }

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
        // Doesn't actually go anywhere, need to add like a table or something
    );

    const options = ['Gluten-Free', 'Vegan', 'Vegetarian', 'Nut-Free']

    const [ searchOptions, setSearchOptions ] = useState([
        {
            label: renderTitle("Recipes"),
            options: props.recipes.map((recipe: any) => {
                return renderItem(recipe.title, recipe[searchCat]);
            })
        }
    ]);

    // Set search options
    useEffect(() => {
        setSearchOptions([
            {
                label: renderTitle(searchCat),
                options: props.recipes.map((recipe: any) => {
                    return renderItem(recipe.title, recipe[searchCat]);
                })
            }
        ]);
    }, [searchCat, props.recipes]);

    return (
        <div>
            <Header title="Recipes" > </Header>

            <Divider />
            <Button type = "link" onClick = {() => setCheckedList([])}>
                Reset Filters
            </Button>
            <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />

            <AutoComplete
                dropdownClassName="certain-category-search-dropdown"
                dropdownMatchSelectWidth={500}
                options={searchOptions}
                filterOption={true}
                onSelect={(value) => history.push(`/${value[1]}`)}
                style={{
                    width: '40%',
                    padding: '15px'
                }}
            >
                <Input.Search size="large" placeholder="Search by recipe or ingredients" enterButton />
            </AutoComplete>
            <div className="recipeCardContainer">
                {getFilteredRecipes().map(recipe => {
                    return (
                        <div className="recipeCard" onClick ={() => history.push(`/${recipe.id}`)}>
                            <RecipeCard data={recipe}></RecipeCard>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Main

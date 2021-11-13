import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Row, Col, Input, AutoComplete, Dropdown, Button, Menu, Table, Checkbox, Divider } from 'antd';
import { RecipeCard } from '../components/RecipeCard';
import Header from '../components/Header';
import { useParams, useHistory} from 'react-router-dom';
import RecipeData from '../types/RecipeData';

const Main = (props: { recipes: Array<RecipeData> }) => {

    const plainOptions = ['Gluten-Free', 'Vegetarian', 'Vegan', 'Nut-Free'];
    const defaultCheckedList = [''];
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
    console.log(list);

    

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
            const tags = []
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

            return tags.includes(checkedList.toString());

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
    const dataSource = props.recipes.map((recipe: any, id: number)  => {
        return { 
            ...recipe,
            id: id
        };
    });

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Gluten-Free',
            dataIndex: 'glutenFree',
            key: 'glutenFree',
            render : (glutenFree: any) => {
                return <p>{glutenFree ? 'True' : 'False'}</p>
            },
            filters:[
                {text: 'True', value: true},
            ],
            onFilter:(value: any, record:any) => {
                return record.glutenFree;
            }
        },
        {
            title: 'Vegan',
            dataIndex: 'vegan',
            key: 'vegan',
            render : (vegan: any) => {
                return <p>{vegan ? 'True' : 'False'}</p>
            },
            filters:[
                {text: 'Vegan', value: true}
            ],
            onFilter:(value: any, record:any) => {
                return record.vegan;
            }
        },
        {
            title: 'Vegetarian',
            dataIndex: 'vegetarian',
            key: 'vegetarian',
            render : (vegetarian: any) => {
                return <p>{vegetarian ? 'True' : 'False'}</p>
            },
            filters:[
                {text: 'Vegetarian', value: true}
            ],
            onFilter:(value: any, record:any) => {
                return record.vegetarian;
            }
        },
        {
            title: 'Nut-Free',
            dataIndex: 'nutFree',
            key: 'nutFree',
            render : (nutFree: any) => {
                return <p>{nutFree ? 'True' : 'False'}</p>
            },
            filters:[
                {text: 'Nut-Free', value: true}
            ],
            onFilter:(value: any, record:any) => {
                return record.nutFree;
            }
        },
    ];


   

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
        <div
        style={{
            backgroundColor: "#EEEFF0",
        }}>
            <Header title="Recipes" > </Header>
            <Dropdown overlay={searchByMenu}>
                <Button>
                    Search by: {searchCat}
                </Button>
            </Dropdown>

            <Divider />
            <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
            
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
                {/* {props.recipes.filter(..).map} */}

                {getFilteredRecipes().map((recipe: any, id: number) => {
                    return (
                    <Col span={6} onClick ={() => history.push(`/recipes/${id}`)} >
                        <RecipeCard data={recipe}></RecipeCard>
                    </Col>
                    );
                })}

                {/* {props.recipes.map((recipe: any, id: number) => {
                    return (
                    <Col span={6} onClick ={() => history.push(`/recipes/${id}`)} >
                        <RecipeCard data={recipe}></RecipeCard>
                    </Col>
                    );
                })} */}
            </Row>
        </div>
    )
}

export default Main
import React from 'react';
import { Button, Checkbox } from 'antd';
import { FilterOutlined } from "@ant-design/icons";

import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import '../../style/Main.css';


function FilterPanel(props: { checkedFilters: string[], setCheckedFilters: (filters: string[]) => void}) {
    // List of current dietary restrictions tags, names of the checkbox options in filter
    const plainOptions = ['Gluten-Free', 'Vegetarian', 'Vegan', 'Nut-Free', 'Dairy-Free'];

    // Icons for filter bar (change later, since figma icon is not available on antD)
    const filterIcon = <FilterOutlined style={{ "fontSize": "40px" }} />;

    /**
     * Saves the new filter state
     */
    function onFilterChange(list: CheckboxValueType[]) {
        props.setCheckedFilters(list as string[]);
    };

    return (
        <div className="filterContainer">
            <div className="filterTitle">
                {filterIcon}
                <h1 style={{ "marginBottom": "20px", "marginLeft": "10px" }}>Filter Results</h1>
            </div>
            <div className="checkboxTitle">
                <p>DIETARY RESTRICTIONS</p>
            </div>

            <div className="checkboxContainer">
                {/** Creates the checkbox display on the main page */}
                <Checkbox.Group options={plainOptions} value={props.checkedFilters} onChange={onFilterChange} />
            </div>
            <div className="filterBottom">
                {/** Filter reset button, clears the current values in the checkedFilters state */}
                <Button type="default" onClick={() => props.setCheckedFilters([])}>
                    Reset Filters
                </Button>
            </div>
        </div>
    );
}

export default FilterPanel;
import React, { ChangeEvent } from 'react';
import { SearchOutlined } from "@ant-design/icons";
import '../../style/Main.css';
import { Input } from 'antd';


function SearchBar(props: { setSearchString: (searchString: string) => void }) {
    /**
     * Saves the new search state
     */
    function onSearchChange(event: ChangeEvent<HTMLInputElement>) {
        props.setSearchString(event.target.value);
    };

    /* styling only works as inline css */
    return (
        <Input style={{ "border": "solid", "borderWidth": "0px", "borderRadius": "30px", "height": "50px", "width": "70%", "marginTop": "20px" }}
            prefix={<SearchOutlined />} allowClear={true}
            size="large" placeholder="Search by recipe or ingredients"
            onChange={onSearchChange} />
    )
}

export default SearchBar;
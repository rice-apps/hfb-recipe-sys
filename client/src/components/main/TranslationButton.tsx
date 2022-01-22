import React from 'react';
import { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { Menu, Dropdown, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';

// import { i18n } from './translations/i18n';


function TranslationButton() {

    const [language, setLanguage] = useState('en');

    const { t } = useTranslation();


    const onClick = ({ key }) => {
        message.info(`Click on item ${key}`);
    };

    const menu = (
        <Menu onClick={onClick}>
          <Menu.Item key="en">English</Menu.Item>
          <Menu.Item key="es">Spanish</Menu.Item>
          <Menu.Item key="vi">Vietnamese</Menu.Item>
        </Menu>
    );

    return(
        <div>
            <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Select Language <DownOutlined />
                </a>
            </Dropdown>
            
        </div>
    )

}

export default TranslationButton;
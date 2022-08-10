import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import LogInPage from './SignUpPage';

import Popup from 'reactjs-popup';
import '../../style/PopUp.css';

import SignInUp from './SignInUp';

import { Message } from 'semantic-ui-react';

const Heading = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 9vh;
    line-height: 5vh;
    color: white;
`;
//padding: 40px 0px 0px 0px;

const Header = (props: { title: string, status: string}) => {

    const [Login, setLogin] = useState(false)
    
    function togglelogin(bool: boolean) {
        setLogin(bool)
    }
    
    return (
        <header className='header'>
            <Heading>{props.title} </Heading>

            
            <LogInPage togglelogin = {togglelogin} />

        </header> 
    )
}
//have a fucntion to put in the message button depnding on the login

Header.defaultProps = {
    title: 'Recipes',
    status: 'Log In',
    subtitle: ''
}

Header.propTypes = {
    title: PropTypes.string,
    status: PropTypes.string,
    subtitle: PropTypes.string

}

export default Header; 


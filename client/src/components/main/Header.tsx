import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 9vh;
    line-height: 5vh;
    color: white;
    padding-bottom: 7.5%;
`;
//padding: 40px 0px 0px 0px;

const Header = (props: { title: string }) => {
    return (
        <header className='header'>
            <Heading>{props.title} </Heading>
        </header>
    )
}

Header.defaultProps = {
    title: 'Recipes',
    subtitle: ''
}

Header.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
}

export default Header; 
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: system;
    font-size: 5vh;
    line-height: 5vh;
    color: white;
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
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
    display: flex;
    font-family: "Futura", "FuturaM";
    justify-content: center;
    align-items: center;
    font-size: 7vh;
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
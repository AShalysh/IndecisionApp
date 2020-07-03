import React from 'react';

const Header = (props) => (
    <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
);
//Setting up default props for Header
Header.defaultProps = {
    title: 'Indecision'
};

export default Header;
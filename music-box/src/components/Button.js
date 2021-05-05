import React from 'react';
import { Link } from 'react-router-dom';

function Button(props) {
    return (
        <>
        <Link to={props.destino}>
            <button className={`btn-green ${props.lado}`}>{props.children}</button>
        </Link>
        </>
    );
}

export default Button;
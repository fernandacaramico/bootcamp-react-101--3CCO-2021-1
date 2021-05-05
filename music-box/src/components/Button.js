import React from 'react';

function Button(props) {
    return (
        <>
            <button className={`btn-green ${props.lado}`}>{props.children}</button>
        </>
    );
}

export default Button;
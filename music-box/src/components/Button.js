import React from 'react';
import { Link } from 'react-router-dom';

function Button(props) {
    return (
        <>
        <Link to={props.destino}>
            <button className={`btn-green ${props.lado}` }>{props.children}</button>
        </Link>

        {/*
        // se você nao quiser usar children:

        // como construir o componente Botão:
        <Link to={props.destino}>
            <button className={`btn-green ${props.lado}`}>{props.frase}</button>
        </Link>

        // como renderizar o componente na página:
        <Button destino="" lado="" frase=""/>
        */}
        </>
    );
}

export default Button;
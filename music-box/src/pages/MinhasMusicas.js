import React from 'react';
import CardMusica from '../components/CardMusica';
import NavBar from '../components/NavBar';

function MinhasMusicas() {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="filter">
                    {/* adicionar button com filho, lado e destino aqui! */}
                        <button className="btn-green right">Adicionar</button>
                    {/* adicionar button com filho, lado e destino aqui! */}
                </div>
            </div>

            <div className="container">
                <div className="music-boxes">

                <CardMusica nome="Assalto ao Trap" genero="Trap" ano="2020"/>

                <CardMusica nome="Hatsune Miku" genero="jpop" ano="2020" />

                <CardMusica nome="Melhor eu ir" genero="Pagode" ano="2015" />

                <CardMusica nome="Na sua estante" genero="Emoxinho :3" ano="2000"/>

                </div>
            </div>
        </>
    );
}

export default MinhasMusicas;
import React from 'react';
import NavBar from '../components/NavBar';
import Button from '../components/Button';
import addMusic from '../assets/images/add-music-img.png';

function AddMusica() {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="add-music">
                    <form>
                        <h1>Adicionar</h1>
                        <div>
                            <label>Nome: <input type="text" /></label>
                        </div>
                        <div>
                            <label>Genêro: <input type="text" /></label>
                        </div>
                        <div>
                            <label>Ano Lançamento:</label>
                            <input type="text" />
                        </div>

                        <div>
                            <label> Imagem (url):</label>
                            <input type="text" />
                        </div>
                        <div>
                            <Button lado="left" destino="/minhas-musicas">Enviar</Button>
                        </div>
                    </form>
                    <img src={addMusic} alt="" />
                </div>
            </div>

        </>
    )
}

export default AddMusica;
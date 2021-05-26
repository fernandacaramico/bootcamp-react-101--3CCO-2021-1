import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import imgAdd from '../assets/images/add-music-img.png';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import api from '../api';

function EditMusic(props) {

    return (
        <>
            <NavBar />
            <div className="container">
                <div className="add-music">
                    <form>
                        <h1>Editar Musica</h1>
                        <div>
                            <label>Nome: 
                            <input type="text" id="nome"/></label>
                        </div>
                        <div>
                            <label>Genêro: 
                            <input type="text" id="genero"/></label>
                        </div>
                        <div>
                            <label>Ano Lançamento:</label>
                            <input type="text" id="ano"/>
                        </div>

                        <div>
                            <label> Imagem (url):</label>
                            <input type="text" id="url"/>
                        </div>
                        <div>
                            <button className="btn-green left" type="submit" >ATUALIZAR</button>
                            <Link to="/minhas-musicas">
                                <button className="btn-green right" >Voltar</button>
                            </Link>
                        </div>
                    </form>
                    <img src={imgAdd} alt="" />
                </div>
            </div>

        </>
    );
}

export default EditMusic;
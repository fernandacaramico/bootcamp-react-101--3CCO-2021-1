import React from 'react';
import editIcon from '../assets/images/edit-icon.png';
import deleteIcon from '../assets/images/delete-icon.png';
import starSolidIcon from '../assets/images/star-solid.png';
import api from '../api';
import imgCapaPadrao from '../assets/images/capa.png';

function CardMusica(props) {
    // código adicionado para delete: function deletar
    function deletar() {
        api.delete(`/${props.id}`).then(resposta =>{
            console.log("deletando", resposta);
            // "Pegando" resposta da api, abaixo (alterne entre linhas A e B para ver a resposta ou ser redirecionado)
            // Como visto na resposta anterior, a mockAPI traz o texto da resposta em um statusText.
            //console.log("resposta da api:", resposta.statusText); // LINHA A
            window.location.reload(); // LINHA B
        })
    }

    // código adicionado para imagens de fundo: const estiloCapaMusica 
    // Operador ternário para que, quando url tiver valor "", tenha a imagem padrão.
    // Quando diferente de "", tenha a imagem que vier.
    const estiloCapaMusica = {
        backgroundImage: `url(${props.imgFundo == "" ? imgCapaPadrao  : props.imgFundo})`
    }

    return (
        <div className="music-box">
            {/* código adicionado para imagens de fundo: style */}
                <div className="img-music" style={estiloCapaMusica}></div>
                <div className="music-data">
                    <div className="icons">
                        <img src={editIcon} alt="" className="edit" />
                        {/* código adicionado para delete: onclick*/}
                        <img src={deleteIcon} alt="" className="delete" onClick={deletar} />
                        <img src={starSolidIcon} alt="" className="stars" />
                    </div>
                    <div className="name">
                        <label> Nome:
                            <input className="input-music" type="text" value={props.nome} />
                        </label>
                    </div>
                    <div className="genre">
                        <label> Genêro:
                            <input className="input-music" type="text" value={props.genero} />
                        </label>
                    </div>
                    <div className="release">
                        <label> Lançamento:
                            <input className="input-music" type="text" value={props.ano} />
                        </label>
                    </div>
                </div>
            </div>
    );
}

export default CardMusica;
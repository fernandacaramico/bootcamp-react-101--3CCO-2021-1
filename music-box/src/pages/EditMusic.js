import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import imgAdd from '../assets/images/add-music-img.png';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import api from '../api';

function EditMusic(props) {

    // declarando variável para armazenar música como está atualmente na api
    // e substituir o que quisermos atualizar
    const [musicEdit, setMusicEdit] = useState({});
    // declarando :id (req params)
    const {id} = useParams();

    // adicionar comentário do erro do Scope -> useEffect
  
    function getMusicById() {
        api.get(`/${id}`).then(resposta => {
            setMusicEdit(resposta.data)
            console.log(resposta.data)
        })
    }

    useEffect(() => {
        // adicione dentro desta função anônima o que você quer que aconteça 
        // quando o seu componente EditMusic for renderizado na página
        getMusicById()
        // abaixo, como segundo parâmetro de useEffect, o elemento que queremos que nosso componente
        // "observe" para executar a função acima novamente. Se array vazia, função acima executa apenas uma vez.
    },[]);


    // manipulando nossos valores em input para atualizar nosso musicEdit
    function handle(e) {
        const newMusic = {...musicEdit};
        newMusic[e.target.id] = e.target.value;
        setMusicEdit(newMusic);
        console.log(newMusic);
    }

    // enviando musicEdit para PUT
    function atualizar(e) {
        e.preventDefault();
        api.put(`/${id}`, {
            // podemos passar o objeto inteiro no put!
            // a fim de não precisar consultar a API de todos os atributos do objeto sendo enviado, inserimos aqui.
            nome: musicEdit.nome,
            genero: musicEdit.genero,
            ano: musicEdit.ano,
            url: musicEdit.url
        }).then((resposta) =>{
            if (resposta.status == 200) {
                // "Pegando" resposta em texto enviada para API
                console.log(resposta.statusText)
                alert("Música alterada com sucesso!")
            } else {
                alert("Opa! essa musica não foi alterada... Tente novamente.")
            }
        })
    }

    return (
        <>
            <NavBar />
            <div className="container">
                <div className="add-music">
                    <form onSubmit={(e) => atualizar(e)}>
                        <h1>Editar Musica</h1>
                        <div>
                            <label>Nome: 
                            <input type="text" id="nome" onChange={(e)=>handle(e)} value={musicEdit.nome} defaultValue={musicEdit.nome}/></label>
                        </div>
                        <div>
                            <label>Genêro: 
                            <input type="text" id="genero" onChange={(e)=>handle(e)} value={musicEdit.genero} defaultValue={musicEdit.genero}/></label>
                        </div>
                        <div>
                            <label>Ano Lançamento:</label>
                            <input type="text" id="ano" onChange={(e)=>handle(e)} value={musicEdit.ano} defaultValue={musicEdit.ano}/>
                        </div>

                        <div>
                            <label> Imagem (url):</label>
                            <input type="text" id="url" onChange={(e)=>handle(e)} value={musicEdit.url} defaultValue={musicEdit.url}/>
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
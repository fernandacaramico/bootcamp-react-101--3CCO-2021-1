import React, { useState } from 'react';
// BONUS -> REDIRECIONANDO APÓS POST
import { useHistory } from 'react-router-dom';
import NavBar from '../components/NavBar';
// import Button from '../components/Button';
import addMusic from '../assets/images/add-music-img.png';
import api from '../api';

function AddMusica() {

    // BONUS -> REDIRECIONANDO APÓS POST
    const history = useHistory();
    
    // Criando a nossa variável/constante musicData que é um JSON (JavaScript Object Notation)
    // {como inserido em useState} e possibilitando a alteração de seu valor por set.
    const [musicData, setMusicData] = useState({
        // O post funcionaria se não estiver com a estrutura abaixo, mas para que a
        // a estrutura da api seja garantida e auxiliar os programadores criando inputs
        // e ids na página a saber quais valores a api aguarda, vamos adicionar esta estrutura.
        // Para certificar que todos os valores que a api aguarda não serão enviados nulos,
        // já adicionamos valores para os atributos do objeto - ex. 0, ""...
        nome: "",
        genero: "",
        ano: 0,
        url: ""
    })
    
    //criamos uma função para "manipular/manejar" (handle)
    // o valor que o usuário colocar no input
    function handle(e) {
        // criando constante para armanezar os valores inseridos pelo usuário no input (newMusic)
        // e "juntá-los" em musicData usando o Spread Operator . . .
        const newMusic = { ...musicData }
        // e => evento que acontecer no elemento que é nosso alvo da interação, no caso, change
        newMusic[e.target.id] = e.target.value;
        // atribuindo o valor de newMusic à musicData
        setMusicData(newMusic);
        // mostrando o valor no console
        console.log(newMusic);
    }
    
    function enviar(e) {
        // o comportamento default/padrão deste elemento onde invocaremos o "enviar" (form) é
        // de atualizar a página. Não queremos que a página atualize! 
        // A ideia do React é exatamente de NÃO atualizar a página!
        // vamos previnir o com preventDefault()
        e.preventDefault();
        // lembre-se de importar a api no topo de seu documento, 
        // para não precisarmos escrever novamente a URL base adicionada
        api.post("/", {
            // acessando os valores que estão em musicData
            nome: musicData.nome,
            genero: musicData.genero,
            ano: musicData.ano,
            url: musicData.url
        }).then((resposta) => {
            // Assim que a Promessa/Promise for resolvida (then), execute o código abaixo:
            console.log("post ok", resposta);
            // BONUS -> REDIRECIONANDO APÓS POST
            history.push("/minhas-musicas");
        })
    }

    return (
        <>
            <NavBar />
            <div className="container">
                <div className="add-music">
                    {/* Adicione a função de enviar ao submeter os valores deste formulário */}
                    <form onSubmit={(e) => enviar(e)}>
                        <h1>Adicionar</h1>
                        <div>
                            {/* Em cada input, adicione a função handle chamando o próprio evento no elemento.
                            Lembre-se de adicionar o id do campo! */}
                            <label>Nome: <input type="text" id="nome" onChange={(e) => handle(e)} /></label>
                        </div>
                        <div>
                            {/* Em cada input, adicione a função handle chamando o próprio evento no elemento.
                            Lembre-se de adicionar o id do campo! */}
                            <label>Genêro: <input type="text" id="genero" onChange={(e) => handle(e)} /></label>
                        </div>
                        <div>
                            <label>Ano Lançamento:</label>
                            {/* Em cada input, adicione a função handle chamando o próprio evento no elemento.
                            Lembre-se de adicionar o id do campo! */}
                            <input type="text" id="ano" onChange={(e) => handle(e)} />
                        </div>

                        <div>
                            <label> Imagem (url):</label>
                            {/* Em cada input, adicione a função handle chamando o próprio evento no elemento.
                            Lembre-se de adicionar o id do campo! */}
                            <input type="text" id="url" onChange={(e) => handle(e)} />
                        </div>
                        <div>
                            {/*Aqui, retiramos o componente de botão para adicionar o tipo submit.*/}
                            <button className="btn-green left" type="submit">POSTar</button>
                            {/*<Button lado="left" destino="/minhas-musicas">Enviar</Button>*/}
                        </div>
                    </form>
                    <img src={addMusic} alt="" />
                </div>
            </div>

        </>
    )
}

export default AddMusica;
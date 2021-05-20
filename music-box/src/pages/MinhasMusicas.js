import React, { useEffect, useState } from 'react';
import CardMusica from '../components/CardMusica';
import NavBar from '../components/NavBar';
import Button from '../components/Button';

import api from '../api';

function MinhasMusicas() {
/*
    Criamos nossos componentes como funções para podermos utilizar os React Hooks, como useState e useEffect.

    O que é um Hook? 
    "Um Hook é uma função especial que te permite utilizar recursos do React.
    Por exemplo, useState é um Hook que te permite adicionar o state do React a um componente de função."
    <<fonte: documentação do React>> 
*/   

// hook #1 => useState
// useState retorna dois valores: o state atual + função para alterar esse state.

// Vamos então criar uma const para nosso state (musicas) + função para alterá-lo => const [musicas, setMusicas]
// Precisamos então passar como argumento para useState() como será o state ao iniciá-lo. 
//  queremos uma array, então: => useState([])
    const [musicas, setMusicas] = useState([])

// hook #2 => useEffect

// Queremos que algo aconteça na página depois que nosso componente for renderizado, então usamos o useEffect.
// Nosso "componente renderizado", neste caso, é <MinhasMusicas/>

/*
    Em useEffect, colocamos 2 argumentos: o primeiro é a função 
        que queremos que aconteça quando componente for renderizado.
    O segundo é o elemento que ensinamos useEffect a observar e, quando este mudar, a função deve ser chamada novamente.
    Como queremos que esta função seja executada apenas 1 vez, assim que <MinhasMusicas/> renderizar,
        e não se repita, deixamos esta array em branco.
*/
    useEffect(() => { // A função deve ser criada aqui dentro, com essa estrutura, sem nome e com => <<arrow>>
        
        // para fazer a requisição, poderíamos fazer como abaixo...
        // mas apenas vem a Promessa (Promise) de uma resposta...
        /*
        const resposta = api.get("/")
        console.log("RESPOSTA", resposta)
        */

        // por que só a promessa?? porque são assíncronas! o que deveria vir primeiro no exemplo abaixo, não virá!!
        /*
        const resposta = api.get("/").then(() => {
                console.log("eu tenho que vir primeiro")
            })
        console.log("RESPOSTA", resposta);
        */

        // O correto é então fazer como abaixo:
        // criamos uma função async-await para que getAllMusicas aguarde a 
        //      Promise de api.get("/") ser resolvida antes de continuar.
            async function getAllMusicas() {
                const resposta = await api.get("/");
                console.log("RESPOSTA", resposta.data);
                setMusicas(resposta.data);
            }
            
            getAllMusicas();
        
    }, [])

    return (
        <>
            <NavBar />
            <div className="container">
                <div className="filter">
                    <Button lado="right" destino="/add-musica">Adicionar</Button>
                </div>
            </div>

            <div className="container">
                <div className="music-boxes">

                    { // Adicionando Javascript "no meio" do html, precisamos abrir chaves.
                        // map é como um "for each", queremos que algo aconteça com todos os elementos da array:
                        musicas.map((musica) => (
                            // código adicionado para delete: id
                            // código adicionado para imagens de fundo: imgFundo
                            <CardMusica imgFundo={musica.url} id={musica.id} nome={musica.nome} genero={musica.genero} ano={musica.ano} />
                        ))
                    }


    {/*
    Antes, fazíamos como abaixo, copiando e colando os cards...
    agora não precisamos mais!
    Os componentes serão criados à necessidade da resposta que a api devolver com o map acima.
    <CardMusica nome="EU VIM CHUMBADO NO CODIGO Hatsune Miku" genero="jpop" ano="2020" />
    <CardMusica nome="EU VIM CHUMBADO NO CODIGO Melhor eu ir" genero="Pagode" ano="2015" />
    <CardMusica nome="EU VIM CHUMBADO NO CODIGO Na sua estante" genero="Emoxinho :3" ano="2000"/>
    */}

                </div>
            </div>
        </>
    );
}

export default MinhasMusicas;
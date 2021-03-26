/*

Olá, Aluno/a! Tudo bem?

Neste arquivo contém o "passo a passo" de como evoluímos
saindo do JS indo a JSX, criando nosso primeiro componente React, com props e estado!

Comente e descomente cada um dos blocos desta aula comentados com //
para ter acesso a cada passo de nosso Tutorial estático
-- dica, selecione o código que você deseja (des)comentar
e use o atalho de seu teclado para fazer esse "switch"

Command + /
Ctrl + /

*/


/*
----------------------------------------------------------------------

Bloco 01 - Inserindo elementos HTML com JavaScript

----------------------------------------------------------------------
*/

// var container = document.getElementById("app")
// var titulo = document.createElement("h1")
// titulo.innerHTML = "Título inserido por JavaScripto :O \\O/"
// container.appendChild(titulo)

/*
----------------------------------------------------------------------

Bloco 02 - parte 1 - Agora, em um componente React com JSX!

----------------------------------------------------------------------
*/

// var container = document.getElementById("app");

// function Titulos() {
//     return (
//         <h1>Este título foi feito em React com JSX</h1>
//     );
// }

// ReactDOM.render(Titulos(), container);

/*
----------------------------------------------------------------------

Bloco 02 - parte 2 - Agora, mais de um elemento dentro do mesmo componente

- Use entao <React.Fragment>
-- Por que?
    Elementos JSX retornados por função deves ser "wrapped"
    ("embrulhados", "abraçados", "aninhados") em apenas um elemento pai.
    Ou seja, se quiser retornar algo além de apenas um h1, coloque tudo dentro de React.Fragment
-- React.Fragment é uma alternativa à <div></div>

----------------------------------------------------------------------
*/

// var container = document.getElementById("app");

// function Titulos() {
//     return (
//         <React.Fragment>
//             <h1>Este título foi feito em React com JSX e tem um irmão</h1>
//             <h2>Este elemento irmão do titulo, o subtítulo, também foi feito em React com JSX!</h2>
//         </React.Fragment>
//     );
// }

// ReactDOM.render(Titulos(), container);


/*
----------------------------------------------------------------------

Bloco 03 - parte 1 - Usando props!

-- Note que também adicionamos o "createElement" em render, que recebe três valores:
1. O componente sem ()
2. As props, dentro de {}
3. null, não relevante agora :D

-- Ah, e também renomeamos nosso componente Titulos como App

----------------------------------------------------------------------
*/


// var container = document.getElementById("app");

// function App(props) {
//     return (
//         <React.Fragment>
//             <h1>{props.titulo}</h1>
//             <h2>Eu sou um texto chumbado [no código!]</h2>
//         </React.Fragment>
//     );
// }

// ReactDOM.render(React.createElement(App,{titulo: "Esse título veio de uma prop :)"}, null), container);


/*
----------------------------------------------------------------------

Bloco 03 - parte 2 - Acessando props entre os componentes

----------------------------------------------------------------------
*/

// var container = document.getElementById("app");

// function Contador(props) {
//     return (
//         <React.Fragment>
//             <h1>{props.titulo}</h1>
//             <h2>Eu sou um texto chumbado [no código!]</h2>
//         </React.Fragment>
//     );
// }

// function App() {
//     return(
//         <Contador titulo="Eu vim de uma prop em outro componente! huehue"/>
//     )
// }

// ReactDOM.render(React.createElement(App,null, null), container);


/*
----------------------------------------------------------------------

Bloco 04 - Final!

Agora temos dois componentes, um renderizando o outro e um contador! Eba!!

Atenção ao código do contador:
Há algo a ser comentado e descomentado para funcionar.

dica:
        // numero++

        é a mesma coisa que:

        // numero = numero + 1 

----------------------------------------------------------------------
*/



var container = document.getElementById("app")

function Contador(props) {

    /* início da abordagem 1 */

    let numero = 0
    
    function somar() {
        numero++;
        console.log(numero)
    }
    
    function subtrair() {
        numero--;
        console.log(numero)
    }

    /* fim da abordagem 1 */
    
    /*
    abordagem 1, acima, nao vai funcionar.
    abordagem 2, abaixo, vai funcionar.
    */

    /* início da abordagem 2 */

    
    // const [numero, setNumero] = React.useState(0);

    // function somar() {
    //     setNumero(numero + 1);
    //     console.log(numero);
    // }

    // function subtrair() {
    //     setNumero(numero - 1);
    //     console.log(numero)
    // }
    

    /* fim da abordagem 2 */

    return (
        <React.Fragment>
            <h1>{props.titulo}</h1>
            <h2>{numero}</h2>
            <button onClick={somar}>+</button>
            <button onClick={subtrair}>-</button>
        </React.Fragment>
    );
}

function App() {
    return (
        <React.Fragment>
            <h1>Vote no seu preferido!</h1>
            <Contador titulo="React" />
            <Contador titulo="Angular" />
            <Contador titulo="VueJS" />
        </React.Fragment>
    );
}

ReactDOM.render(React.createElement(App, null, null), container);

/*

Atenção!
1. PascalCase -> Componentes em React seguem este padrão
2. camelCase -> Funções em JavaScript


Se você chegou até aqui, PARABÉNS PELA SUA DEDICAÇÃO!

Um presente para a pessoa programadora dev hacker muy demais amante de café que vive em você (:
(Post Scriptum: troque por qualquer outra coisa se não gostar de café <3)

                         )
                        ( (   
                        )   )
                      (     (
                        )     (
                 ___...(-------)-....___
             .-""       )    (          ""-.
       .-'``'|-._             )         _.-|
      /  .--.|   `""---...........---""`   |
     /  /    |                             |
     |  |    |                             |
      \  \   |                             |
       `\ `\ |                             |
         `\ `|                             |
         _/ /\                             /
        (__/  \                           /
     _..---""` \                         /`""---.._
  .-'           \                       /          '-.
 :               `-.__             __.-'              :
 :                  ) ""---...---"" (                 :
  '._               `"--...___...--"`              _.'
    \""--..__                              __..--""/
     '._     """----.....______.....----"""     _.'
        `""--..,,_____            _____,,..--""`
                      `"""----"""`

*/
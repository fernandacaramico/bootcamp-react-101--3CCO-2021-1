import React from 'react';
import logo from '../assets/images/logo.png';
import avatar from '../assets/images/avatar.png';

function NavBar() {
    return(
        <nav>
            <div className="container">
                <img className="logo" src={logo} alt="Logo" />
                <img src={avatar} alt="Avatar" className="avatar" />
            </div>
        </nav>
    );
}

export default NavBar;


/*
Como criar um componente React:
Antes do passo a passo abaixo, crie um arquivo MeuComponente.js em /src/components/

1. importe o react (linha 1)

>> import React from 'react';

2. crie a função com o nome do seu componente

>> function MeuComponente() {
>>    return (
>>       **** aqui vem o html ****
>>    );
>> }

3. exporte (na última linha do seu arquivo de componente!)
>> export default MeuComponente;

4. Ajuste o seu HTML que foi inserido em return da função MeuComponente():
4.1. Troque class por className
4.2. Adicione barra em "self-closing" tags
<img> deve ficar <img />
<br> deve ficar <br />
<input> deve ficar <input />
etc

4.3. importe imagens ao componente!!
    import minhaImagem from 'local/da/imagem.jpg'

*/
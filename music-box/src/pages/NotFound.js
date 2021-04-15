import React from 'react';

function NotFound() {
    return(
        <>
        <nav>
        <div class="container">
            <img class="logo" src="../images/logo.png" alt="Logo"/>
            <img src="../images/avatar.png" alt="Avatar" class="avatar"/>
        </div>
    </nav>

    <div class="container index ">
        <div class="index-content">
            <div class="box-text-index">
                <div class="info-index not-found">
                    <h1>Oops!</h1>
                    <h3>A página que você procura não foi encontrada.</h3>
                </div>
                <div class="img-index"></div>
                <button class="btn-green">Voltar</button>
            </div>     
            <img src="../images/not-found.png" alt="" class="index-img"/>
        </div>  
    </div> 
    </>  
    );

}

export default NotFound;
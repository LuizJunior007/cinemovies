<template>
    <div id="app">
        
        <Header/>
        <div class="container" id="mainContainer">
            <div class="row">
                <div class="col-12">

                    <router-view></router-view>
                </div>
            </div>
        </div>

        <Footer />
    </div>
</template>

<script>

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
    name: 'App',
    components: {
        Header,
        Footer
    }
}
</script>

<style>

    #mainContainer{
        padding-bottom: 7rem;
    }

    #app{
        position: relative;
        min-height: 100vh;
    }

    *{
        font-family: 'Poppins', sans-serif;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        background-color: #151F30 !important;
    }

    .titulos{
        color: #eaeaea;
        border-bottom: 1px solid #1B273D;
    }

    .tituloFilme{
        font-weight: 500;
        color: #eaeaea;
        padding: 7px 5px;
    }

    .capaFilme{
        transition: all 0.3s;
    }

    .capaFilme:hover{
        box-shadow: 1px 2px 5px 2px #2c3f63;
        cursor: pointer;
        border-radius: 7px;
    }

    .capaFilme img{
        border-radius: 7px;
        max-width: 100%;
        height: auto;
        object-fit: contain;
    }

    .posterNull{
       border: 1px solid #212f49;
       border-radius: 7px;
       position: relative;
       display: flex;
       align-items: center;
       justify-content: center;
    }

    .posterNull .msg{
       position: absolute;
       font-size: 0.8em;
       color: #eaeaea;
    }

    .cartaoImg img{
        border-radius: 7px;
        max-width: 100%;
        height: auto;
        object-fit: contain;
    }

    .sinopse{
        color: #cecece;
        letter-spacing: 0.1rem;
    }

    .genero{
        color: #E3371E;
        margin-right: 7px;
    }

    .barra{
        margin-right: 7px;
        color: #212f49;
    }

    .grid{
        display: grid;
        grid-template-columns: repeat(6, minmax(10rem, 1fr)) ;
        column-gap: 1rem;
    }

    @media(max-width: 1400px){

        .grid{
            grid-template-columns: repeat(6, minmax(10rem, 1fr)) 
        }
    }

    @media(max-width: 1200px){

        .grid{
            grid-template-columns: repeat(5, minmax(10rem, 1fr)) 
        }
    }

    @media(max-width: 992px){

        .grid{
            grid-template-columns: repeat(4, minmax(10rem, 1fr)) 
        }
    }

    @media(max-width: 768px){

        .grid{
            grid-template-columns: repeat(3, minmax(5rem, 1fr)) 
        }
    }

    @media(max-width: 575px){

        .grid{
            grid-template-columns: repeat(3, minmax(5rem, 1fr)) 
        }
    }

    @media(max-width: 400px){

        .grid{
            grid-template-columns: repeat(2, minmax(5rem, 1fr)) 
        }
    }
</style>
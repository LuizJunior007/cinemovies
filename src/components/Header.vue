<template>
    <header id="header">
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container">
                <div>
                   <router-link to="/"  class="logo">
                        <i class="bi bi-collection-play-fill"></i> <span>Cinemovies</span>
                   </router-link>
                </div>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarMenu">

                    <div class="ms-auto" id="divInput">
                        <form @submit.prevent="pesquisar()" class="input-group">
                            <input type="search" class="form-control" v-model="query" placeholder="Procurar">
                            <button type="submit" class="btn botao"><i class="bi bi-search"></i></button>
                        </form>
                    </div>

                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><router-link to="/filmes/" active-class="ativo" class="nav-link" >Filmes</router-link></li>
                        <li class="nav-item"><router-link to="/series/" active-class="ativo" class="nav-link">Séries</router-link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>

export default {
    name: 'Header',
    data(){
        return{
            query: ''
        }
    },

    methods: {
        pesquisar(){

            if(this.query == ''){

                alert('Campo vazio');
                return;
            }

            this.$router.push(`/pesquisa/${this.replaceTituloP(this.query)}`);
        },

        replaceTituloP(string){
            return string.replace(/\s+/g, '+'); 
        }
    }
}
</script>

<style scoped>

    .navbar-dark .navbar-toggler{
        border-color: #1B273D;
        color: #1B273D;
    }

    .navbar{
        background-color: transparent;
        border-bottom: 1px solid #1B273D;
        font-size: 1.1em;
    }

    #divInput{
        width: 23rem;
    }

    #navbarDropdown{
        color: #E3371E;
        font-weight: 500;
    }

    input.form-control {
        background-color: #1B273D;
        border: 1px solid #212f49;
        color: #eaeaea;
        padding: 10px;
    }

    .btn i{
        font-size: 1.2em;
    }

    input.form-control::placeholder{
        color: #eaeaea;
    }

    input.form-control:focus{
        box-shadow: none;
        border: 1px solid #354e7a;
    }

    .btn.botao{
        background-color: #E3371E;
    }

    .logo{
        font-size: 1.4em;
        font-weight: 500;
        color: #eaeaea;
        text-decoration: none;
    }

    .logo i{
        color: #E3371E;
    }

    a.nav-link{
        color: #eaeaea !important;
    }

    a.ativo{
        color: #E3371E !important;
    }

    a.nav-link:hover{
        color: #E3371E !important;
    }

    @media (max-width: 992px){
      
        #divInput{
            width: 100%;
            margin: 20px 0;
        }
    }
</style>
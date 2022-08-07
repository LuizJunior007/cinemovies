<template>
    <div id="filmes">
        <Loading v-if="loading" />

        <div v-else>
            <div class="mt-5">
                <h4 class="titulos pb-3">Filmes</h4>
            </div>

            <div v-if="filmes.length > 0">
                <div class="grid">
                    <div class="mt-3" v-for="filme in filmes" :key="filme.id">
                        <div class="cartao">
                            <router-link :to="`/filme/${replaceTitulo(filme.title)}/${filme.id}`">
                                <div class="capaFilme">
                                    <div v-if="filme.poster_path == null && filme.profile_path == null" class="posterNull">
                                        <img src="../assets/imagemTeste.png" alt="poster não encontrado">
                                        <div class="msg">Poster não disponível</div>
                                    </div>
                                    <img :src="`${poster + filme.poster_path}`" alt="poster filme" v-else>
                                </div>
                            </router-link>

                            <div class="tituloFilme">
                                {{filme.title}}
                            </div>
                            
                        </div>
                    </div>
                </div>

             
                <Paginacao :page="page" categoria="filmes"/>
                
            </div>

            <div class="row vh-100" v-else>
                <div class="col-12 text-light">
                    Nenhum filme foi encontrado.
                </div>
            </div> 
        
        </div>
    </div>
</template>

<script>

import api from '../services/api';
import Loading from '../components/Loading.vue';
import Paginacao from '../components/Paginacao.vue';

export default {
    name: 'Filmes',
    components: {
        Loading,
        Paginacao
    },

    props: ['page'],

    data(){
        return{
            filmes: [],
            loading: true,
        }
    },
    created(){
        
        this.getFilmes();
    },

    methods: {

       async getFilmes(){

                
            try{
                const response = await api.get(`popular?api_key=${this.chave}&language=pt-BR&page=${this.page}`)

                this.filmes = response.data.results.slice(0, 18)
                this.loading = false;
                
            }

            catch(error){
                console.log(error)
            }

            return 'true';
        }
    },

    watch: {

        page(){
            
           this.loading = true;

            if(this.getFilmes() === 'true'){
                this.loading = false;
            }
        }
    }
}
</script>

<style scoped>
    
</style>
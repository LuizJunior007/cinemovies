<template>
    <div id="pesquisa">
        
        <Loading v-if="loading"/>

        <div v-else>
            <div class="mt-5">
                <h4 class="titulos pb-3">Pesquisar</h4>
            </div>

            <div class="grid" v-if="filmes.length > 0">
                <div class="mt-3" v-for="filme in filmes" :key="filme.id">
                    <div class="cartao">
                        <router-link v-if="filme.media_type == 'movie'" :to="`/filme/${replaceTitulo(filme.title)}/${filme.id}`">
                            <div class="capaFilme">
                                <img :src="`${!filme.poster_path == '' ? poster + filme.poster_path : poster + filme.profile_path}`" alt="poster filme">
                            </div>
                        </router-link>

                        <router-link v-else-if="filme.media_type == 'tv'" :to="`/serie/${replaceTitulo(filme.name)}/${filme.id}`">
                            <div class="capaFilme">
                                <img :src="`${!filme.poster_path == '' ? poster + filme.poster_path : poster + filme.profile_path}`" alt="poster filme">
                            </div>
                        </router-link>

                        <router-link v-else-if="filme.media_type == 'person'" :to="`/pessoa/${replaceTitulo(filme.name)}/${filme.id}`">
                            <div class="capaFilme">
                                <img :src="`${!filme.poster_path == '' ? poster + filme.poster_path : poster + filme.profile_path}`" alt="poster filme">
                            </div>
                        </router-link>

                        <div class="tituloFilme">
                            {{filme.title || filme.original_name || filme.name}}
                        </div>
                    </div>
                </div>
            </div>

            <div class="row vh-100" v-else>
                <div class="col-12 text-light">
                    Nenhum filme ou série foi encontrado.
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import apiP from '../services/apiP';
import Loading from '../components/Loading.vue';

export default {
    name: 'Pesquisa',
    components: {
        Loading
    },
    props: ['query'],
    data(){
        return{
            filmes: [],
            loading: true
        }
    },

    methods: {
        async pesquisarFilme(){

            try{
                const response = await apiP.get(`multi?api_key=${this.chave}&language=pt-BR&page=1&include_adult=false&query=${this.query}`)

                
                const filtro = response.data.results.filter((i) =>{
                    return i.profile_path !== null && i.poster_path !== null;
                })
                
                this.filmes = filtro;
                this.loading = false;
            }

            catch(error){
                console.log(error)
            }

            return 'true';
        },
    },

    created(){

        this.pesquisarFilme();
    },

    watch: {
        query(){

            this.loading = true;
            
            if(this.pesquisarFilme() === 'true'){

                this.loading = false;    
            }
        }
    }
    
}
</script>

<style scoped>

    
</style>
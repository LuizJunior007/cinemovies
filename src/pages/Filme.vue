<template>
    <div id="filme">
        <Loading v-if="loading"/>

        <div v-else>
            <div class="mt-5">
                <h4 class="pb-3 titulos">{{filme.title}}</h4>
            </div>

            <div class="row mt-4 gx-3">
                <div class="col-xl-2 col-lg-3 col-md-4">
                    <div class="cartaoImg">
                        <div v-if="filme.poster_path == null" class="posterNull">
                            <img src="../assets/imagemTeste.png" alt="poster não encontrado">
                            <div class="msg">Poster não disponível</div>

                        </div>
                        <img :src="`${poster + filme.poster_path}`" alt="Poster" v-else>
                    </div>
                </div>

                <div class="col-xl-9 col-lg-8 col-md-8 mt-lg-0 mt-3">

                    <div class="infoFilme">
                        <div>
                            <span class="genero" v-for="genero in filme.genres" :key="genero.id">
                                {{genero.name}}
                            </span>

                            <span class="barra">
                                |
                            </span>

                            <span class="genero">
                                <i class="bi bi-clock me-1"></i> {{filme.runtime}}m
                            </span>

                            <span class="barra">
                                |
                            </span>

                            <span class="genero">
                                <i class="bi bi-calendar me-1"></i> {{filme.release_date == null ? '' : formatAno(filme.release_date)}}
                            </span>

                            <span class="barra">
                                |
                            </span>

                            <span class="genero">
                                <i class="bi bi-star-fill me-1"></i> {{filme.vote_average}}
                            </span>
                        </div>

                        <div class="mt-3">
                            <p class="sinopse">
                                {{filme.overview.length > 0 ? formatSinopse(filme.overview) : 'Sinopse não disponível.'}}
                            </p>
                        </div>

                        <div class="row mt-3 g-1">
                            <div class="col-6">
                                <div class="genero">
                                    Diretor
                                </div>

                                <div class="sinopse mt-3">
                                   {{!diretor === '' > 0 ? diretor.name : 'Não disponível'}}
                                </div>
                            </div>

                            <div class="col-6">
                                <div class="genero">
                                    Elenco
                                </div>

                                <div class="mt-3">
                                    <span v-for="ator in elenco" :key="ator.id" class="me-2 sinopse">
                                        {{ator.name}}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div class="mt-5">
                <h4 class="pb-3 titulos">Filmes Relacionados</h4>
            </div>

            <div class="grid">
                <div class="mt-3" v-for="filme in filmes" :key="filme.id">
                    <div class="cartao">
                        <router-link :to="`/filme/${replaceTitulo(filme.title)}/${filme.id}/`">
                            <div class="capaFilme">
                                <div v-if="filme.poster_path == null" class="posterNull">
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
        </div>
    </div>
</template>

<script>

import Loading from '../components/Loading.vue';
import api from '../services/api';

export default {
    name: 'Filme',
    props: ['id'],
    components: {
        Loading
    },

    data(){
        return{
            filme: {},
            filmes: [],
            loading: true,
            elenco: [],
            diretor: {},
            lastIndice: null
        }
    },

    created(){
        
        this.subirTopo();
        this.getFilmes();
    },

    methods: {

       async getFilmes(){

            try{

                const response = await Promise.all([
                    api.get(`${this.id}?api_key=${this.chave}&language=pt-BR`),
                    api.get(`${this.id}/credits?api_key=${this.chave}&language=pt-BR`),
                    api.get(`${this.id}/similar?api_key=${this.chave}&language=pt-BR&page=1`)
                ])

                this.filme = response[0].data;
                this.elenco = response[1].data.cast.slice(0, 3);
                this.filmes = response[2].data.results.slice(0, 6);
                
                if(response[1].data.crew.length > 0){

                    this.diretor = response[1].data.crew.find((item) =>{

                        return item.job == 'Director';
                    });

                }
                
                else{
                    this.diretor = ''
                }

                this.loading = false;
            }

            catch(error){
                console.log(error);
            }

            return 'true';
        },

    },

    watch: {

        id(){

            this.subirTopo();
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
<template>
    <div id="serie">
        <Loading v-if="loading"/>

        <div v-else>
            <div class="mt-5">
                <h4 class="pb-3 titulos">{{serie.name}}</h4>
            </div>

            <div class="row mt-4 gx-3">
                <div class="col-xl-2 col-lg-3 col-md-4">
                    <div class="cartaoImg">
                        <div v-if="serie.poster_path == null" class="posterNull">
                            <img src="../assets/imagemTeste.png" alt="poster não encontrado">
                            <div class="msg">Poster não disponível</div>
                        </div>

                        <img :src="`${poster + serie.poster_path}`" alt="Poster" v-else>
                    </div>
                </div>

                <div class="col-xl-9 col-lg-8 col-md-8 mt-lg-0 mt-3">

                    <div class="infoFilme">
                        <div>
                            <span v-for="genero in serie.genres" :key="genero.id" class="genero">
                                {{genero.name}}
                            </span>

                            <span class="barra">
                                |
                            </span>

                            <span class="genero">
                                <i class="bi bi-clock me-1"></i> {{serie.episode_run_time[0]}}m
                            </span>
                            
                            <span class="barra">
                                |
                            </span>

                            <span class="genero">
                                <i class="bi bi-calendar me-1"></i> {{serie.first_air_date == null ? '' : formatAno(serie.first_air_date)}}
                            </span>

                            <span class="barra">
                                |
                            </span>

                            <span class="genero">
                                <i class="bi bi-star-fill me-1"></i> {{serie.vote_average}}
                            </span>
                        </div>

                        <div class="mt-3">
                            <p class="sinopse">
                                {{serie.overview.length > 0 ? formatSinopse(serie.overview) : 'Sinopse não disponível.'}}
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
                <h4 class="pb-3 titulos">Séries Relacionadas</h4>
            </div>

            <div class="grid">
                <div class="mt-3" v-for="serie in series" :key="serie.id">
                    <div class="cartao">
                        <router-link :to="`/serie/${replaceTitulo(serie.name)}/${serie.id}/`">
                            <div class="capaFilme">
                                    <div v-if="serie.poster_path == null" class="posterNull">
                                        <img src="../assets/imagemTeste.png" alt="poster não encontrado">
                                        <div class="msg">Poster não disponível</div>
                                    </div>
                                <img :src="`${poster + serie.poster_path}`" alt="poster filme" v-else>
                            </div>
                        </router-link>
                    

                        <div class="tituloFilme">
                            {{serie.name}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import apiTv from '../services/apiTv';
import Loading from '../components/Loading.vue';

export default {
    name: 'Serie',
    props: ['id'],
    components: {
        Loading
    },
    
    data(){
        return{
            serie: {},
            series: [],
            loading: true,
            elenco: [],
            diretor: {}
        }
    },

    async created(){
        
        this.subirTopo();
        this.getSeries();
    },

    methods: {

       async getSeries(){

            try{
                
                const response = await Promise.all([
                    apiTv.get(`${this.id}?api_key=${this.chave}&language=pt-BR`),
                    apiTv.get(`${this.id}/credits?api_key=${this.chave}&language=pt-BR`),
                    apiTv.get(`${this.id}/similar?api_key=${this.chave}&language=pt-BR&page=1`)
                ])

                this.serie = response[0].data;
                this.elenco = response[1].data.cast.slice(0, 3);
                this.series = response[2].data.results.slice(0, 6);

                if(response[1].data.crew.length > 0){

                    this.diretor = response[1].data.crew.find((item) =>{

                        return item.job == 'Director';
                    });

                }

                else{
                    this.diretor = ''
                }

                this.loading = false;

                return 'true';

            } catch(error){
                console.log(error);
            }

        },

        
    },

    watch: {
        id(){

            this.subirTopo();
            this.loading = true;
            
            if(this.getSeries() === 'true'){

                this.loading = false;
            }
        }
    }
}
</script>

<style scoped>
    
</style>
<template>
    <div id="series">

        <Loading v-if="loading"/>

        <div v-else>
            
            <div class="mt-5">
                <h4 class="titulos pb-3">Séries</h4>
            </div>
            
            <div v-if="series.length > 0">
                <div class="grid">
                    <div class="mt-3" v-for="serie in series" :key="serie.id">
                        <div class="cartao">
                            <router-link :to="`/serie/${replaceTitulo(serie.name)}/${serie.id}`">
                                <div class="capaFilme">
                                    <div v-if="serie.poster_path == null && serie.profile_path == null" class="posterNull">
                                        <img src="../assets/imagemTeste.png" alt="poster não encontrado">
                                        <div class="msg">Poster não disponível</div>
                                    </div>
                                    <img :src="`${poster + serie.poster_path}`" alt="poster serie" v-else>
                                </div>
                            </router-link>
                        </div>

                        <div class="tituloFilme">
                            {{serie.name}}
                        </div>
                    </div>
                </div>

                <Paginacao :page="page" categoria="series"/>
            </div>

            <div class="row vh-100" v-else>
                <div class="col-12 text-light">
                    Nenhuma série foi encontrada.
                </div>
            </div>                       
            
        </div>
    </div>
</template>

<script>

import apiTv from '../services/apiTv';
import Loading from '../components/Loading.vue';
import Paginacao from '../components/Paginacao.vue';


export default {
    name: 'Series',
    components: {
        Loading,
        Paginacao
    },

    props: ['page'],

    data(){
        return{
            series: [],
            loading: true
        }
    },
    created(){
        
        this.getSeries();
        
    },

    methods: {

        async getSeries(){
            try{
                const response = await apiTv.get(`popular?api_key=${this.chave}&language=pt-BR&page=${this.page}`)

                this.series = response.data.results.slice(0, 18)
                this.loading = false;
            }

            catch(error){
                console.log(error)
            }

            return 'true';
        },
    },

    watch: {

        page(){

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
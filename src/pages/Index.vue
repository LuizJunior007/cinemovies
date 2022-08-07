<template>
    <div id="index">
        
        <Loading v-if="loading"/>

        <div v-else>
            <MaisVotados :filmes="maisVotados"/>
            <SeriesMaisVotados :series="seriesMaisVotados" />
            <MaisPopulares :filmes="maisPopulares"/>
            <SeriesPopulares :series="seriesPopulares" />
            
        </div>
    </div>
</template>

<script>

import MaisVotados from '../components/MaisVotados.vue';
import MaisPopulares from '../components/MaisPopulares.vue';
import SeriesPopulares from '../components/SeriesPopulares.vue';
import SeriesMaisVotados from '../components/SeriesMaisVotados.vue';
import api from '../services/api.js';
import apiTv from '../services/apiTv';
import Loading from '../components/Loading.vue';


export default {
    name: 'Index',
    data(){
        return{
            maisVotados: [],
            maisPopulares: [],
            seriesPopulares: [],
            seriesMaisVotados: [],
            loading: true
        }
    },
    components: {
        MaisVotados,
        MaisPopulares,
        Loading,
        SeriesPopulares,
        SeriesMaisVotados
    },

    async created(){
        try{

            const response = await Promise.all([
                api.get(`top_rated?api_key=${this.chave}&language=pt-BR&page=1`),
                api.get(`popular?api_key=${this.chave}&language=pt-BR&page=1`),
                apiTv.get(`popular?api_key=${this.chave}&language=pt-BR&page=1`),
                apiTv.get(`top_rated?api_key=${this.chave}&language=pt-BR&page=1`)
            ])
    
            this.maisVotados = response[0].data.results.slice(0, 6);
            this.maisPopulares = response[1].data.results.slice(0, 6);
            this.seriesPopulares = response[2].data.results.slice(0, 6);
            this.seriesMaisVotados = response[3].data.results.slice(0, 6);
            
            this.loading = false;
        }

        catch(error){

            console.log(error)
        }
    }
}
</script>

<style scoped>
    
</style>
import Vue from 'vue';

const globalMethods = Vue.mixin({

    data(){
        return{
            poster: 'https://image.tmdb.org/t/p/w220_and_h330_bestv2//',
            chave: '8cb6ece921a3dea5b58c61731292824c',
        }
    },

    methods: {
        replaceTitulo(string){
            return string.replace(/\s+/g, '_'); // Subistitui espaços em brancos por traço
        },

        formatAno(string){
            
            return string.slice(0, 4);
        },

        formatSinopse(string){

            if(string.length > 400){
                return string.slice(0, 400) + '...';
            } else{
                return string;
            }
        },
        
    }
})

export default globalMethods;
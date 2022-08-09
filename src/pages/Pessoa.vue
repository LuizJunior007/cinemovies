<template>
    <div id="pessoa">
        <Loading v-if="loading"/>

        <div v-else>
            <div class="mt-5">
                <h4 class="pb-3 titulos">{{pessoa.name}}</h4>
            </div>

            <div class="row mt-4 gx-3">
                <div class="col-xl-2 col-lg-3 col-md-4">
                    <div class="cartaoImg">
                        <img :src="`${poster + pessoa.profile_path}`" alt="Poster">
                    </div>
                </div>

                <div class="col-xl-9 col-lg-8 col-md-8 mt-lg-0 mt-3">

                    <div class="infoFilme">
                        <div>
                            <span class="genero">
                                {{pessoa.known_for_department}} 
                            </span>

                            <span class="barra">
                                |
                            </span>

                            <span class="genero">
                                {{pessoa.place_of_birth}}
                            </span>

                            <span class="barra">
                                |
                            </span>

                            <span class="genero">
                                <i class="bi bi-calendar me-1"></i> {{pessoa.birthday == null ? '' : formatAno(pessoa.birthday)}}
                            </span>
                        </div>

                        <div class="mt-3">
                            <p class="sinopse">
                                {{pessoa.biography.length > 0 ? formatSinopse(pessoa.biography) : 'Biografia não disponível.'}}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="filmesAtuou.length > 0">
                <div class="mt-5">
                    <h4 class="pb-3 titulos">Filmes e séries relacionados</h4>
                </div>

                <div class="grid">
                    <div class="mt-3" v-for="filme in filmesAtuou" :key="filme.id">
                        <div class="cartao">
                            <router-link :to="`/filme/${replaceTitulo(filme.title || filme.name)}/${filme.id}/`">
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
            </div>

            <div v-else class="row vh-100">

            </div>

            
        </div>
    </div>
</template>

<script>

import Loading from '../components/Loading.vue';
import apiPessoa from '../services/apiPessoa';

export default {
    name: 'Pessoa',
    props: ['id'],
    components: {
        Loading
    },

    data(){
        return{
            pessoa: {},
            filmesAtuou: [],
            loading: true
        }
    },

    created(){

        this.subirTopo();
        this.getPessoas();
    },

    methods: {

       async getPessoas(){

            try{ 
            
                const response = await Promise.all([
                    apiPessoa.get(`${this.id}?api_key=${this.chave}&language=pt-BR`),
                    apiPessoa.get(`${this.id}/combined_credits?api_key=${this.chave}&language=pt-BR`)
                ])

                this.pessoa = response[0].data;
                this.filmesAtuou = response[1].data.cast.slice(0, 6);
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

            
            this.loading = true;
            
            if(this.getPessoas() === 'true'){

                this.loading = false;
            }
        }
        
    }
}
</script>

<style scoped>
    
</style>
<template>
    <div id="maisPopulares">
        <div class="mt-5">
            <h4 class="pb-3 titulos">Filmes</h4>
        </div>
        <div class="grid">
            <div class="mt-3" v-for="filme in filmes" :key="filme.id">
                <div class="cartao position-relative">
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
                        {{filme.title || filme.original_name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MaisPopulares',
    props: ['filmes'],
}
</script>

<style scoped>
    
    
</style>
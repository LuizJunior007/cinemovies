<template>
    <div id="seriesMaisVotados">
        <div class="mt-5">
            <h4 class="pb-3 titulos">Séries Bem Avaliadas</h4>
        </div>
        
        <div class="grid">
            <div class="mt-3" v-for="serie in series" :key="serie.id">
                <div class="cartao">
                    <router-link :to="`/serie/${replaceTitulo(serie.name)}/${serie.id}/`">
                        <div class="capaFilme position-relative">
                            <div v-if="serie.poster_path == null" class="posterNull">
                                <img src="../assets/imagemTeste.png" alt="poster não encontrado">
                                <div class="msg">Poster não disponível</div>
                            </div>
                            <img :src="`${poster + serie.poster_path}`" alt="poster filme" v-else>
                        </div>
                    </router-link>
                   

                    <div class="tituloFilme ">
                        {{serie.title || serie.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SeriesMaisVotados',
    props: ['series'],
}
</script>

<style>

</style>
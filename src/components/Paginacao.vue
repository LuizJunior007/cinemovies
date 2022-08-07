<template>
    <div id="paginacao">
        <div class="mt-5">
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item" @click="subirTopo">
                        <router-link :to="`/${categoria}/page/1`" class="linkPage" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </router-link>
                    </li>

                    <div v-for="page in pages" :key="page">
                        <li class="page-item" @click="subirTopo">
                            <router-link :to="`/${categoria}/page/${page}`" :class="`linkPage ${page == paginaAtual ? 'at' : ''}`">{{page}}</router-link>
                        </li>
                    </div>

                    <li class="page-item" @click="subirTopo">
                        <router-link :to="`/${categoria}/page/${pages}`" class="linkPage" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Paginacao',
    data(){

        return{
            pages: 5,
            paginaAtual: 1
        }
    },
    props: ['page', 'categoria'],

    created(){

        if(this.page === undefined){

            this.paginaAtual = 1;
            return;
        }

        this.paginaAtual = this.page;
    },

    watch: {
        page(){
            this.paginaAtual = this.page;
        },
    },

    methods: {
        subirTopo(){
            
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
}
</script>

<style scoped>
    .linkPage{
        background-color: #1B273D;
        color: #eaeaea ;
        border: 1px solid #212f49;
        box-shadow: none;
        margin: 0 3px;
        border-radius: 5px;
        padding: 7px 10px;
        text-align: center;
        text-decoration: none;
        transition: all 0.2s;
    }

    .linkPage.at{
        background-color: #E3371E !important;
        border: 1px solid #741c0e;
    }
</style>
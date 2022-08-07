<template>
    <div id="loading">
        <div class="spinner-border me-2" role="status">
            <span class="visually-hidden">Carregando...</span>
        </div>

        <span>Carregando</span>
    </div>
</template>

<script>
export default {
    name: 'Loading'
}
</script>

<style scoped>
    #loading{
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        color: #E3371E;
        font-weight: 500;
        font-size: 1.2em;
    }
</style>
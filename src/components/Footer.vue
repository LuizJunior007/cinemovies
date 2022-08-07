<template>
    <footer id="footer">
        <div class="logoFooter">
            &copy; 2022 - <i class="bi bi-collection-play-fill "></i> CineMovies. Todos os direitos reservados.
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
    #footer{
        background-color: transparent;
        border-top: 1px solid #1B273D;
        position: absolute;
        width: 100%;
        bottom: 0;
        padding: 17px;
    }

    .logoFooter{
        text-align: center;
        font-weight: 500;
        color: #fff;
    }

    .logoFooter i{
        color: #E3371E;
    }
</style>
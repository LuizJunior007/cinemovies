<template>
    <footer id="footer">
        <div>

        </div>

        <div class="logoFooter">
            &copy; 2022 - <i class="bi bi-collection-play-fill "></i> CineMovies.
        </div>

        <div class="socialLinks">
            <ul>
                <li><a href="https://www.instagram.com/_junior.luiz/"><i class="bi bi-instagram"></i></a></li>
                <li><a href="#"><i class="bi bi-linkedin"></i></a></li>
                <li><a href="https://github.com/LuizJunior007"><i class="bi bi-github"></i></a></li>
            </ul>
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
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logoFooter{
        text-align: center;
        font-weight: 500;
        color: #fff;
        font-size: 0.9em;
    }

    .logoFooter i{
        color: #E3371E;
    }

    .socialLinks ul{
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .socialLinks ul li{
        display: inline-block;
    }

    .socialLinks ul li a{
        color: #E3371E;
        padding: 0 12px;
    }
</style>
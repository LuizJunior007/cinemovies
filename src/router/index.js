import Vue from 'vue';
import Router from 'vue-router';
import Index from '../pages/Index';
import Pesquisa from '../pages/Pesquisa';
import Filmes from '../pages/Filmes';
import Series from '../pages/Series';
import Filme from '../pages/Filme'
import Serie from '../pages/Serie'
import Pessoa from '../pages/Pessoa'

Vue.use(Router);

const router = new Router({

    mode: 'history',
    routes: [

        {
            path: '*',
            component: Index

        },

        {
            path: '/',
            component: Index
        },

        {
            path: '/pesquisa/:query',
            component: Pesquisa,
            props: true
        },

        {
            path: '/filmes/',
            component: Filmes,
            props: true,
            children: [
                {
                    path: '/filmes/page/:page',
                    component: Filmes,
                    props: true
                }
            ]
        },

        {
            path: '/series/',
            component: Series,
            props: true,
            children: [
                {
                    path: '/series/page/:page',
                    component: Series,
                    props: true
                }
            ]
        },

        {
            path: '/filme/:titulo/:id',
            component: Filme,
            props: true,
        },

        {
            path: '/serie/:titulo/:id',
            component: Serie,
            props: true
        },

        {
            path: '/pessoa/:titulo/:id',
            component: Pessoa,
            props: true
        }
    ]
});

export default router;
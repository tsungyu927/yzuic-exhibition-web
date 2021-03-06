import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Exhibition from '../views/Exhibition.vue';
import OrganizeTeam from '../views/OrganizeTeam.vue';
import WorksGrid from '../views/WorksGrid.vue';
import Introduction from '../views/Introduction.vue';
import ContactUs from '../views/ContactUs.vue';

Vue.use(VueRouter);

const routes = [
    //index
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    //展覽作品
    {
        path: '/exhibition',
        name: 'Exhibition',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Exhibition" */ '../views/Exhibition.vue'),
    },
    //策展團隊
    {
        path: '/organizeTeam',
        name: 'OrganizeTeam',
        component: () =>
            import ('../views/OrganizeTeam.vue'),
    },
    {
        path: '/worksGrid',
        name: 'WorksGrid',
        component: WorksGrid,
        // props: (route) => ({ query: route.query.type }),
    },
    {
        path: '/exhibitionIntro',
        name: 'ExhibitionIntro',
        component: Introduction,
    },
    {
        path: '/organizeTeamIntro',
        name: 'OrganizeTeamIntro',
        component: Introduction,
    },
    {
        path: '/contactus',
        name: 'ContactUs',
        component: ContactUs,
    }
];

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes,
});

export default router;
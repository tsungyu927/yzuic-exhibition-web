import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import OrganizeTeam from '../views/OrganizeTeam.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/exhibition',
    name: 'Exhibition',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Exhibition.vue')
  },
  {
    path: '/organizeTeam',
    name: 'OrganizeTeam',
    component: OrganizeTeam
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

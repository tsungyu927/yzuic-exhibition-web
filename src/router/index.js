import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import OrganizeTeam from '../views/OrganizeTeam.vue'
import WorksGrid from '../views/WorksGrid.vue'


Vue.use(VueRouter)

const routes = [
  //index
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  //展覽作品
  {
    path: '/exhibition',
    name: 'Exhibition',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Exhibition.vue')
  },
  //策展團隊
  {
    path: '/organizeTeam',
    name: 'OrganizeTeam',
    component: () => import('../views/OrganizeTeam.vue')
  },
  {
    path: '/worksGrid',
    name: 'WorksGrid',
    component: WorksGrid
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

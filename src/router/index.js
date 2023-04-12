import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/map',
    name: 'map',
    component: () => import(/* webpackChunkName: "about" */ '../components/MapPage.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/fortable',
    name: 'fortable',
    component: () => import(/* webpackChunkName: "about" */ '../components/ForTable.vue')
  },
  {
    path: '/json',
    name: 'json',
    component: () => import(/* webpackChunkName: "about" */ '../components/TesT.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router

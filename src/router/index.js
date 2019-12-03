import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue';
// import Registrarse from '../views/Login.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/registrate',
    name: 'registrate',
    component: () => import('../views/Registrate.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

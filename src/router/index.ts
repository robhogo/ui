import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/AccountCreation.vue')
  },
  {
    path: '/characters',
    name: 'Characters',
    component: () => import('@/views/Characters.vue')
  },
  {
    path: '/characters/create',
    name: 'CharacterCreation',
    component: () => import('@/views/CharacterCreation.vue')
  },
  {
    path: '/server',
    name: 'Server',
    component: () => import('@/views/ServerSelect.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

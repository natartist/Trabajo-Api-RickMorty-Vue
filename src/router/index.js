import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/personaje:id",
    name: "Personaje",
    component: () => import ("../views/Personaje.vue")
  },
  {
    path: "/personajes",
    name: "Personajes",
    component: () => import ("../views/Personajes.vue")
  },
  {
    path: "/:catchAll(.*)",
    name: "Error404",
    component: () => import(/* webpackChunkName: "user" */ "../views/Error404.vue")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/tema/Layout.vue'

const routes = [
  { path: '/', component: Layout,
  	children: [
  		{ path: '/', name: 'home', component: Home }
  	]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import News from '../views/News.vue'
import Contact from '../views/Contact.vue'
import Sheep from '../views/Sheep.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/news', component: News },
  { path: '/contact', component: Contact },
  { path: '/sheep', component: Sheep }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
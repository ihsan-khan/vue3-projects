import './assets/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createMemoryHistory } from 'vue-router'

import TheProjects from './components/TheProjects.vue'
import TheContact from './components/Contact.vue'
import TheAbout from './components/About.vue'

const routes = [
  { path: '/', component: TheProjects },
  { path: '/about', component: TheAbout },
  { path: '/contact', component: TheContact}
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

createApp(App)
  .use(router)
  .mount('#app')

import './assets/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createMemoryHistory } from 'vue-router'

import TheProjects from './components/TheProjects.vue'
import TodoList from './components/TodoList.vue'
import RandomQuoteGenerator from './components/RandomQuoteGenerator.vue'
import TheCalculator from './components/TheCalculator.vue'
import TheAccordion from './components/TheAccordion.vue'
import FormValidation from './components/FormValidation.vue'

const routes = [
  { path: '/', component: TheProjects },
  { path: '/todo', component: TodoList },
  { path: '/random-quote-generator', component: RandomQuoteGenerator},
  { path: '/calculator', component: TheCalculator},
  { path: '/accordion', component: TheAccordion},
  { path: '/form-validation', component: FormValidation}
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

createApp(App)
  .use(router)
  .mount('#app')

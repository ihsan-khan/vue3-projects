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
import ProgressStep from './components/ProgressStep.vue'
import PasswordGenerator from './components/PasswordGenerator.vue'
import DadJokes from './components/DadJokes.vue'
import GithubUserSearch from './components/GithubUserSearch.vue'
import TheWiki from './components/TheWiki.vue'

const routes = [
  { path: '/', component: TheProjects },
  { path: '/todo', component: TodoList },
  { path: '/random-quote-generator', component: RandomQuoteGenerator},
  { path: '/calculator', component: TheCalculator},
  { path: '/accordion', component: TheAccordion},
  { path: '/form-validation', component: FormValidation},
  { path: '/progress-step', component: ProgressStep},
  { path: '/password-generator', component: PasswordGenerator},
  { path: '/dad-jokes', component: DadJokes},
  { path: '/github-user-search', component: GithubUserSearch},
  { path: '/wiki', component: TheWiki},
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

createApp(App)
  .use(router)
  .mount('#app')

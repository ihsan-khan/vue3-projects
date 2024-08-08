import './assets/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createMemoryHistory } from 'vue-router'

import BeginnerProjects from './components/BeginnerProjects.vue'
import TodoList from './components/TodoList.vue'
import RandomQuoteGenerator from './components/RandomQuoteGenerator.vue'
import TheCalculator from './components/TheCalculator.vue'
import TheAccordion from './components/TheAccordion.vue'
import FormValidation from './components/FormValidation.vue'
import ProgressStep from './components/ProgressStep.vue'
import PasswordGenerator from './components/PasswordGenerator.vue'
import DadJokes from './components/DadJokes.vue'
import GithubUserSearch from './components/GithubUserSearch.vue'
import WikiSearch from './components/WikiSearch.vue'
import IntermediateProjects from './components/IntermediateProjects.vue'
import AdvancedProjects from './components/AdvancedProjects.vue'

const routes = [
  { path: '/', component: BeginnerProjects },
  { path: '/intermediate-projects', component: IntermediateProjects },
  { path: '/advanced-projects', component: AdvancedProjects },
  { path: '/todo', component: TodoList },
  { path: '/random-quote-generator', component: RandomQuoteGenerator},
  { path: '/calculator', component: TheCalculator},
  { path: '/accordion', component: TheAccordion},
  { path: '/form-validation', component: FormValidation},
  { path: '/progress-step', component: ProgressStep},
  { path: '/password-generator', component: PasswordGenerator},
  { path: '/dad-jokes', component: DadJokes},
  { path: '/github-user-search', component: GithubUserSearch},
  { path: '/wiki-search', component: WikiSearch},
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

createApp(App)
  .use(router)
  .mount('#app')

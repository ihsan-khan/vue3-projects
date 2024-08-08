<script setup>
import { ref } from 'vue';

const cards = ref([
  {
    title: 'Todo List',
    description: 'This is a brief description of the first card. It gives a short overview of the content.',
    buttonText: 'Preview',
    link:'/todo'
  },
  {
    title: 'Random Quote Generator',
    description: 'This is a brief description of the second card. It gives a short overview of the content.',
    buttonText: 'Preview',
    link:'/random-quote-generator'
  },
  {
    title: 'The Calculator',
    description: 'ref, computed and eval()',
    buttonText: 'Preview',
    link:'/calculator'
  },
  {
    title: 'The Accordion',
    description: 'v-for, map function, spread operator and ref',
    buttonText: 'Preview',
    link:'/accordion'
  },
  {
    title: 'Form Validation',
    description: 'This is a brief description of the second card. It gives a short overview of the content.',
    buttonText: 'Preview',
    link:'/form-validation'
  },
  {
    title: 'Progress Step',
    description: 'This is a brief description of the third card. It gives a short overview of the content.',
    buttonText: 'Preview',
    link:'/progress-step'
  },
  {
    title: 'Password Generator',
    description: 'This is a brief description of the first card. It gives a short overview of the content.',
    buttonText: 'Preview',
    link:'/password-generator'
  },
  {
    title: 'Dad Jokes',
    description: 'This is a brief description of the second card. It gives a short overview of the content.',
    buttonText: 'Preview',
    link:'/dad-jokes'
  },
  {
    title: 'Github User Search',
    description: 'This is a brief description of the third card. It gives a short overview of the content.',
    buttonText: 'Preview',
    link:'/github-user-search'
  },
  {
    title: 'The Wiki',
    description: 'ref, fetch',
    buttonText: 'Preview',
    link:'/wiki-search'
  }
])

</script>
<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center px-4 md:px-8 lg:px-16">
    <div class="w-full">
      <!-- Heading -->
      <h2 class="text-2xl font-semibold text-gray-800 text-center mb-6">
        Vue3 beginner Projects
      </h2>

      <!-- Table -->
      <table class="min-w-full bg-white border border-gray-200 shadow-md">
        <thead>
          <tr class="bg-gray-200">
            <th class="px-4 py-2 text-left text-gray-600">Title</th>
            <th class="px-4 py-2 text-left text-gray-600">Description</th>
            <th class="px-4 py-2 text-left text-gray-600">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(card, index) in cards" :key="index" class="border-t">
            <td class="px-4 py-2">{{ card.title }}</td>
            <td class="px-4 py-2">{{ card.description }}</td>
            <td class="px-4 py-2">
              <router-link :to="card.link" class="bg-blue-500 text-white px-4 py-2 rounded">{{ card.buttonText }}</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<style scoped>

</style>

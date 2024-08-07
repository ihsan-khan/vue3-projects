<script setup>
import Card from './Card.vue'
import { ref } from 'vue';

const cards = ref([
  {
    title: 'Todo List',
    description: 'This is a brief description of the first card. It gives a short overview of the content.',
    buttonText: 'Read More',
    link:'/todo'
  },
  {
    title: 'Random Quote Generator',
    description: 'This is a brief description of the second card. It gives a short overview of the content.',
    buttonText: 'Learn More',
    link:'/random-quote-generator'
  },
  {
    title: 'The Calculator',
    description: 'ref, computed and eval()',
    buttonText: 'Discover',
    link:'/calculator'
  },
  {
    title: 'The Accordion',
    description: 'v-for, map function, spread operator and ref',
    buttonText: 'Review Accordion',
    link:'/accordion'
  },
  {
    title: 'Card Title 5',
    description: 'This is a brief description of the second card. It gives a short overview of the content.',
    buttonText: 'Learn More',
    link:'/todo'
  },
  {
    title: 'Card Title 6',
    description: 'This is a brief description of the third card. It gives a short overview of the content.',
    buttonText: 'Discover',
    link:'/todo'
  },
  {
    title: 'Card Title 7',
    description: 'This is a brief description of the first card. It gives a short overview of the content.',
    buttonText: 'Read More',
    link:'/todo'
  },
  {
    title: 'Card Title 8',
    description: 'This is a brief description of the second card. It gives a short overview of the content.',
    buttonText: 'Learn More',
    link:'/todo'
  },
  {
    title: 'Card Title 9',
    description: 'This is a brief description of the third card. It gives a short overview of the content.',
    buttonText: 'Discover',
    link:'/todo'
  }
])

</script>

<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card 
        v-for="(card, index) in cards" 
        :key="index" 
        :title="card.title" 
        :description="card.description" 
        :buttonText="card.buttonText" 
        :link="card.link"
      />
    </div>
  </div>
</template>

<style scoped>

</style>

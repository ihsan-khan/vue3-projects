<script setup>
import Card from './Card.vue'
import { ref } from 'vue';

const cards = ref([
  {
    title: 'Card Title 1',
    description: 'This is a brief description of the first card. It gives a short overview of the content.',
    buttonText: 'Read More'
  },
  {
    title: 'Card Title 2',
    description: 'This is a brief description of the second card. It gives a short overview of the content.',
    buttonText: 'Learn More'
  },
  {
    title: 'Card Title 3',
    description: 'This is a brief description of the third card. It gives a short overview of the content.',
    buttonText: 'Discover'
  },
  {
    title: 'Card Title 4',
    description: 'This is a brief description of the first card. It gives a short overview of the content.',
    buttonText: 'Read More'
  },
  {
    title: 'Card Title 5',
    description: 'This is a brief description of the second card. It gives a short overview of the content.',
    buttonText: 'Learn More'
  },
  {
    title: 'Card Title 6',
    description: 'This is a brief description of the third card. It gives a short overview of the content.',
    buttonText: 'Discover'
  },
  {
    title: 'Card Title 7',
    description: 'This is a brief description of the first card. It gives a short overview of the content.',
    buttonText: 'Read More'
  },
  {
    title: 'Card Title 8',
    description: 'This is a brief description of the second card. It gives a short overview of the content.',
    buttonText: 'Learn More'
  },
  {
    title: 'Card Title 9',
    description: 'This is a brief description of the third card. It gives a short overview of the content.',
    buttonText: 'Discover'
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
      />
    </div>
  </div>
</template>

<style scoped>

</style>

<script setup>
import { ref, onMounted } from "vue";

const quotes = ref([
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
]);

// Define a ref to store the current quote being displayed
const currentQuote = ref({ text: "", author: "" });

const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.value.length);
  currentQuote.value = quotes.value[randomIndex];
};

// Get a random quote when the component is mounted
onMounted(getRandomQuote);
</script>

<template>
    <div class="max-w-md mx-auto my-12 p-6 text-center border border-gray-300 rounded-lg shadow-md">
      <h1 class="text-2xl mb-6 text-gray-800">Random Quote Generator</h1>
  
      <blockquote class="bg-gray-100 p-6 rounded-lg border border-gray-200 mb-6">
        <p class="text-lg mb-4">{{ currentQuote.text }}</p>
        <cite class="text-gray-500">{{ currentQuote.author }}</cite>
      </blockquote>
  
      <button @click="getRandomQuote" class="px-4 py-2 text-lg bg-blue-500 text-white rounded hover:bg-blue-600">
        Get Random Quote
      </button>
    </div>
</template>
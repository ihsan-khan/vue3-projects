<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  description : String
})
</script>

<template>
    <div class="max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
      <div class="p-4">
        <h2 class="text-xl font-semibold text-gray-800">{{ title }}</h2>
        <p class="mt-2 text-gray-600">{{ description }}</p>
        <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
          Read More
        </button>
      </div>
    </div>
</template>
  
<style scoped>
  /* Scoped styles, if any */
</style>
  
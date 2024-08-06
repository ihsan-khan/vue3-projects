<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  description : String,
  buttonText: String,
  link: String
})
</script>

<template>
    <div class="max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
      <div class="p-4">
        <h2 class="text-xl font-semibold text-gray-800">{{ title }}</h2>
        <p class="mt-2 mb-4 text-gray-600">{{ description }}</p>
        <router-link :to="link" class="bg-blue-500 px-4 py-2 rounded">{{ buttonText }}</router-link>
      </div>
    </div>
</template>
  
<style scoped>
  /* Scoped styles, if any */
</style>
  
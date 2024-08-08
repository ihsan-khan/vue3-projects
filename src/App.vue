<script setup>

</script>

<template>
  <!-- navbar -->
  <nav class="bg-gray-300 shadow-md">
    <div class="container mx-auto px-4 py-2 flex justify-between items-center">
      <!-- Logo -->
      <div class="text-2xl font-bold text-gray-800">
        <router-link to="/">Vue3</router-link>
      </div>

      <!-- Nav Buttons -->
      <div class="space-x-4">
        <router-link 
          to="/" 
          class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">
          Beginner Level
        </router-link>
        <router-link 
          to="/intermediate-projects" 
          class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">
          Intermediate Level
        </router-link>
        <router-link 
          to="/advanced-projects" 
          class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">
          Advanced Level
        </router-link>
      </div>
    </div>
  </nav>
  <router-view></router-view>
</template>

<style scoped>

</style>

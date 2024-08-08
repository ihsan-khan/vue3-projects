<script setup>
import { ref } from 'vue'

const searchQuery = ref('')
const searchResults = ref([])
const isLoading = ref(false)
const error = ref(null)
const isDarkTheme = ref(false)

const searchWikipedia = async (query) => {
  const encodedQuery = encodeURIComponent(query)
  const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${encodedQuery}`

  try {
    isLoading.value = true
    const response = await fetch(endpoint)
    const data = await response.json()

    if (data.query && data.query.search) {
      searchResults.value = data.query.search
      error.value = null
    } else {
      searchResults.value = []
      error.value = 'No results found.'
    }
  } catch (err) {
    console.error('Error fetching data:', err)
    searchResults.value = []
    error.value = 'An error occurred while fetching data.'
  } finally {
    isLoading.value = false
  }
}

const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value
}

const submitSearch = () => {
  if (searchQuery.value.trim() !== '') {
    searchWikipedia(searchQuery.value)
  } else {
    searchResults.value = []
    error.value = 'Please enter a valid search term.'
  }
}
</script>

<template>
  <div :class="{ 'bg-gray-800 text-white': isDarkTheme, 'bg-white text-gray-900': !isDarkTheme }" class="min-h-screen">
    <div class="max-w-4xl mx-auto p-6">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold mb-4">Search Wikipedia</h1>
        <button @click="toggleTheme" class="py-2 px-4 text-lg rounded-full border-none cursor-pointer bg-gray-200 dark:bg-gray-700">
          {{ isDarkTheme ? 'Light' : 'Dark' }}
        </button>
      </div>

      <form @submit.prevent="submitSearch" class="flex mb-6">
        <input
          v-model="searchQuery"
          type="text"
          id="search-input"
          placeholder="Enter search term"
          class="w-full p-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 dark:bg-gray-600 dark:text-white dark:border-gray-500"
        />
        <button type="submit" class="ml-4 py-2 px-4 text-lg font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400">
          Search
        </button>
      </form>

      <div id="search-results">
        <div v-if="isLoading" class="flex justify-center items-center text-2xl h-40">Loading ...</div>
        <p v-if="error" class="text-red-500 mb-6">{{ error }}</p>
        <div v-if="searchResults.length">
          <div v-for="result in searchResults" :key="result.pageid" class="mb-4">
            <h3 class="text-xl font-semibold">
              <a
                :href="`https://en.wikipedia.org/?curid=${result.pageid}`"
                target="_blank"
                rel="noopener"
                class="text-blue-600 hover:underline dark:text-blue-400"
              >
                {{ result.title }}
              </a>
            </h3>
            <a
              :href="`https://en.wikipedia.org/?curid=${result.pageid}`"
              class="block text-blue-600 text-lg mb-2 hover:underline dark:text-blue-400"
              target="_blank"
              rel="noopener"
            >
              {{ `https://en.wikipedia.org/?curid=${result.pageid}` }}
            </a>
            <p class="text-lg" v-html="result.snippet"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

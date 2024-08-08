<script setup>
import { ref } from "vue";
import axios from "axios";

const joke = ref(null);

const fetchJoke = async () => {
  try {
    const response = await axios.get("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    });
    joke.value = response.data.joke;
  } catch (error) {
    console.error("Error fetching dad joke:", error);
  }
};
</script>

<template>
    <div class="max-w-xl mx-auto mt-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-5">Dad Jokes</h2>
      <button @click="fetchJoke" class="px-4 py-2 text-lg bg-green-600 text-white rounded hover:bg-green-700">
        Get Dad Joke
      </button>
      <div v-if="joke" class="mt-5 p-4 border rounded bg-gray-100 text-gray-800">
        {{ joke }}
      </div>
    </div>
</template>
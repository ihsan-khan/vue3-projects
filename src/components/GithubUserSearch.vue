<script setup>
import { ref } from "vue";

const username = ref("");
const userProfile = ref(null);
const error = ref(null);

const getUserProfile = async () => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username.value}`
    );
    const data = await response.json();

    if (response.ok) {
      userProfile.value = data;
      error.value = null;
    } else {
      userProfile.value = null;
      error.value = `Error: ${data.message}`;
    }
  } catch (err) {
    console.error("Error fetching data:", err);
    error.value = "An error occurred while fetching data.";
  }
};
</script>

<template>
    <div class="max-w-xl mx-auto mt-12 p-5 text-center border border-gray-300 rounded-lg shadow-sm">
      <h1 class="text-2xl mb-5 text-gray-800">GitHub User Profile Viewer</h1>
  
      <div class="mb-5">
        <input
          v-model="username"
          placeholder="Enter GitHub username"
          @input="getUserProfile"
          class="w-full p-2 text-lg border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
  
      <div v-if="userProfile" class="mt-5">
        <img :src="userProfile.avatar_url" :alt="userProfile.login" class="w-36 h-36 rounded-full mx-auto mb-5" />
  
        <div class="text-left">
          <p class="text-lg"><strong>Name:</strong> {{ userProfile.login }}</p>
          <p class="text-lg"><strong>Location:</strong> {{ userProfile.location }}</p>
          <p class="text-lg"><strong>Followers:</strong> {{ userProfile.followers }}</p>
          <p class="text-lg"><strong>Following:</strong> {{ userProfile.following }}</p>
          <p class="text-lg"><strong>Public Repos:</strong> {{ userProfile.public_repos }}</p>
        </div>
      </div>
  
      <div v-if="error" class="text-red-500 mt-5">
        <p>{{ error }}</p>
      </div>
    </div>
</template>
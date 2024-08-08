<script setup>
import { ref } from "vue";

const passwordLength = ref(12);
const includeUppercase = ref(true);
const includeNumbers = ref(true);
const includeSymbols = ref(true);
const generatedPassword = ref("");

const generatePassword = () => {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = includeUppercase.value
    ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    : "";
  const numberChars = includeNumbers.value ? "0123456789" : "";
  const symbolChars = includeSymbols.value ? "!@#$%^&*()_+[]{}|;:,.<>?/~`" : "";

  const allChars = lowercaseChars + uppercaseChars + numberChars + symbolChars;

  let password = "";
  for (let i = 0; i < passwordLength.value; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  generatedPassword.value = password;
};
</script>

<template>
    <div class="max-w-md mx-auto mt-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-5">Password Generator</h2>
      
      <label for="length" class="block mb-2">Password Length:</label>
      <input
        type="number"
        id="length"
        v-model="passwordLength"
        min="4"
        max="32"
        class="w-full p-2 mb-4 border rounded"
      />
      
      <div class="flex items-center mb-4">
        <input type="checkbox" id="includeUppercase" v-model="includeUppercase" class="mr-2" />
        <label for="includeUppercase" class="block">Include Uppercase</label>
      </div>
      
      <div class="flex items-center mb-4">
        <input type="checkbox" id="includeNumbers" v-model="includeNumbers" class="mr-2" />
        <label for="includeNumbers" class="block">Include Numbers</label>
      </div>
      
      <div class="flex items-center mb-4">
        <input type="checkbox" id="includeSymbols" v-model="includeSymbols" class="mr-2" />
        <label for="includeSymbols" class="block">Include Symbols</label>
      </div>
      
      <button @click="generatePassword" class="px-4 py-2 text-lg bg-blue-500 text-white rounded hover:bg-blue-600">
        Generate Password
      </button>
      
      <div v-if="generatedPassword" class="mt-5 p-4 border rounded bg-gray-100 text-gray-800">
        <strong>Your Password:</strong> {{ generatedPassword }}
      </div>
    </div>
</template>
  
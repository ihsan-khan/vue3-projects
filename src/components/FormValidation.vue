<script setup>
import { ref, computed } from "vue";

const formData = ref({
  name: "",
  email: "",
  password: "",
});

const isNameValid = computed(() => formData.value.name.trim() !== "");
// The test() method is used to execute the regex on the formData.value.email string.
// It returns true if the email matches the regex pattern and false if it doesn't.
const isEmailValid = computed(() =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)
);
const isPasswordValid = computed(() => formData.value.password.length >= 8);

const isFormValid = computed(
  () => isNameValid.value && isEmailValid.value && isPasswordValid.value
);

const submitForm = () => {
  if (isFormValid.value) {
    // Perform form submission logic here
    console.log("Form submitted!", formData.value);
  } else {
    console.log("Form is invalid. Please check the fields.");
  }
};
</script>

<template>
  <div>
    <form @submit.prevent="submitForm" class="max-w-md mx-auto">
      <div class="mb-5">
        <label for="name" class="block font-bold mb-2">Name:</label>
        <input
          v-model="formData.name"
          type="text"
          id="name"
          class="w-full p-2 text-lg border border-gray-300 rounded"
        />
        <span v-if="!isNameValid" class="text-red-500 text-sm mt-1 block">
          Name is required
        </span>
      </div>

      <div class="mb-5">
        <label for="email" class="block font-bold mb-2">Email:</label>
        <input
          v-model="formData.email"
          type="email"
          id="email"
          class="w-full p-2 text-lg border border-gray-300 rounded"
        />
        <span v-if="!isEmailValid" class="text-red-500 text-sm mt-1 block">
          Please enter a valid email address
        </span>
      </div>

      <div class="mb-5">
        <label for="password" class="block font-bold mb-2">Password:</label>
        <input
          v-model="formData.password"
          type="password"
          id="password"
          class="w-full p-2 text-lg border border-gray-300 rounded"
        />
        <span v-if="!isPasswordValid" class="text-red-500 text-sm mt-1 block">
          Password must be at least 8 characters
        </span>
      </div>

      <button
        type="submit"
        :disabled="!isFormValid"
        class="py-2 px-4 text-lg bg-blue-500 text-white rounded cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Submit
      </button>
    </form>
  </div>
</template>

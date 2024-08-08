<script setup>
import { ref } from 'vue'

const steps = ref(['Step 1', 'Step 2', 'Step 3'])
const currentStep = ref(0)

const nextStep = () => {
  if (currentStep.value < steps.value.length - 1) {
    currentStep.value++
  }
}

const prevStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--
  }
}
</script>

<template>
  <div class="max-w-md mx-auto mt-12">
    <div class="flex bg-gray-200 rounded-lg overflow-hidden">
      <div
        v-for="(step, index) in steps"
        :key="index"
        :class="[
          'flex-1 text-center py-4 text-white relative z-10',
          index !== steps.length - 1 ? 'border-r-2 border-white' : '',
          index === currentStep ? 'bg-green-600' : 'bg-gray-400'
        ]"
      >
        {{ step }}
      </div>
    </div>
    <div class="mt-5 text-center">
      <button @click="prevStep" :disabled="currentStep === 0" class="px-4 py-2 text-lg bg-purple-600 text-white rounded-md mx-1 disabled:bg-gray-400 disabled:cursor-not-allowed">
        Previous
      </button>
      <button @click="nextStep" :disabled="currentStep === steps.length - 1" class="px-4 py-2 text-lg bg-purple-600 text-white rounded-md mx-1 disabled:bg-gray-400 disabled:cursor-not-allowed">
        Next
      </button>
    </div>
  </div>
</template>

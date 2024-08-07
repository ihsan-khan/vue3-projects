<script setup>
import { ref, computed } from "vue";

const display = ref("0");

const appendToDisplay = (value) => {
  if (display.value === "0" && value !== ".") {
    display.value = value;
  } else {
    display.value += value;
  }
};

const calculate = () => {
  try {
    // The toString() method is called on the result of the evaluation to convert it back into a string
    // eval() returns a number and the calculator display should always show a string.
    display.value = eval(display.value).toString();
  } catch (error) {
    display.value = "Error";
  }
};

// Computed property for dynamic class binding
const displayClass = computed(() => {
  return display.value.length > 12 ? "text-sm" : "";
});

const clearDisplay = () => {
  display.value = "0";
};
</script>

<template>
  <div class="flex flex-col items-center mt-4">
    <div class="calculator border p-5 rounded-lg shadow-lg">
      <input
        v-model="display"
        :class="['w-full mb-5 p-2 text-right', displayClass]"
        readonly
      />

      <div class="buttons grid grid-cols-4 gap-2">
        <button @click="appendToDisplay('7')" class="btn">7</button>
        <button @click="appendToDisplay('8')" class="btn">8</button>
        <button @click="appendToDisplay('9')" class="btn">9</button>
        <button @click="appendToDisplay('/')" class="btn">/</button>

        <button @click="appendToDisplay('4')" class="btn">4</button>
        <button @click="appendToDisplay('5')" class="btn">5</button>
        <button @click="appendToDisplay('6')" class="btn">6</button>
        <button @click="appendToDisplay('*')" class="btn">*</button>

        <button @click="appendToDisplay('1')" class="btn">1</button>
        <button @click="appendToDisplay('2')" class="btn">2</button>
        <button @click="appendToDisplay('3')" class="btn">3</button>
        <button @click="appendToDisplay('-')" class="btn">-</button>

        <button @click="appendToDisplay('0')" class="btn">0</button>
        <button @click="appendToDisplay('.')" class="btn">.</button>
        <button @click="calculate()" class="btn">=</button>
        <button @click="appendToDisplay('+')" class="btn">+</button>
      </div>

      <button @click="clearDisplay" class="btn w-full mt-2">C</button>
    </div>
  </div>
</template>

<style>
/* Tailwind Custom Button Style */
.btn {
  @apply w-full p-2 text-lg bg-gray-200 hover:bg-gray-300;
}
</style>

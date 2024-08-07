<script setup>
import { ref } from "vue";

// Create a reactive reference to hold newTask and tasks
const newTask = ref("");
const tasks = ref([]);

const addTask = () => {
   // Check if the new task input is not just whitespace
  if (newTask.value.trim() !== "") {
    // We use tasks.value because tasks is a ref object
    tasks.value.push(newTask.value);
    newTask.value = "";
  }
};

const removeTask = (index) => {
  // Use tasks.value to access the array and remove the task
  // At position index, remove 1 item from tasks array
  tasks.value.splice(index, 1);
};
</script>

<template>
  <div class="todo-app max-w-sm mx-auto my-12 p-5 border border-gray-300 rounded-lg shadow-sm">
    <h1 class="app-title text-2xl mb-5 text-center text-gray-800">Todo App</h1>
    <div class="task-input flex gap-2">
      <input
        v-model="newTask"
        @keyup.enter="addTask"
        placeholder="Add a new task"
        class="flex-1 p-2 text-sm border border-gray-300 rounded-md"
      />
      <button @click="addTask" class="px-3 py-2 text-sm bg-green-600 text-white rounded-md hover:bg-green-700">Add To Do</button>
    </div>

    <ul class="task-list list-none p-0 mt-4">
      <li v-for="(task, index) in tasks" :key="index" class="task-item flex justify-between items-center p-2 my-2 bg-gray-100 border border-gray-200 rounded-md">
        {{ task }}
        <button @click="removeTask(index)" class="remove-button px-2 py-1 text-xs bg-red-600 text-white rounded-sm hover:bg-red-700">Remove</button>
      </li>
    </ul>
  </div>
</template>

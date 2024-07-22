<script setup>
import Todo from './sections/Todo.vue';
import Navbar from './contents/navbar.vue';

import updateStatus from './contents/todo-bar.vue'
</script>

<template>
  <Navbar />
  <div class="bg-[#F5F5F5] h-full pt-12">
    <Todo />
  </div>
</template>

<style scoped></style>

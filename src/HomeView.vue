<script setup>
import Todo from './components/sections/Todo.vue'
import Navbar from './components/contents/navbar.vue';
</script>

<template>
  <Navbar />
  <div class="bg-[#F5F5F5] h-full pt-12">
    <!-- <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p> -->
    <!-- <nav>
      <RouterLink to="/">Go to Home</RouterLink>
      <RouterLink to="/about">Go to About</RouterLink>
    </nav> -->
    <Todo />
  </div>
</template>

<style scoped></style>

<script setup>
import MainNavBar from '@/components/MainNavBar.vue'

console.log('Current mode:', import.meta.env.MODE);
console.log('Is development?', import.meta.env.DEV);
console.log('Is production?', import.meta.env.PROD);
</script>

<template>
  <MainNavBar class="nav" />

  <div class="container">
    <router-view />
  </div>
</template>

<style>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  color: white;
}
</style>

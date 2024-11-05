<script setup>
import MainNavBar from '@/components/MainNavBar.vue'
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

<template>
  <div>
    <div class="flex flex-col gap-12">
      <div class="flex gap-6 flex-wrap">
        <div class="rounded-border p-4 border border-transparent flex items-center justify-center bg-primary hover:bg-primary-emphasis text-primary-contrast font-medium flex-auto transition-colors">primary</div>
        <div class="rounded-border p-4 border border-transparent flex items-center justify-center bg-highlight hover:bg-highlight-emphasis font-medium flex-auto transition-colors">highlight</div>
        <div class="rounded-border p-4 border border-surface flex items-center justify-center text-muted-color hover:text-color hover:bg-emphasis font-medium flex-auto transition-colors">box</div>
      </div>
    </div>

    <h1 class="">Finished workouts</h1>
    <FinishedWorkoutsCard />
  </div>
</template>

<script setup>
import FinishedWorkoutsCard from '@/components/FinishedWorkoutsCard.vue'
import InputText from 'primevue/inputtext'
</script>

<style>
/* You can add your custom styles here if needed */
.button {
  width: 60px;
  height: 60px;
  background: white !important;
  border: none !important;
}
</style>

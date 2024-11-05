<script setup>
import Menubar from 'primevue/menubar';
import { useRouter } from 'vue-router';
import { ref } from 'vue'

const router = useRouter();

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    command: () => {
      router.push('/')
    }
  },
  {
    label: 'Start',
    icon: 'pi pi-play',
    command: () => {
      router.push('/start-workout')
    }
  },
  {
    label: 'Add',
    icon: 'pi pi-plus',
    command: () => {
      router.push('/add-workout')
    }  },
  {
    label: 'History',
    icon: 'pi pi-calendar',
    command: () => {
      router.push('/history')
    }
  }
]);
</script>

<template>
  <div class="card">
    <Menubar :model="items">
      <template #start>

      </template>
    </Menubar>
  </div>
</template>

<style scoped>
</style>

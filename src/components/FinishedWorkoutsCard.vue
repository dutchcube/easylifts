<script setup>
import { ref, computed, onMounted } from 'vue';
import { fetchWorkouts } from '@/FetchWorkouts';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Card from 'primevue/card';
import Button from 'primevue/button';

const workouts = ref([]);
const workoutsToShow = ref(5);

const displayedWorkouts = computed(() => {
  return workouts.value.slice(0, workoutsToShow.value);
});

const showLoadMoreButton = computed(() => {
  return workoutsToShow.value < workouts.value.length;
});

function formatSetsReps(exercise) {
  if (exercise.sets && Array.isArray(exercise.sets)) {
    // Join reps with a slash
    return exercise.sets.map((set) => set.reps).join('/');
  }
  return ''; // Return an empty string if sets is not available
}

function formatDate(date) {
  return date.toLocaleDateString('nl-NL', {
    weekday: 'short',
    day: 'numeric',
    month: 'long'
  });
}

function loadMoreWorkouts() {
  workoutsToShow.value += 5;
}

onMounted(async () => {
  workouts.value = await fetchWorkouts();
  console.log('Fetched Workouts:', workouts.value); // Log the fetched workouts
});
</script>

<template>
  <div v-if="workouts.length > 0">
    <div
      v-for="(workout, index) in displayedWorkouts"
      :key="index"
    >
      <Card class="workout-card">
        <template #title>
          <div class="workout-header">
            <span>{{ workout.name }}</span>
            <span>{{ formatDate(workout.date) }}</span>
          </div>
        </template>
        <template #content>
          <DataTable :value="workout.exercises">
            <Column field="name"></Column>
            <Column>
              <template #body="slotProps">
                {{ formatSetsReps(slotProps.data) }}
              </template>
            </Column>
            <Column field="weight" >
              <template #body="slotProps">
                {{ slotProps.data.weight }} kg
              </template>
            </Column>
          </DataTable>
        </template>
      </Card>
    </div>
    <div v-if="showLoadMoreButton" class="load-more">
      <Button label="Load More" @click="loadMoreWorkouts" />
    </div>
  </div>
  <div v-else>
    <p>No workouts found.</p>
  </div>
</template>

<style scoped>
.workout-card {
  margin-bottom: 1rem;
  border: 1px solid #3f3f46;
}

.workout-header {
  display: flex;
  justify-content: space-between;
}

</style>

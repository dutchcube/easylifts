<script setup>
import { ref, onMounted } from 'vue'
import { useToast } from 'primevue/usetoast'
import { useRouter } from 'vue-router'
import ExerciseComponent from '@/components/StartWorkout/ExerciseComponent.vue'
import { db } from '@/firebase.js'
import { collection, addDoc, getDocs } from 'firebase/firestore'
import Button from 'primevue/button'
import Listbox from 'primevue/listbox'
import Toast from 'primevue/toast' // Import the Toast component

const workouts = ref([])
const selectedWorkout = ref([])
const confirmedWorkout = ref([])
const exercises = ref([]) // Holds exercises data with sets and reps
const toast = useToast() // Initialize the Toast functionality
const isWorkoutConfirmed = ref(false)
const router = useRouter()

onMounted(async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'workoutsList'))
    workouts.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  } catch (e) {
    console.error('Error fetching workouts: ', e)
  }
})

function confirmWorkout() {
  if (selectedWorkout.value) {
    confirmedWorkout.value = selectedWorkout.value
    exercises.value = selectedWorkout.value.exercises.map((ex) => ({
      ...ex,
      sets: Array.from({ length: ex.sets || 5 }, () => ({ reps: ex.reps || 5 }))
    }))
    isWorkoutConfirmed.value = true
  }
}

const updateExercise = (updatedExercise, index) => {
  exercises.value[index] = updatedExercise
}

const finishWorkout = async () => {
  const workoutData = {
    name: confirmedWorkout.value.name,
    date: new Date(),
    exercises: exercises.value.map((exercise, index) => ({
      ...exercise,
      sortOrder: index + 1,
    })),
  };

  console.log('Workout Data:', workoutData);

  try {
    const docRef = await addDoc(collection(db, 'finishedWorkouts'), workoutData);
    console.log('Workout added with ID: ', docRef.id);

    // Reset the state
    selectedWorkout.value = null;
    confirmedWorkout.value = null;
    exercises.value = [];
    isWorkoutConfirmed.value = false;

    // Show a success toast notification
    toast.add({
      severity: 'success',
      summary: 'Workout Saved',
      detail: 'Your workout has been successfully saved.',
      life: 3000,
    });

    await router.push('/');
  } catch (e) {
    console.error('Error adding workout: ', e);
    // Show an error toast notification
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: 'There was a problem saving your workout.',
      life: 3000,
    });
  }
};

</script>

<template>
  <div>
    <!-- Workout Selection List -->
    <div v-if="!isWorkoutConfirmed" class="selection">
      <Listbox
        v-model="selectedWorkout"
        :options="workouts"
        optionLabel="name"
      ></Listbox>
      <Button
        label="Confirm"
        icon="pi pi-check"
        @click="confirmWorkout"
        :disabled="!selectedWorkout"
        class="confirm-button"
      />
    </div>

    <!-- Display Selected Workout -->
    <div v-if="confirmedWorkout">
      <h2>{{ confirmedWorkout.name }}</h2>
      <div v-for="(exercise, index) in exercises" :key="exercise.name">
        <ExerciseComponent
          :exercise="exercise"
          @update-exercise="updateExercise($event, index)"
        />
      </div>
      <Button class="finish-button" v-if="isWorkoutConfirmed" label="Finish workout" @click="finishWorkout" />
    </div>
  </div>
  <Toast /> <!-- Add the Toast component to the template -->

</template>

<style scoped>
/* Add your styles here if needed */
.confirm-button {
  margin-top: 1rem;
  width: 100%;
}

.finish-button {
  margin-top: 1rem;
  width: 100%;
}
</style>

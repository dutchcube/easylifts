<script setup>
import { ref } from 'vue'
import { db } from '../firebase' // Ensure to import your Firebase configuration
import { collection, addDoc } from 'firebase/firestore'

import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Card from 'primevue/card'


const workoutName = ref('')
const exercises = ref([{ name: '', weight: '', sets: '', reps: '' }])

const defaultExercise = () => ({ name: '', weight: '', sets: '', reps: '' })

const addExercise = () => {
  exercises.value.push(defaultExercise())
}

const removeExercise = (index) => {
  exercises.value.splice(index, 1)
}

const submitWorkout = async () => {
  const workoutData = {
    name: workoutName.value,
    exercises: exercises.value.map((exercise) => ({
      name: exercise.name,
      weight: exercise.weight,
      sets: parseInt(exercise.sets),
      reps: parseInt(exercise.reps)
    })),
    date: new Date()
  }

  try {
    await addDoc(collection(db, 'workoutsList'), workoutData)
    alert('Workout saved successfully!')
    // Reset form
    workoutName.value = ''
    exercises.value = [defaultExercise()]
  } catch (error) {
    console.error('Error saving workout: ', error)
  }
}
</script>

<template>
  <div class="container">
    <h2>Create a New Workout</h2>
    <form @submit.prevent="submitWorkout">
      <div class="mb-4">
        <label for="workoutName">Workout Name:</label>
        <InputText id="workoutName" v-model="workoutName" required />
      </div>
      <div>
        <h3>Exercises</h3>
        <Card
          v-for="(exercise, index) in exercises"
          :key="index"
          class="exercise"
        >
          <template #content>
            <div class="mb-2">
              <label :for="'exerciseName' + index">Exercise Name:</label>
              <InputText
                :id="'exerciseName' + index"
                v-model="exercise.name"
                required
                class="exercise-name"
              />
            </div>
            <div class="exercise-inputs mt-2">
              <InputText
                type="number"
                :id="'weight' + index"
                v-model="exercise.weight"
                required
                class="small-input"
                placeholder="Weight"
              />
              <span class="separator">x</span>
              <InputText
                type="number"
                :id="'sets' + index"
                v-model="exercise.sets"
                required
                class="small-input"
                placeholder="Sets"
              />
              <span class="separator">x</span>
              <InputText
                type="number"
                :id="'reps' + index"
                v-model="exercise.reps"
                required
                class="small-input"
                placeholder="Reps"
              />
            </div>
            <Button
              type="button"
              @click="removeExercise(index)"
              class="mt-2 p-button-danger"
              label="Remove Exercise"
            />
          </template>
        </Card>
        <Button
          type="button"
          @click="addExercise"
          class="p-button-primary"
          label="Add Exercise"
        />
      </div>
      <Button
        type="submit"
        class="mt-4 p-button-success"
        label="Save Workout"
      />
    </form>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 16px;
}

label {
  display: block;
  margin-bottom: 4px;
  font-weight: bold;
}

.exercise {
  margin-bottom: 1rem;
  border: 1px solid #3f3f46;
}

.exercise-name {
  width: 500px;
}

.exercise-inputs {
  display: flex;
  align-items: center;
  width: 500px;
}

.small-input {
  width: 70px;
  text-align: center;
}

.separator {
  margin: 0 8px;
  font-weight: bold;
}

.mt-2 {
  margin-top: 8px;
}

.mt-4 {
  margin-top: 16px;
}
</style>

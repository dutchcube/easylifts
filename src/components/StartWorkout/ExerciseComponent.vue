<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  exercise: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['update-exercise'])

const localExercise = ref({ ...props.exercise }) // Make a local copy to avoid mutating props

watch(
  () => props.exercise,
  (newExercise) => {
    localExercise.value = { ...newExercise }
  },
  { deep: true }
)

const decreaseRep = (setIndex) => {
  const set = localExercise.value.sets[setIndex]
  if (set.reps > 0) {
    set.reps--
  } else {
    set.reps = localExercise.value.reps || 5
  }
  emit('update-exercise', localExercise.value)
}
</script>

<template>
  <div class="wrapper">
    <div class="specs">
      <div>{{ localExercise.name }} -</div>
      <div>&nbsp;{{ localExercise.weight }} kg</div>
    </div>
    <div class="set">
      <div class="" v-for="(set, setIndex) in localExercise.sets" :key="setIndex">
        <div class="rep" @click="decreaseRep(setIndex)">
          {{ set.reps }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  margin-top: 1.5rem;
  //background: #34495e;
}

.specs {
  display: flex;
  //justify-content: space-between;
  margin-bottom: 0.5rem;
}

.set {
  display: flex;
  justify-content: flex-start;
  //background: #2c3e50;
}
.rep {
  width: 60px;
  height: 60px;
  background: grey;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
}
</style>

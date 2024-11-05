export const WorkoutData = {
  getWorkoutData() {
    return [{
      id: '123456', name: 'Leg Day', date: '2024-10-12', exercises: [{
        name: 'Squats', sets: [{
          setNumber: 1, reps: 10, weight: 80
        }, {
          setNumber: 2, reps: 8, weight: 85
        }, {
          setNumber: 3, reps: 6, weight: 90
        }]
      }, {
        name: 'Leg Press', sets: [{
          setNumber: 1, reps: 12, weight: 200
        }, {
          setNumber: 2, reps: 10, weight: 210
        }]
      }, {
        name: 'Lunges', sets: [{
          setNumber: 1, reps: 12, weight: 30
        }, {
          setNumber: 2, reps: 12, weight: 30
        }, {
          setNumber: 3, reps: 10, weight: 35
        }]
      }, {
        name: 'Deadlift', sets: [{
          setNumber: 1, reps: 8, weight: 100
        }, {
          setNumber: 2, reps: 6, weight: 110
        }, {
          setNumber: 3, reps: 5, weight: 120
        }]
      }, {
        name: 'Calf Raise', sets: [{
          setNumber: 1, reps: 15, weight: 50
        }, {
          setNumber: 2, reps: 15, weight: 55
        }, {
          setNumber: 3, reps: 12, weight: 60
        }]
      }]
    }]
  }
}

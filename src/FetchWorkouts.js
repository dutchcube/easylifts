import { db } from './firebase'
import { collection, getDocs } from 'firebase/firestore'

// export const fetchWorkouts = async () => {
//   const workoutsCollection = collection(db, 'finishedWorkouts')
//   const workoutSnapshot = await getDocs(workoutsCollection)
//   const workoutList = workoutSnapshot.docs.map((doc) => doc.data())
//   return workoutList
// }

export const fetchWorkouts = async () => {
  const workoutsCollection = collection(db, 'finishedWorkouts')
  const workoutSnapshot = await getDocs(workoutsCollection)
  const workoutList = workoutSnapshot.docs.map((doc) => {
    const data = doc.data()
    if (data.date && data.date.seconds) {
      data.date = new Date(data.date.seconds * 1000)
    }
    return data
  })
  return workoutList
}

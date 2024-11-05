import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB2-rZChMrwk5ikreB0Sou7HZDuqIoyiQk',
  authDomain: 'worko-efe21.firebaseapp.com',
  projectId: 'worko-efe21',
  storageBucket: 'worko-efe21.appspot.com',
  messagingSenderId: '508557933955',
  appId: '1:508557933955:web:a5eaffd266e6525c0c4ab6'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }

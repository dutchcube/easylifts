import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import StartWorkoutView from '../views/StartWorkoutView.vue';
import AddWorkoutView from '../views/AddWorkoutView.vue';
import HistoryView from '../views/HistoryView.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/start-workout', name: 'start-workout', component: StartWorkoutView },
  { path: '/add-workout', name: 'add-workout', component: AddWorkoutView },
  { path: '/history', name: 'history', component: HistoryView },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

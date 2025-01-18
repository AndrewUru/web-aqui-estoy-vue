import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LostAnimalsView from '../views/LostAnimalsView.vue';
import FoundAnimalsView from '../views/FoundAnimalsView.vue';
import AboutUsView from '../views/AboutUsView.vue';
import FormLostAnimalView from '../views/FormLostAnimalView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/lost-animals',
      name: 'lost-animals',
      component: LostAnimalsView,
    },
    {
      path: '/found-animals',
      name: 'found-animals',
      component: FoundAnimalsView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutUsView,
    },
    {
      path: '/form-lost-animal',
      name: 'form-lost-animal',
      component: FormLostAnimalView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
  ],
});

export default router;

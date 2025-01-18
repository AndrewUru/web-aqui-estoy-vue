import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LostAnimalsView from '../views/LostAnimalsView.vue';
import FoundAnimalsView from '../views/FoundAnimalsView.vue';
import AboutUsView from '../views/AboutUsView.vue';
import FormLostAnimalView from '../views/FormLostAnimalView.vue';
import AuthView from '../views/AuthView.vue';
import PostView from '../views/post/PostView.vue';
import NotFoundView from '../views/404View.vue';
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
      component: AuthView
    },
    {
      path: '/register',
      name: 'register',
      component: AuthView
    },
    {
      path: '/post/:id',
      name: 'post-view',
      component: PostView,
      props: true
    },
    {
      path: '/404',
      name: '404-view',
      component: NotFoundView,
    },
  ],
});

export default router;

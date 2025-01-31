import { createRouter, createWebHistory } from 'vue-router';
import LostAnimalsView from '../views/LostAnimalsView.vue';
import FoundAnimalsView from '../views/FoundAnimalsView.vue';
import AboutUsView from '../views/AboutUsView.vue';
import FormLostAnimalView from '../views/FormLostAnimalView.vue';
import AuthView from '../views/AuthView.vue';
import PostView from '../views/post/PostView.vue';
import NotFoundView from '../views/404View.vue';

import FaqView from '../views/footerInfo/FaqView.vue';
import HowItWorksView from '../views/footerInfo/HowItWorksView.vue';
import BlogView from '../views/footerInfo/BlogView.vue';
import AccessibilityView from '../views/footerInfo/AccessibilityView.vue';
import PrivacyView from '../views/footerInfo/PrivacyView.vue';
import ContactView from '../views/footerInfo/ContactUsView.vue';
import ValuesView from '../views/footerInfo/OurValuesView.vue';
import SuccessStoriesView from '../views/footerInfo/SuccessStoriesView.vue';
import ProfileView from '@/views/ProfileView.vue';
import HomeView from '@/views/HomeView.vue';

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
      path: '/form-lost-animal',
      name: 'form-lost-animal',
      component: FormLostAnimalView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/login',
      name: 'login',
      component: AuthView,
    },
    {
      path: '/register',
      name: 'register',
      component: AuthView,
    },
    {
      path: '/post/:id',
      name: 'post-view',
      component: PostView,
      props: true,
    },
    {
      path: '/404',
      name: '404-view',
      component: NotFoundView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutUsView,
    },
    {
      path: '/faq',
      name: 'faq',
      component: FaqView,
    },
    {
      path: '/how-it-works',
      name: 'how-it-works',
      component: HowItWorksView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/accessibility',
      name: 'accessibility',
      component: AccessibilityView,
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: PrivacyView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/values',
      name: 'values',
      component: ValuesView,
    },
    {
      path: '/success-stories',
      name: 'success-stories',
      component: SuccessStoriesView,
    },
  ],
});

export default router;

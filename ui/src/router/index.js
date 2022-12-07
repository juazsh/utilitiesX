import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import UtilitiesView from '@/views/UtilitiesView.vue';
import CurrencySubscriptionContainer from '@/components/currency/CurrencySubscriptionContainer.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/utilities',
    component: UtilitiesView,
    children: [
      {
        path: '/utilities',
        name: 'currency-subscription',
        component: CurrencySubscriptionContainer,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

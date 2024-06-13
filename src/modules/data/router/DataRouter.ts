import { createMemoryHistory, createRouter } from 'vue-router';

const routes = [
  { path: '/data', component: () => import('../pages/DataMain.vue') }
];

export const DataRouter = createRouter({
  history: createMemoryHistory(),
  routes,
});



import { createMemoryHistory, createRouter } from 'vue-router'
import { DataRouter } from '@/modules/data/router/DataRouter'


const routes = [
  ...DataRouter.options.routes,
  {
    path: '/',
    name: 'Home',
    component: () => import('../modules/main/pages/DashboardPages.vue'),
    meta: {
      layout: 'default',
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../modules/auth/LoginPages.vue'),
    meta: {
      layout: 'Empty',
    },
  },
  {
    path: '/sign',
    name: 'Sign',
    component: () => import('../modules/auth/SignPages.vue'),
    meta: {
      layout: 'Empty',
    },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../modules/main/pages/DashboardPages.vue'),
    meta: {
      layout: 'default',
      requiresAuth: true,
    },
  },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

// Добавьте гвард для проверки авторизации
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('authToken');

  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next({ path: '/login' })
  } else if (to.path === '/login' && isAuthenticated) {
    next({ path: '/dashboard' })
  } else {
    next()
  }
})

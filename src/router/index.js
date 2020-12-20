import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../layouts/MainLayout'),
    children: [
      {
        path: '',
        component: () => import('../pages/HomePage'),
        meta: {
          title: 'Crunch Time - Home'
        }
      },
      {
        path: '/team',
        component: () => import('../pages/HomePage'),
        meta: {
          title: 'Crunch Time - Team'
        }
      },
      {
        path: '/:catchAll(.*)',
        component: () => import('../pages/NotFoundPage'),
        meta: {
          title: 'Crunch Time - 404'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Crunch Time'
  next()
})

export default router

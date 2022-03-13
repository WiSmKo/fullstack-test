import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/courses',
      name: 'courses',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CoursesView.vue')
    },
    {
      path: '/locations',
      name: 'locations',
      component: () => import('../views/LocationsView.vue')
    },
    {
      path: '/trainers',
      name: 'trainers',
      component: () => import('../views/TrainersView.vue')
    },
    {
      path: '/bookings',
      name: 'bookings',
      component: ()=>import('../views/BookingsView.vue')
    },
    {
      path: '/bookings/new',
      name: 'add new booking',
      component: () => import('../views/NewBookingView.vue')
    }
  ]
})

export default router

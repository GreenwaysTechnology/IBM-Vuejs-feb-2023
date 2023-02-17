import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ReviewView from '../views/ReviewView.vue'
import ProductView from '../views/ProductView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      redirect: { name: 'review' }
      //component:ReviewView

    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: "/review",
      name: 'review',
      component: ReviewView
    },
    {
      path: "/products/:id",
      name: 'products',
      component: ProductView
    },
    {
      path: '/movies',
      name: 'movies',
      component: () => import('../views/MoviesView.vue'),
      children: [
        {
          path: '',
          redirect: '/movies/drama'
        },
        {
          path: 'action',
          component: () => import('../views/ActionView.vue'),
        },
        {
          path: 'drama',
          component: () => import('../views/DramaView.vue'),
        },
        {
          path: 'horror',
          component: () => import('../views/HorrorView.vue'),
        }
      ]
    }

  ]
})

export default router

import {createRouter, createWebHistory} from 'vue-router'
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
            path: '/home',
            redirect: '/'
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutView.vue')
        },
        {
            path: '/cars/:id',
            name: 'car',
            component: () => import('../views/CarView.vue'),
            children: [
                {
                    path: 'contact',
                    component: () => import('../views/ContactView.vue')
                }
            ]
        },
        {
            path: '/:catchall(.*)*',
            component: () => import('../views/404View.vue'),
            name: 'Not Found'

        }
    ]
})

export default router

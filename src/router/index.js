import { createRouter, createWebHistory } from 'vue-router'
import About from '../pages/about.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: import ('@/pages/home.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
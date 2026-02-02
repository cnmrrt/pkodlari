import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/city/:city', component: () => import('./views/CityPage.vue') },
    { path: '/city/:city/:district', component: () => import('./views/DistrictPage.vue') },
    { path: '/city/:city/:district/:neighborhood', component: () => import('./views/NeighborhoodPage.vue') },
    { path: '/:pathMatch(.*)*', component: HomePage }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ShowList from '../views/ShowList.vue'
import YourChoice from '../views/YourChoice.vue'

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: 'showList',
                component: ShowList
            },
            {
                path: 'yourChoice/:name',  
                component: YourChoice,
                props: true  
            }
        ]
    },
    {
        path: '/about',
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
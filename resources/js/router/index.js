import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import CategoryList from '../pages/category/Index'
import CreateCategory from '../pages/category/Create'
import EditCategory from '../pages/category/Edit'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/category',
        name: 'category-list',
        component: CategoryList
    },
    {
        path: '/category/create',
        name: 'create-category',
        component: CreateCategory
    },
    {
        path: '/category/edit/:id',
        name: 'edit-category',
        component: EditCategory
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home';
import Add from '@/views/Add';
import Post from '@/views/Post'
import Edit from '@/views/Edit'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'Add',
    component: Add
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: Post
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import Router from 'vue-router'
let Home = () => import('@/views/home');
let Login = () => import('@/views/login');


Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/home',
      name: 'one',
      component: Home,
      children: [
        {
          path: 'friend',
          name: 'friend',
          component: () => import('@/views/friend/list')
        },
        {
          path: 'friend/edit',
          name: 'friendEdit',
          component: () => import('@/views/friend/edit')
        },
        {
          path: 'article',
          name: 'article',
          component: () => import('@/views/article/list')
        },
        {
          path: 'article/edit',
          name: 'articleEdit',
          component: () => import('@/views/article/edit')
        }
      ]
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
let Home = () => import('@/views/home');
let Login = () => import('@/views/login');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})

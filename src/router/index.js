import Vue from 'vue'
import Router from 'vue-router'
let Home = () => import('@/views/home');
let Login = () => import('@/views/login');
let Welcome = () => import('@/views/welcome');
let FriendList = () => import('@/views/friendList');
let FriendEdit = () => import('@/views/friendEdit');
let articleList = () => import('@/views/articleList');
let articleEdit = () => import('@/views/articleEdit');
let projectList = () => import('@/views/projectList');
let projectEdit = () => import('@/views/projectEdit');

let routerArr = [
  {
    path: 'friend',
    name: 'friend',
    component: resolve => {
      require(['@/views/friendList.vue'], resolve);
    }
  }
]
console.log(routerArr);
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: routerArr
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})

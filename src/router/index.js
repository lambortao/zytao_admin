import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/config/router.js';

Vue.use(Router);
console.log(routes);
const router = new Router({
  routes
})
export default router;

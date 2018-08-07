// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import tableList from './libs/my-table.vue'
import axios from 'axios';
// 调取公用函数内的接口函数
import { __port } from '@/utils'

Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

// 全局组件
// 内容列表组件
Vue.component('table-list', tableList);

// 全局注册
Vue.prototype.$port = __port;
Vue.prototype.axios = axios;
Vue.urlHost = process.env.NODE_ENV === 'development' ? 'http://localhost/hope/admin.php/' : config.dev.urlHost;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

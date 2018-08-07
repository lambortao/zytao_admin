// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import tableList from './libs/my-table.vue'
import axios from 'axios';

Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
Vue.component('table-list', tableList);

Vue.prototype.axios = axios;
Vue.prototype.urlHost = process.env.NODE_ENV === 'development' ? 'http://localhost/hope/admin.php/' : config.dev.urlHost;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

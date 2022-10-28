import Vue from 'vue'
import App from './App.vue'
import axiosInstance from './axiosInstance'

Vue.config.productionTip = false

import { Notification, Message } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


import router from './routes/routes'
import { store} from './store/store'

Vue.prototype.$http = axiosInstance;
Vue.prototype.$message = Message;
Vue.prototype.$notify = Notification;


new Vue({
  router, store,
  render: h => h(App),
}).$mount('#app')

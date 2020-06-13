import Vue from 'vue'
import App from './App.vue'
//引入 自定义的请求库 axios
import axios from "../src/common/axios"
//挂载在Vue的原型上
Vue.prototype.$axios = axios;
import router from "./router"
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

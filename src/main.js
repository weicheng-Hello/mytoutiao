import Vue from 'vue'
import App from './App.vue'
//引入 自定义的请求库 axios
import axios from "../src/common/axios"
//引入自定义的消息空间
import { Message }from "../src/common/utils"
//挂载在Vue的原型上
Vue.prototype.$axios = axios;
//挂载在Vue的原型上
Vue.prototype.$message = Message
//引入路由配置信息
import router from "./router"
//引入vuex store
import store from "./vuex/store"
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

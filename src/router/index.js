import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
import Index from "../components/Index"
import userLogin from "../components/login/userLogin"
import Register from "../components/login/Register"
let routes = [{
    path:"/",
    name:"index",
    component:Index
},{
    path:"/userLogin",
    name:"userLogin",
    component:userLogin
},{
    path:"/Register",
    name:"register",
    component:Register
}]
export default new VueRouter({
    routes
})
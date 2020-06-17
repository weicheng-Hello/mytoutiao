import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
import Index from "../components/Index"
import userLogin from "../components/login/userLogin"
import Register from "../components/login/Register"
import User from "../components/user/User"
import UserData from "../components/user/UserData"
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
},{
    path:"/User",
    name:"user",
    component:User
},{
    path:"/UserData",
    name:"userData",
    component:UserData
}]
export default new VueRouter({
    routes
})
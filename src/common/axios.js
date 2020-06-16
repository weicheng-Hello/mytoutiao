import axios from "axios"
axios.defaults.baseURL = "http://tt.linweiqin.com/api/tt/";
//请求拦截
axios.interceptors.request.use(function(config){
    //防御性代码
    let data = config.data || {}
    //获取用户本地数据
    let userInfo = JSON.parse(localStorage.getItem("userInfo")) || {}
    //获取token数据
    let oauth_token = userInfo["oauth_token"] || ""
    //将token添加到config.data里面中
    if(oauth_token)
    data["oauth_token"] = oauth_token
     config.data = data
    return config
}),function(error){
    return Promise.reject(error);
}
//相应拦截
axios.interceptors.response.use(function(response){
    return response.data;
}),function(error){
    return Promise.reject(error);
}
export default axios;
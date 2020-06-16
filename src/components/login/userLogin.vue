<!--  -->
<template>
<div class=userLogin>
    <div class="userLogin-box">
        <h3>账号登录</h3>
        <div class="input-box">
    
            <input type="text" placeholder="账号/邮箱" v-model="username">
            <input type="password" placeholder="密码" v-model="password">
        </div>
        <div class="userLogin-btn" @click.stop="loginBtn">
            登录
        </div>
        <div class="tips">
            <div class="left">登录/注册即表示你的同意<a href="">用户协议</a>和<a href="">隐私条款</a></div>
            <div class="right">
                <a class="register" href="" @click.prevent.stop="registerBtn">注册用户</a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {UPDATE_USER_INFO} from "../../vuex/mutationsType"
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    username:"",
    password:""
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    loginBtn:function(){
        // this.$router.push({
        //     name:"index"
        // });
        let username = this.username;
        let password = this.password;
        if(!username || !password){
            this.$message({
                msg:"账号或密码不能为空"
            })
            return false
        }
        this.$axios.post("/loginCheck",{
            username,
            password
        }).then(res => {
            console.log(res)
            this.$message({
                msg:res.msg
            })
            if(res.status === 0){
                //登录成功
                //a.将用户信息保存到本地 localStorage
                //b.将用户信息使用vuex存起来 方便实现页面组件的数据共享
                //c.跳转到首页
                console.log(UPDATE_USER_INFO)
                this.$store.commit(UPDATE_USER_INFO,res.wdata)
                this.$router.push({"name":"index"})
            }
        })
        

    },
    //跳转注册页面
    registerBtn:function(){
        this.$router.push({
            name:"register"
        })
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang="less" scoped>
    .userLogin {
        width: 400px;
        height: 300px;
        border:1px solid #ddd;
        position: fixed;
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%);
        padding: 10px;
  .userLogin-box {
    h3 {
        width: 100%;
        height: 40px;
        text-align: center;
        line-height: 40px;
        border-bottom: 1px solid #ddd;
        
    }

    .input-box {
        padding-top:10px ;
      input {
          width: 100%;
          height: 50px;
          margin-bottom: 10px;
          padding-left: 10px;
          border-radius: 5px;
          border: 1px solid #ddd;
      }
    }

    .userLogin-btn {
        width: 100%;
        height: 50px;
        background-color: var(--themeColor);
        color: white;
        text-align: center;
        line-height: 50px;
        border-radius: 5px;
        margin-top: 10px;
    }
    .tips {
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        margin-top: 15px;
   .left{
      font-size: 14px;
      a{
          text-decoration: none;
      }
  }
}

.right {
    font-size: 14px;
    a{
        text-decoration: none;
    }
}
  }
}
</style>
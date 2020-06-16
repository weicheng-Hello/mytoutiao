<!--  -->
<template>
<div class='login'>
        <div v-if="!userInfo.oauth_token">
            <p class="login-message">登录后可以保存您的浏览喜好、评论、收藏，并与APP同步，更可以发布微头条</p>
        <div class='login-btn' @click.stop="userLogin">登录</div>
        </div>
        <div class="logging" v-else>
            <div class="layout" @click="logoutClick">退出登录</div>
            <div class="top">
                <div class="user-img">
                    <img :src="userInfo.avator" alt="" @click.stop="goToInformation">
                    <div class="nickname">{{userInfo.nickname}}</div>
                </div>
            </div>
            <div class="bottom">
                <div class="left">
                    <div class="bottom-num">{{userInfo.tt_count}}</div>
                    <div class="bottom-tt">头条数</div>
                </div>
                <div class="right">
                    <div class="bottom-num">{{userInfo.article_count}}</div>
                    <div class="bottom-wz">文章数</div>
                </div>
            </div>
        </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { UPDATE_USER_INFO } from "../../vuex/mutationsType"
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {
    //从vuex中 获取登录的用户数据
    userInfo:function(){
        return this.$store.state.userInfo
    }
    
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    userLogin:function(){
        this.$router.push({
            name:"userLogin"
        })
    },
    logoutClick:function(){
        this.$axios.post("/logout").then(res => {
            this.$message({
                msg:res.msg
            })
            this.$store.commit(UPDATE_USER_INFO,{})
        })
    },
    goToInformation:function(){
        this.$router.push({
            path:"/User"
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
    .login {
        width: 100%;
        height: 270px;
        border: 20px solid #ddd;
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
  .login-message {
      width:80%;
      color: #ddd;
      font-size: 14px;
      margin: 0 auto;
      text-align: center;
      
  }

  .login-btn {
      width: 80%;
      height: 40px;
      background-color: var(--themeColor);
      text-align: center;
      line-height: 40px;
      color: white;
      border-radius: 5px;
      margin: 10px auto;
  }
  .logging {
        width: 100%;
        height: 100%;
        position: relative;
      .layout{
          position: absolute;
          right: 10px;
          top: 10px;
          color: #7B7B7B;
      }
  .top {
      
    .user-img {
        border-radius: 50%;
        margin-top: 50px;
        margin-left:130px;
      img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
      }

      .nickname {

      }
    }
  }

  .bottom {
      display: flex;
      justify-content: space-around;
      padding-top: 30px;
    .left {
        text-align: center;
        position: relative;
      .bottom-num {

      }

      .bottom-tt {

      }
    }
    .left::after{
        content:"";
        border-right: 1px solid #ddd;
        height: 100%;
        position: absolute;
        left: 100px;
        top: 2px;
    }

    .right {
        text-align: center;
      .bottom-num {

      }

      .bottom-wz {

      }
    }
  }
}
}
</style>






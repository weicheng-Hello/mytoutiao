<!--  -->
<template>
<div class='tt-index'>
    <div class="header">
        <Header></Header>
    </div>
    <div class="tt-content">
        <div class="content-left">
            <Nav></Nav>
        </div>
        <div class="content-middle">

            <Post></Post>
            <newList></newList>
        </div>
        <div class="content-right">
            <div class="searchInput">
                <searchInput></searchInput>
                <Login></Login>
            </div>
        </div>
    </div>
    
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Header from "../components/header/Header"
import Nav from "../components/nav/Nav"
import Post from "../components/post/Post"
import searchInput from "../components/searchInput/SearchInput"
import Login from "../components/login/login"
import newList from "../components/newList/NewList"
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    Header,
    Nav,
    Post,
    searchInput,
    Login,
    newList
},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

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
    *{
        --themeColor:#ea4245;
    }
    .tt-index {
  .header {
    header {

    }
  }

  .tt-content {
      display: flex;
      padding: 10px 7vw 10px 10vw;
    .content-left {
        flex: 1;
    
      nav {
      

      }
    }

    .content-middle {
        flex: 2.2;
    }

    .content-right {
        margin-left: 70px;
        width: 350px;
    }
  }
}
</style>
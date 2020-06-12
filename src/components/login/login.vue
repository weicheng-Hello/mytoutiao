<!--  -->
<template>
<div class='login'>
        <p class="login-message">登录后可以保存您的浏览喜好、评论、收藏，并与APP同步，更可以发布微头条</p>
        <div class='login-btn'>登录</div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
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
}
</style>






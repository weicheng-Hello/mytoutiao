<!--  -->
<template>
<div class='nav'>
    <h2>今日头条</h2>
    <div class="nav-list" v-for="nav in navs" :key="nav.id">{{nav.title}}</div>
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
    navs:[
        {id:1,title:"推荐"},
        {id:2,title:"西瓜视频"},
        {id:3,title:"热点"},
        {id:4,title:"直播"},
        {id:5,title:"图片"},
        {id:6,title:"科技"},
        {id:7,title:"娱乐"},
        {id:8,title:"游戏"},
        {id:9,title:"体育"},
        {id:10,title:"懂车帝"},
        {id:11,title:"财经"},
        {id:12,title:"搞笑"},
        {id:13,title:"更多"},
    ]
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
    .nav {
        width: 110px;
        margin: 0 auto;
  h2 {
      text-align: center;
      color: var(--themeColor);
  }

  .nav-list {
    //   width: 80px;
    //   height: 40px;
      text-align: center;
      line-height: 40px;
      transition: all 0.3s;
  }
  .nav-list:nth-child(2){
    //   width:80px;
    //   height: 40px;
      text-align: center;
      line-height: 40px;
      background-color: var(--themeColor);
      color: white;
      border-radius:5px ;
  }
  .nav-list:hover{
      background-color: var(--themeColor);
      color: white;
      border-radius:5px ;
  }
}
</style>
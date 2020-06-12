<!--  -->
<template>
<div class='post'>
    <div class="top">
        <div :class="['top-title',{'active':item.id==tabId}]" 
        v-for="(item,index) in titles" 
        :key="index"
        @click.stop="tabClick(item.id)"
        >{{item.text}}</div>
    </div>
    <div class="middle">
        <textarea  cols="30" rows="10" placeholder="有什么事新鲜事告诉大家"></textarea>
    </div>
    <div class="bottom">
        <div class="left" @click="addImage">图片</div>
        <div class="right">发布</div>
    </div>
    <div class="changeImg">
        <div class="changImg-list"></div>
            <img :src="url" alt="">
    </div>
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
    titles:[
        {id:"toutiao",text:"发微头条"},
        {id:"文章",text:"写文章"}
    ],
    tabId:""
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    tabClick:function(id){
        this.tabId=id
    },
    addImage:function(){
        
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
    .post {
        width: 100%;
        // height: 270px;
        border: 1px solid #ddd;
        display: flex;
        flex-direction: column;
  .top {
      display: flex;
      height: 40px;
      text-align: center;
      line-height: 40px;
    //   margin-left: 15px;
      .top-title{
          margin-left:15px;
          margin-right: 15px;
      }
      .active{
          color: var(--themeColor);
          border-bottom: 2px solid var(--themeColor);
      }
  }

  .middle {
    textarea {
        width: 100%;
        border: 1px solid #ddd;
        background-color: #ddd;
        padding: 20px;
        outline: medium;
    }
  }

  .bottom {
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    .left {
        padding-left: 30px;
    }

    .right {
        float: right;
        width:100px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: white;
        background-color: var(--themeColor);
        opacity: 0.5;
    }
  }
  .changeImg {
      width: 300px;
      border: 1px solid black;
      padding: 10px;
  .changImg-list {
      width: 100px;
      height: 100px;
      border:1px dashed #ddd;
  }

  img {

  }
}
}
</style>
<!--  -->
<template>
<div class='userMessage'>
    <div class="userMessage-header">
        <h2>今日头条</h2>
    </div>
    <div class="userMessage-personal">
        <div class="userMessage-img">
            <img :src="userInfo.avator" alt="">
        </div>
        <div class="userMessage-nicName">{{userInfo.nickname}}</div>
        <div class="userMessage-modify" @click="changeMessage">编辑</div>
    </div>
    <div class="userMessage-content">
        <div class="top">
            <div :class="['content-title',{active:tit.id == titleTab}]" 
            v-for="(tit,index) in titles" 
            :key="index"
            @click="clickTab(tit.id)"
            >{{tit.title}}</div>
        </div>
        <div class="content" v-if="titleTab=='toutiao'">
            <div class="message">
                <img :src="userInfo.avator" alt="">
                <span>{{userInfo.nickname}}</span>
            </div>
            <div class="title"></div>
            <div class="content-title"></div>
            <div class="data"></div>
            <div class="del">删除</div>
        </div>
        <div class="content" v-else>
            <div class="message" v-for="(news,index) in articles" :key="index">
                <img :src="userInfo.avator" alt="">
                <span>{{userInfo.nickname}}</span>
            
            <div class="title">{{news.title}}</div>
            <!-- <img :src="userInfo.avator" alt=""> -->
            <div class="content-title">{{news.title}}</div>
            <div class="data">{{news.created_at}}</div>
            <div class="del">文章</div>
        </div>
        </div>
        
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
        {id:"toutiao",title:"微头条"},
        {id:"wenzhang",title:"文章"}
    ],
    titleTab:"toutiao",
    toutiaos:[],//头条数据
    articles:[],//文章数据
};
},
//监听属性 类似于data概念
computed: {
    userInfo:function(){
        return this.$store.state.userInfo
    }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    clickTab:function(id){
        this.titleTab = id
    },
    changeMessage:function(){
        this.$router.push({
            path:"/UserData"
        })
    }
        
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    //获取微头条数据
    this.$axios.post("/getArticlesByType",{
        type:"TT"
    }).then(res => {
        console.log(res)
        this.toutiaos = res.articles
    }),
    //获取文章数据
    this.$axios.post("/getArticlesByType",{
        type:"article"
    }).then(res => {
        console.log(res)
        this.articles = res.articles
    })
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
    .userMessage {
        
  .userMessage-header {
      width: 100%;
      height: 50px;
      line-height: 50px;
      color: var(--themeColor);
      padding-left: 10%;
    h2 {
        
    }
  }

  .userMessage-personal {
      width: 1200px;
      height: 300px;
      margin: 0 auto;
      border: 1px solid #ddd;
      background-image: url("./img/bg_profile.png");
      background-repeat: no-repeat;
      background-size: 1200px 200px;
      position: relative;
      
    .userMessage-img {
        position: absolute;
        top: 150px;
        left: 50px;
      img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
      }
    }

    .userMessage-nicName {
        position: absolute;
        top: 210px;
        left: 160px;
        font-size: 20px;
    }

    .userMessage-modify {
        position: absolute;
        top: 215px;
        left:250px;
    }
  }
  .userMessage-content {
      width: 1200px;
      margin: 0 auto;
      border: 1px solid #ddd;
      margin-top: 20px;
  .top{
      display: flex;
      height: 50px;
      line-height: 50px;
      border-bottom: 2px solid #ddd;
      .content-title {
          margin-left: 20px;
  }
  .active{
      color: blue;
      border-bottom: 1px solid var(--themeColor);
  }
  
}
  .content {
    .message {
        border-radius: 50%;
      img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
      }

      span {

      }
    }

    .title {

    }

    .content-title {

    }

    .data {

    }
  }
  

  .del {

  }
}
}
</style>
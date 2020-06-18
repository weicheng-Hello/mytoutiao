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
        <div class="content" 
            v-show="titleTab == 'toutiao'"  
            v-for="(toutiao,index) in toutiaos" :key="index">
            <div class="left">
                <img :src="imgs" alt="" v-show="toutiao.imgs != null">
            </div>
            <div class="message">
                <img :src="userInfo.avator" alt="">
                <span>{{userInfo.nickname}}</span>
                <div class="title">{{toutiao.content}}</div>
                <div class="data">{{toutiao.created_at}}</div>
            <div class="del" @click.stop="delMessage(toutiao.nid)">删除</div>
            </div>
        </div>
        <div class="content" 
            v-show="titleTab == 'wenzhang'"  
            v-for="(item,index) in articles" :key="index">
            <div class="left">
                <img :src="imgs" alt="" >
            </div>
            <div class="message">
                <img :src="userInfo.avator" alt="">
                <span>{{userInfo.nickname}}</span>
                <div class="title">{{item.title}}</div>
                <div class="data">{{item.created_at}}</div>
            <div class="del" @click.stop="delMessage(item.nid)">删除</div>
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
    imgs:"",//用户发表的图片
    
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
    },
    //删除头条
    delMessage:function(nid){
        this.$axios.post("/deleteArticle",{
            nid: nid
        }).then(res => {
            this.$message({
                msg:res.msg
            })
            //res.status == 0 代表删除成功
            if(res.status == 0){
                let index = this.toutiaos.findIndex(v => v.nid==nid)
                if(index !=-1){
                    this.toutiaos.splice(index,1)
                    return true
                }
                index = this.articles.findIndex(v => v.nid==nid)
                if(index !=-1){
                    this.articles.splice(index,1)
                    return true
                }
            }
        })
    },
    // delWz:function(){

    // }
        
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    //获取微头条数据
    this.$axios.post("/getArticlesByType",{
        type:"TT",
        
    }).then(res => {
        // console.log(res)
        this.toutiaos = res.articles
        // console.log(res.articles)
        if(this.toutiaos != []){
        this.toutiaos.forEach(e => {
            // console.log(e.imgs)
            // console.log()
            
                // let img = []
                // img.push(e.imgs)
                // console.log(img)
                if(e.imgs != null){
                this.imgs = e.imgs.split(",")[0]}
            
        })
         }   // console.log(this.imgs)
        }),
        // console.log(this.imgs)
        
    
    //获取文章数据
    this.$axios.post("/getArticlesByType",{
        type:"article"
    }).then(res => {
        this.articles = res.articles
        // console.log(this.articles[0].content)
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
    // display: flex;
    padding: 10px;
    position: relative;
    border-bottom: 1px solid #ddd;
  .left {
    img {
        width: 140px;
        height: 100px;
        border: 1px dashed #ddd;
    }
  }

  .message {
      padding-left: 10px;
      
    img {
        margin-top: 10px;
        width:30px;
        height: 30px;
        border-radius: 50%;
    }

    span {

    }
    .title {
        margin-top: 5px;
    }

    .data {
        margin-top: 5px;
    }
    
  }


  .del {
      
      position: absolute;
      right: 5%;
      bottom: 20px;
      display: none;
  }

}
.content:hover .del{
          display: block;
          color: red;
      }
      
  
  

  
}
}
</style>
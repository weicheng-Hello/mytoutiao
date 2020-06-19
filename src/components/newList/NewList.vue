<!--  -->
<template>
<div class='newList'>
    <div class="newList-refresh" @click.stop="clickRefresh">
        点击刷新
    </div>
    <div class="newList-content" v-for="(news,index) in newsList" :key="index">
        <div class="newList-img" v-if="news.img">
            <img :src="news.img" alt="" >
        </div>
        <div class="right">
            <div class="title">{{news.title}}</div>
            <div class="nickName">
            <div class="userImg">
                <img :src="news.user.avator" alt="">
            </div>
            <span>{{news.user.nickname}}</span>
            </div>
            <div calss="data">{{news.created_at}}</div>
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
    lastid:0, 
    newsList:[],//文章列表
    page:0,//当前请求的页码
    number:20//请求的条数
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    clickRefresh:function(){
        
        this.$axios.post("/getArticles",{
            lastid:this.lastid
        }).then(res => {
            //将最新的数据拼接在现有的数据上面
            console.log(res.articles)
            // this.newsList = ((this.newsList).concat(res.articles || []))
            // if(this.newsList.length > 0){
            //     //获取最后一条文章或头条的  id
            //     this.lastid = this.newsList[0].nid
            // }
        })
    },
    refresh:function(){
        this.$axios.post("/getArticles",{
            lastid:this.lastid,
            page:++this.page,
            number:this.number
        }).then(res => {
            
            console.log(res.articles)
            this.newsList = (this.newsList).concat(res.articles || [])
            if(res.counts/this.number <= res.current_page){
                this.$message({
                    msg:"已经到最后一页了"
                })
            }
        })
    }

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    let _this = this
    //添加页面的滚动事件
    window.addEventListener("scroll",() =>{
        //1.获取整个屏幕可以滚动的高度
        let htmlElement = document.documentElement
        let scrollHeight = htmlElement.scrollHeight
        //2.获取当前滚动的高度
        let scrollTop =htmlElement.scrollTop
        //3.获取可视区域的高度
        let clientHeight = htmlElement.clientHeight
        //scrollHeight-scrollTop <=clientHeight
        console.log(scrollHeight-scrollTop <=clientHeight ? "触底了":"继续")
        scrollHeight-scrollTop <=clientHeight ? _this.refresh():""
    })
    this.refresh()
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
    .newList {
        margin-top: 10px;
        color:#7B7B7B;
        cursor: pointer;
  .newList-refresh {
      width:100%;
      height: 30px;
      border: 1px solid blue;
      text-align: center;
      line-height: 30px;
       
       color: blue;
       border-radius: 5px;
  }

  .newList-content {
      margin-top: 10px;
      display: flex;
      padding-bottom: 5px;
      border-bottom: 1px solid #ddd;
    .newList-img {
        margin-right: 20px;
      img {
          width: 150px;
          height: 100px;
      }
    }

    .right {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        // align-items: center;
      .nickName {
          display: flex;
          align-items: center;
          .userImg {
              img{
                  width:30px;
                  height: 30px;
                  border-radius: 50%;
                  margin-right: 10px;
              }
      }
      span{

      }
      }

       

      }
    }
  }

</style>
<!--  -->
<template>
<div>
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
    
</div>
    <div class="changeImg" v-show="picture">
        <div class="changeInput">
            <input type="file" multiple="multiple" accept="image/*" @change="changePictuer">
        </div>
        <div class="changImg-list">+</div>
        <div class="close" @click="closeImg" >x</div>
        <div class="img-item" v-for="(img,index) in uploadImgs" :key="img">
            <img :src="img" alt="" >
            <div class="del" @click="delImg(index)">x</div>
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
        {id:"toutiao",text:"发微头条"},
        {id:"wenzhang",text:"写文章"}
    ],
    tabId:"toutiao",
    url:"",
    picture:false,
    uploadImgs:[]
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
        this.picture = true
    },
    closeImg:function(){
        this.picture = false
    },
    changePictuer:function(e){
        console.log(e)
        Array.from(e.target.files).forEach(f => {
            console.log(f)
            let params = new FormData();
            params.append("file",f)
            this.$axios.post("/aliossUpload",params).then(res => {
                // console.log(res.data.url)
                this.uploadImgs.push(res.url)
            })
        })
    },
    delImg:function(index){
        this.uploadImgs.splice(index,1)
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
        cursor: pointer;
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
 
}
 .changeImg {
      width: 340px;
      border: 1px solid #ddd;
      padding-top: 2m0px;
      display: flex;
      position: relative;
      flex-wrap: wrap;
      .changeInput{
          position: absolute;
          top: 50px;
          width: 100px;
          height: 100px;
          opacity: 0;
      }
  .changImg-list {
      width: 100px;
      height: 100px;
      border:1px dashed #ddd;
      font-size: 50px;
      text-align: center;
      line-height: 100px;
      color: #ddd;
      margin: 5px;
      
  }
  .close{
      position: absolute;
      top: -8px;
      right:2px;
      cursor: pointer;
  }
    .img-item{
            position: relative;
            margin: 5px;
            width: 100px;
            height: 100px;
        img {
            
            width: 100px;
            height: 100px;
        }
        .del{
            display: none;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            }
            
}
    .img-item:hover {
                background-color: #7f7f7f;
                opacity: 0.8;
                transition: all 0.5s;
                .del {
                  color: white;
                  display: block;
                }
              }
}
</style>
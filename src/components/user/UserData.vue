<!--  -->
<template>
  <div class="userData">
    <div class="userData-header">
      <h2>头条号</h2>
    </div>
    <div class="cont">
      <div class="content">
        <div
          :class="['content-title',{active:item.id == navTab}]"
          v-for="(item,index) in navs"
          @click.stop="navTabClick(item.id)"
          :key="index"
        >{{item.title}}</div>
      </div>
      <div class="nameCont" v-if="navTab == 'msg'">
        <div class="name">
          <div class="nameDiv">名称</div>
          <input type="text" v-model="updataName" />
        </div>
        <div class="nameImg">
          <div class="poto">头像</div>
          <img :src="nameImg" alt />
          <input type="file" multiple="multiple" accept="image/*" @change="changePictuer" />
        </div>
        <div class="updata" @click.stop="updataClick">更新资料</div>
      </div>
    </div>
    <div class="pwd" v-show="navTab=='pwd'">
      <div class="oldPwd">
        <div class="nameDiv">旧密码</div>
        <input type="password" v-model="oldPwd" />
      </div>
      <div class="nPwd">
        <div class="nameDiv">新密码</div>
        <input type="password" v-model="newPwd" />
      </div>
      <div class="updata" @click.stop="updataPwd">更新资料</div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// import { UPDATE_USER_INFO } from "../../vuex/mutationsType";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      navs: [
        { id: "msg", title: "账号信息" },
        { id: "pwd", title: "密码管理" }
      ],
      navTab: "pwd",
      updataName: this.$store.state.userInfo.nickname, //用户名
      nameImg: this.$store.state.userInfo.avator, //头像
      oldPwd: "", //旧密码
      newPwd: ""
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    navTabClick: function(id) {
      this.navTab = id;
      console.log(id);
    },
    updataClick: function() {
      if (!this.updataName) {
        this.$message({
          msg: "输入昵称不能为空"
        });
        return false;
      }
      this.$axios
        .post("/updateUserInfo", {
          nickname: this.updataName,
          avator: this.nameImg
        })
        .then(res => {
          this.$message({
            msg: res.msg
          });
        });
    },
    //上传图片
    changePictuer: function(e) {
      console.log(e);
      Array.from(e.target.files).forEach(f => {
        console.log(f);
        let params = new FormData();
        params.append("file", f);
        this.$axios.post("/aliossUpload", params).then(res => {
          // console.log(res.data.url)
          this.nameImg = res.url;
        });
      });
    },
    //修改密码
    updataPwd: function() {
      if (!this.oldPwd || !this.newPwd) {
            this.$message({
              msg:"密码不能为空"
            });
            return false
          }
      this.$axios
        .post("/updatePassword", {
          currentPassword: this.oldPwd,
          updatePassword: this.newPwd
        })
        .then(res => {
          this.$message({
            msg:res.msg
          })
        }).then(err => {
          console.log(err)
        });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less" scoped>
.userData {
  width: 100%;
  .userData-header {
    width: 100%;
    height: 50px;
    line-height: 50px;
    color: var(--themeColor);
    padding-left: 10%;
    margin-bottom: 10px;
    border-bottom: 1px solid #ddd;
    h2 {
    }
  }
  .cont {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 10px;
    .content {
      display: flex;
      border-bottom: 1px solid #ddd;
      margin-bottom: 10px;
      .content-title {
        margin-left: 10%;
        height: 40px;
        line-height: 40px;
      }
      .active {
        color: #409eff;
        border-bottom: 2px solid var(--themeColor);
      }
    }
    .nameCont {
      .name {
        //   padding-left:30px;
        height: 40px;
        display: flex;
        margin-bottom: 10px;
        .nameDiv {
          flex: 0.5;
          color: #ddd;
          height: 40px;
          line-height: 40px;
          text-align: right;
          padding-right: 10px;
        }

        input {
          flex: 9.5;
          width: 100%;
          padding-right: 10px;
          border-radius: 5px;
          border: 1px solid #ddd;
        }
      }

      .nameImg {
        //   height: 40px;
        display: flex;
        margin-bottom: 10px;
        padding-left: 2%;
        position: relative;
        .poto {
          color: #ddd;
          margin-right: 10px;
        }
        img {
          width: 200px;
          height: 200px;
          border: 1px dashed #ddd;
        }
        input {
          position: absolute;
          left: 6%;
          width: 200px;
          height: 200px;
          opacity: 0;
        }
      }
    }
  }
  .pwd {
    width: 1200px;
    margin: 0 auto;
    .oldPwd {
      display: flex;

      .nameDiv {
        flex: 0.5;
        width: 40px;
        line-height: 40px;
        color: #7b7b7b;
      }

      input {
        width: 40px;
        line-height: 40px;
        flex: 9.5;
      }
    }

    .nPwd {
      display: flex;
      margin-top: 10px;
      .nameDiv {
        flex: 0.5;
        color: #7b7b7b;
        width: 40px;
        line-height: 40px;
      }

      input {
        flex: 9.5;
        width: 40px;
        line-height: 40px;
      }
    }
  }
  .updata {
    margin-left: 100px;
    width: 100px;
    height: 40px;
    line-height: 40px;
    background-color: #409eff;
    text-align: center;
    color: white;
    border-radius: 5px;
    margin-top: 10px;
  }
}
</style>
<template>
  <div>
    <div class="login"></div>
    <div id="main">
      <form id="loginForm">
        <div style="padding: 30px 0px 10px; position: relative;">
          <span class="u_logo"></span>
          <input class="ipt" type="text"  v-model="username"  placeholder="请输入用户名或邮箱"/>
        </div>
        <div style="position: relative;">
          <span class="p_logo"></span>
          <input class="ipt" type="password" v-model="password"  placeholder="请输入密码"/>
        </div>
        <!-- padding:上 右 下 左内边距 -->
        <div style="padding: 10px 0px 1px 35px; position: relative;;">
          <span style="float: left; margin:1px 4px 0 0;" class="common-checkbox" v-bind:class="flag ? 'common-checkbox-unselect':'common-checkbox-select'"  @click='switchChange'></span> <!--v-show='flag==true' -->
          <span style="float: left; margin:2px 0 0 2px;font-size:13px;">记住用户凭证 </span>
          <span style="float: left; margin:4px 0 0 2px;" id="tsy"></span>
        </div>
      </form>
      <div class="login_bottom">
        <div>
          <span style="float: left;">
            <a href=".#/test1"  title="客官您忘记密码吗?">忘记密码?</a>
          </span>
          <span style="float: right;">
            <a title="点击进入注册页面">注册</a>
            <a type="botton" @click="loginForm()" title="登录">登录</a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      flag: true,
      username: null,
      password: null
    }
  },
  methods: {
    loginForm () { /* 页面直接跳转传参 */
      const self = this
      if (self.username === null || self.password === null) {
        return
      }
      // var params = new URLSearchParams()
      // params.append('username', this.username)
      // params.append('password', this.password)
      // params.append('xh', '10010')
      // let postData = {
      //   'username': this.username,
      //   'password': this.password,
      //   'xh': '10010'
      // }
      // this.$axios.post('/domain/ceshi', postData)
      //   .then(function (response) {
      //     console.log(response)
      //   })
      //   .catch(function (error) {
      //     console.log(error)
      //   })
      self.$axios.get('/domain/ceshi', {params: {
        'username': this.username,
        'password': this.password,
        'xh': '10010'
      }
      }).then(function (res) {
        let flag = res.data.flag
        if (!flag) {
          return
        }
        self.$router.push({
          path: '/test1',
          query: {
            username: self.username,
            password: self.password
          }
        })
      }).catch(function () {})
      // this.$axios({
      //   method: 'post',
      //   url: '/domain/ceshi',
      //   data: params,
      //   transformRequest: [function (data) {
      //     console.log(data)
      //   }],
      //   headers: {
      //     'Content-Type': 'application/x-www-form-urlencoded'
      //   }
      // })
      // this.$router.push({
      //   path: '/test1',
      //   query: {
      //     username: this.username,
      //     password: this.password
      //   }
      // })
    },
    switchChange () {
      this.flag = !this.flag
      console.log(this.flag)
    }
  }
}
</script>

<style>
  .login{
    margin: auto;
    width: 400px;
    height:246px;
    border-radius: 5px;
    background: url("./../../assets/index.gif") no-repeat 0 0;
    background-size: cover;
  }
  /*主体部分*/
  #main{
    background: rgb(255, 255, 255);
    margin: -20px auto auto;
    border: 1px solid rgb(231, 231, 231);
    border-image: none;
    width: 400px;
    height: 235px;
    text-align: center;
  }
  .ipt{
    border: 1px solid #d3d3d3;
    padding: 10px 10px 10px 35px;
    width: 290px;
    border-radius: 4px;
  }
  .ipt:focus{
    border-color: #66afe9;
    outline: 0;
  }
  /*用户名邮箱小图标*/
  .u_logo{
    background: url("./../../assets/login/man.png") no-repeat;
    padding: 10px 10px;
    position: absolute;
    top: 42px;
    left: 40px;

  }
  /*密码小图标*/
  .p_logo{
    background:url('./../../assets/login/lock.png') no-repeat;
    padding: 10px 10px;
    position: absolute;
    top: 10px;
    left: 40px;
  }
  .login_bottom{
	  height: 40px;
    line-height: 50px; 
    margin-top: 35px; 
    border-top-color: #E7E7E7; 
    border-top-width: 1px; 
    border-top-style: solid;
}
.login_bottom div{
	  margin: 0px 35px 20px 45px;
}
 a{
   cursor: pointer;
   text-decoration: wavy;
 }
</style>

<template>
  <div>
    <div class="login"></div>
    <div id="main">
      <form id="loginForm">
        <div style="padding: 30px 0px 10px; position: relative;">
          <span class="u_logo"></span>
          <input class="ipt" type="text"  id="username"  placeholder="请输入用户名或邮箱"/>
        </div>
        <div style="position: relative;">
          <span class="p_logo"></span>
          <input class="ipt" type="password" id="password"  placeholder="请输入密码"/>
        </div>
        <!-- padding:上 右 下 左内边距 -->
        <div style="padding: 4px 0px 1px 35px; position: relative;;">
          <span style="float: left; margin:1px 4px 0 0;" class="common-checkbox" ></span>
          <span style="float: left; margin:2px 0 0 2px;font-size:13px;">记住用户凭证 </span>
          <span style="float: left; margin:4px 0 0 2px;" id="tsy"></span>
        </div>
      </form>
      <div id="login_bottom">
        <div>
				<span style="float: left;">
					 <a class="forgetpass"  href=".#/test1"  title="客官您忘记密码吗?">忘记密码?</a>
				</span>
          <span style="float: right;">
					<a class="register"  href="#" title="点击进入注册页面">注册</a>
					<a class="botton_normal"  type="botton" href="#" title="登录">登录</a>
				</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style>
  .login{
    margin: auto;
    width: 400px;
    height:246px;
    border-radius: 5px;
    background: url("./../assets/index.gif") no-repeat 0 0;
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
    background: url("./../assets/login/man.png") no-repeat;
    padding: 10px 10px;
    position: absolute;
    top: 40px;
    left: 40px;

  }
  /*密码小图标*/
  .p_logo{
    background:url('./../assets/login/lock.png') no-repeat;
    padding: 10px 10px;
    position: absolute;
    top: 10px;
    left: 40px;
  }
</style>

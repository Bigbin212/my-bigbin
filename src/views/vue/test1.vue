<template>
  <div>
    <div style="height: 35px;">
      <div>上一页传参:{{username}}</div>
    </div>

    <div style="height: 35px;">
      <span v-bind:title="title_message">
        鼠标悬停几秒钟查看此处动态绑定的提示信息！
      </span>
    </div>

    <div style="height: 30px;">
      <p v-if="seen">
        {{ message }}
      </p>
    </div>

    <div class="center">
      <ul>
        <li v-for="todo in todos" v-bind:title="todo.text" @click="li_click(todo.text)"><!-- vue的遍历方法1 -->
          {{ todo.text }}
        </li>
      </ul>
    </div>

    <div class="class_v_model">
        <input class='input-text' v-model="input_text"> <!-- 文本输入框 -->
        <p style="overflow-x: auto;">{{ input_text }}</p>   <!-- 实际显示的值 -->
    </div>
    <div style="margin-top:2px;margin-bottom:3px;">
     <input type="botton" class="btn" v-on:click="showMessage()" value="点击试试" readonly/>
     <input type="botton" class="btn" v-on:click="backSr()" value="返回上页" readonly/>
    </div>
    <div>
      <input type="text" class="input-text" v-on:keyup.enter="consoletext" v-model="item_"/>
      <ul>
        <li v-for="(item, i) in items" @click="remove(i)">{{ item }}</li>
      </ul>
    </div>

  </div>
</template>
<script>
  import { formatDate } from './../../api/dateUtil.js' // 引用js
  export default{
    data () {
      return {
        title_message: '页面加载于 ' + formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss'),
        seen: true,
        message: '现在你看到我了!',
        todos: [
          { text: '1、学习JavaScript' },
          { text: '2、学习Vue' },
          { text: '3、测试下项目' }
        ],
        input_text: '整个项目',
        item_: '',
        items: [],
        username: ''
      }
    },
    created () {
      this.username = this.$route.params.username
      console.log(this.username)
      // this.showMessage()
    },
    mounted: {},
    watch: {},
    computed: {},
    methods: {
      li_click (text) {
        alert(text)
      },
      consoletext () {
        let val = this.item_
        this.items.push(val)
        this.item_ = ''
      },
      remove (i) {
        this.items.splice(i, 1)
      },
      showMessage () {
        this.$axios.get('static/resources/test.json').then(response => {
          // console.log(response.data)
          alert(JSON.stringify(response.data))
        },
        response => {
          console.log('数据加载失败')
        })
      },
      backSr () {
        this.$router.go(-1)
      }
    }
  }
</script>
<style>
  .center{
    width:100%;
  }
  .center ul li{
    height:30px;
    line-height:30px;
    list-style-type:none;
    /*border-bottom: 1px solid #36AAE0;*/
    color:#000000;
    /* 文字过长...显示 */
    text-overflow: ellipsis; /* for IE */
    -moz-text-overflow: ellipsis; /* for Firefox,mozilla */
    overflow: hidden;
    white-space: nowrap;
  }
  .btn{
    height: 28px;
    letter-spacing: 2px;
    margin: 0 5px;
    position: relative;
    top:0;
    width: 75px;
    color:#fff;
    background-color: #000000;
    cursor: pointer;
    padding-left: 20px;
	  border: 0px;
	  cursor:pointer;
	  font-size:14px;
	  font-family: "Microsoft Yahei", 微软雅黑, Arial;
}
.btn:hover{
    background-color: #444444;
    font-weight: bold;
}
  .class_v_model{
    width: 100%;
  }
</style>

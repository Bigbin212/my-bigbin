<template>
  <div>
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
        <li v-for="todo in todos" v-bind:title="todo.text" @click="li_click(todo.text)"> <!-- vue的遍历方法1 -->
          {{ todo.text }}
        </li>
      </ul>
    </div>

    <div class="class_v_model">
        <input class='input-text' v-model="input_text"> <!-- 文本输入框 -->
        <p>{{ input_text }}</p>   <!-- 实际显示的值 -->
    </div>

  </div>
</template>
<script>
  export default{
    data () {
      return {
        title_message: '页面加载于 ' + new Date(),
        seen: true,
        message: '现在你看到我了!',
        todos: [
          { text: '1、学习JavaScript' },
          { text: '2、学习Vue' },
          { text: '3、整个牛逼项目' }
        ],
        input_text: '整个项目'
      }
    },
    methods: {
      li_click (text) {
        alert(text)
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

  .class_v_model{
    width: 100%;
  }
</style>

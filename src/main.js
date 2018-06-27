// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import axios from 'axios'
// import router from './router'
Vue.use(VueRouter)
// Vue.use(require('vue-moment')) // 全局引用插件
Vue.config.productionTip = false
Vue.prototype.$axios = axios
import Login from './views/vue/login.vue'
import Test1 from './views/vue/test1.vue'

const routes = [
  {
    path: '/',
    component: Login
  },
  {
    name: 'test1',
    path: '/test1', // 'test1/:username'
    component: Test1
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
const app = new Vue({
  router,
  template: '<App/>',
  components: { App }
})
app.$mount('#app')


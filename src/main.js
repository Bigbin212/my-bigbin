// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
// import router from './router'
Vue.use(VueRouter)
Vue.config.productionTip = false

import Login from './views/login'
import Test1 from './views/test1'

const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/test1',
    component: Test1
  }
]
const router = new VueRouter({
  routes
})
const app = new Vue({
  router,
  template: '<App/>',
  components: { App }
})
app.$mount('#app')


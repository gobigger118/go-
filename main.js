import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 将vuex模块导入
import store from './store'

// 引入商铺的 模拟数据接口
import './mock/mockA.js'


Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

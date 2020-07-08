import Vue from 'vue'
import App from './App.vue'

// 导入组件库
import colorPicker from './../packages/index'
console.log(colorPicker)
// 注册组件库
Vue.use(colorPicker)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
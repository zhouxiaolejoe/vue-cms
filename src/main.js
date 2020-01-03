import Vue from 'vue'

import router from './router.js'

import { Header } from 'mint-ui'
//mint-ui目前须要导入style.css
import 'mint-ui/lib/style.css'

Vue.component(Header.name,Header)


//导入 Mui样式
import './lib/mui/css/mui.min.css'

import app from './App.vue'
var vm = new Vue({
    el: '#app',
    render: h => h(app),//render 会替换app中的所有元素
    router//将路由挂在到Vue
})
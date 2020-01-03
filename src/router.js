import Vue from 'vue'
//1,导入vue-router
import VueRouter from 'vue-router'

//2,手动安装VueRouter
Vue.use(VueRouter)

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'



//3,创建路由对象 
var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomeContainer },
        { path: '/member', component: MemberContainer },
        { path: '/shopcar', component: ShopcarContainer },
        { path: '/search', component: SearchContainer },
    ],
    linkActiveClass: 'mui-active'//覆盖默认路由高亮显示 默认的叫 router-link-active
})

export default router
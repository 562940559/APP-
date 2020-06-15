import Vue from 'vue';
import Router from 'vue-router';
import store from '../store/index';
Vue.use(Router);

// path 路由地址
// name 路由名称
// component 引入的组件路径
// keepAlive 在vue.app中所做的是否缓存判读
// requireAuth 需要登录才能访问的页面
// showTop 该路由下是否显示top
// showBack top中是否显示回退按钮
// title top中的页面标题
// active 对应tabbar中的位置
// showSearch 是否显示Search按钮 true不显示 false显示

export const router = [
  {
    path: '/',
    name: '首页',
    component: () => import('../views/index/index.vue')
  }, {
    path: '/login',
    name: '登陆页',
    component: () => import('../views/login.vue'),
  }];

// 页面刷新时，重新赋值token
if (localStorage.getItem('token')) {
  store.commit('set_token', localStorage.getItem('token'))
}

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: router
})
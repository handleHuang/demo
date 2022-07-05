//引入Vue
import Vue from 'vue';
//引入App
import App from './App.vue';
//引入VueRouter
import VueRouter from 'vue-router';
//引入路由器
import router from './router';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//关闭Vue的生产提示
Vue.config.productionTip = false;
//应用插件
Vue.use(VueRouter);
Vue.use(ElementUI);

//创建vm
new Vue({
  el: '#app',
  render: h => h(App),
  router: router
});

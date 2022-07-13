import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js';
import store from './store/store.js';
import LayoutVue from "./layout/LayoutVue.vue";
import homePage from "./pages/homePage.vue";
Vue.config.productionTip = false
//레이아웃
Vue.component('LayoutVue', LayoutVue);
//페이지
Vue.component('homePage', homePage)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

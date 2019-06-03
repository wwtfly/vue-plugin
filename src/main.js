import Vue from 'vue'
// import wrap from '@vue/web-component-wrapper'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
// const CustomElement=wrap(Vue,infopad)
// window.customElements.define('my-infopad',CustomElement)
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

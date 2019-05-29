import Vue from 'vue'
// import wrap from '@vue/web-component-wrapper'
import App from './App.vue'
import infopad from './plugin/infopad'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// const CustomElement=wrap(Vue,infopad)
// window.customElements.define('my-infopad',CustomElement)
Vue.use(ElementUI);
Vue.use(infopad);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

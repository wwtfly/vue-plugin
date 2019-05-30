import infopad from './infopad.vue'
const infopadplug={
    install:function(Vue){
        Vue.component("infopad",infopad)
    }
}
// global 情况下自动安装
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(infopadplug);
}
// 导出模块
export default infopadplug

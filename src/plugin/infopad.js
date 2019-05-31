import InfoPad from './infopad.vue'

const infopadplug={
    install:function(Vue){
        Vue.component('infopad',InfoPad)
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(infopadplug)
}
// 导出模块
export default infopadplug

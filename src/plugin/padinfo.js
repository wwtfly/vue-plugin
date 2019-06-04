import padinfo from './PadInfo.vue'

const padinfoplugin={
    install:function(Vue){
        Vue.component(padinfo.name,padinfo)
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(padinfoplugin)
}
// 导出模块
export default padinfoplugin

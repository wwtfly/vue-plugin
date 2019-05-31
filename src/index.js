import InfoPad from './plugin/infopad.js'
const components=[InfoPad]
const install=function(Vue,opts={}){

    components.map(component=>{
        Vue.component(component.name,component)
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export default {
    install,
    InfoPad 
}
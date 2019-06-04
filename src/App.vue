<template>
  <div id="app">
    <PadInfo :title_message="title_message" :message="message"/>
    <ContainerInfo/>
  </div>
</template>

<script>
import PadInfo from './plugin/PadInfo.vue'
import ContainerInfo from './plugin/ContainerInfo.vue'

export default {
  name:'app',
  components:{
    PadInfo,
    ContainerInfo
  },
  data (){
    return{
      title_message:"欢迎使用,这是新开发的插件",
      message:{
            新手指南:{
                  百度:"http://www.baidu.com",
                  淘宝:"http://www.taobao.com",
                  京东:"http://www.jd.com"
            },
            常见问题:{
                  百:"http://www.baidu.com",
                  淘:"http://www.taobao.com",
                  京:"http://www.jd.com"
            },
            问题提单:{
                  百:"http://www.baidu.com",
                  淘:"http://www.taobao.com",
                  京:"http://www.jd.com"
            }
      }
    }
  }
}
</script>
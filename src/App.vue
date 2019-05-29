<template>
  <div id="app">
    <infopad :title_message="title_message" :li_message="li_message"></infopad></div>
</template>
<script>
export default {
  data(){
    return{
      title_message:"欢迎使用,这是新开发的插件",
      li_message:{
            百度:"http://www.baidu.com",
            淘宝:"http://www.taobao.com",
            京东:"http://www.jd.com"
      }
    }
  }
}
</script>
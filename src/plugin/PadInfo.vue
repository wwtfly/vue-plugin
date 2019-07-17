<template>
  <el-card body-style="padding:10px">
    <div id="my-pad">
      <div id="my-info">
        <span>通知</span>
        <el-carousel
          indicator-position="none"
          height="30px"
          :interval="5000"
          arrow="never"
        >
          <!-- <el-carousel-item v-for="item in items" :key="item"> -->
          <el-carousel-item v-for="(item, index) in items" :key="index">
            <span>{{ item }}</span>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div id="my-content">
        <div
          class="pad"
          v-for="(value, key, index) in this.message"
          :key="index"
        >
          <h3>{{ key }}</h3>
          <ul>
            <li v-for="(value, key, i) in value" :key="i">
              <el-tooltip
                popper-class="test"
                effect="dark"
                placement="top-start"
                visible-arrow
              >
                <span slot="content">{{ key }}</span>
                <a :href="value">{{ key }}</a>
              </el-tooltip>
            </li>
          </ul>
        </div>
      </div>
      <!-- <input v-model="message"/> -->
    </div>
  </el-card>
</template>

<script>
export default {
    name:'PadInfo',
    props:{ 
            title_message:String,
            message:Object,
    },
    data (){
        return {
            items:this.title_message.split(','),
            // lis:this.li_message,
        }
    }
}
</script>

<style>
body,
html {
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, SimSun, sans-serif;
}
#my-pad {
  width: auto;
  height: 160px;
  font-size: 14px;
  background: transparent;

  /* background-color: #f9fafc; */
}
#my-info {
  position: relative;
  height: 40px;
}
#my-info span {
  position: relative;
  float: left;
  line-height: 40px;
  margin-left: 10px;
  color: #f54747;
  font-weight: 500;
}
#my-content {
  position: relative;
  /* padding-left: 10px; */
}
.pad {
  position: relative;
  float: left;
  width: 200px;
  /* margin-right: 5px; */
  padding: 0px 10px 10px 10px;
  height: 100px;
}
.pad span {
  text-align: center;
  display: block;
  width: 200px;
  color: #5e6d82;
}
.pad h3 {
  margin-top: 5px;
}
.pad ul {
  width: 200px;
  border-right: solid 1px #dcdfe6;
  margin: 0px;
  padding: 0px;
}
.pad ul li {
  display: inline-block;
  width: 80px;
  margin-right: 10px;
  list-style: none;
  /* 强制不换行 */
  white-space: nowrap;
  /* 自动隐藏 */
  overflow: hidden;
  /* 文字隐藏后自动添加省略号 */
  text-overflow: ellipsis;
  color: #409eff;

  /* padding: 0px 20px; */
}
.pad ul li a {
  text-decoration: none;
  color: #409eff;
}
/* #my-info div{
    position: relative;
    float: left;
    height: 40px;
} */
.test {
  background: #f3f5f3 !important;
  box-shadow: 3px 2px 2px 1px #e2e0e0 !important;
  border-radius: 1px !important;
  color: #5e6d82 !important;
}
/* .el-tooltip__popper[x-placement^='top'] {
  background: #1ab394;
  color: #fff;
}
.el-tooltip__popper {
  position: absolute;
  border-radius: 4px;
  padding: 10px;
  z-index: 2000;
  font-size: 12px;
  line-height: 1.2;
  min-width: 10px;
  word-wrap: break-word;
} */
</style>

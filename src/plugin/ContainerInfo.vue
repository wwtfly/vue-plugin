<template>
  <div id="my-container">
    <el-collapse accordion>
      <el-collapse-item v-for="(container, index) in containers" :key="index">
        <template>
          <span slot="title">
            {{ container }}
          </span>
        </template>
        <el-button type="text" @click="getList()">登录后台</el-button>
        <el-divider direction="vertical"></el-divider>
        <el-button type="text" @click="visible = true">销毁容器</el-button>
        <el-dialog
          title="提示"
          :visible.sync="visible"
          width="30%"
          append-to-body
          :close-on-click-modal="false"
          :close-on-press-escape="false"
          :show-close="false"
        >
          <span>容器销毁之后未提交保存的数据将丢失！</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="visible = false">取 消</el-button>
            <el-button @click="onClose()">确 定</el-button>
          </span>
        </el-dialog>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
import axios from 'axios'
export default {
    name:"ContainerInfo",
    props:{
        containers:Array
        },
    data(){
        return{
            visible:false
        }
    },
    methods:{
        onClose(){
        this.visible=false;
        },
        getList(){
            this.$msgbox({
                title:"Bitcoin Price Index",
                showCancelButton:true,
                confirmButtonText:'确定',
                cancelButtonText:'取消',
                beforeClose:()=>{
            this.axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then((response)=>{
                this.info=response.data.bpi;
            })
            .catch(error => window.console.log(error))
             } 
            })
        }
    },
    mounted(){
        axios
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then()
    }
}
</script>
<style>
#my-container {
  margin-top: 10px;
  position: relative;
  float: left;
  width: 160px;
}
#my-container .el-collapse-item__content {
  height: 40px !important;
  padding-bottom: 0px !important;
  background: rgb(235, 246, 252);
}
</style>

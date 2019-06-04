<template>
    <div id='my-container'>
        <el-collapse>
            <el-collapse-item title="我的工程"> 
                <div class="con">
                    <ul>
                        <li><a href="">登录后台</a></li>
                        <el-divider direction="vertical"></el-divider>
                        <li>
                            <el-button type="text" @click="visible = true">销毁容器</el-button>
                            <el-dialog
                                title="提示"
                                :visible.sync="visible"
                                width="30%">
                                <span>容器销毁之后未提交保存的数据将丢失！</span>
                                <div slot="footer" class="dialog-footer">
                                    <el-button @click="visible=false">取 消</el-button>
                                    <el-button @click="visible=false">确 定</el-button>
                                </div>
                            </el-dialog>
                        </li>
                    </ul>
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>
<script>
export default {
    name:"ContainerInfo",
    data(){
        return{
            visible:false
        }
    }
}
</script>
<style>
    #my-container{
        position: relative;;
        float:left;
        width:140px;
    }
    #my-container .con ul{
        /* border-right: solid 1px #dcdfe6; */
        margin: 0px;
        padding:0px
    }
    #my-container .con ul li{
        display:inline;
    }
    #my-container .con ul li a{
        text-decoration: none;
        margin-right: 5px;
        color:gray
    }
</style>

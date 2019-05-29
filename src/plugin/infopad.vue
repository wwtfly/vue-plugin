<template>
    <div id="my-pad">
        <div id="my-info">
            <span>通知</span>
                <el-carousel 
                indicator-position="none"
                height="30px"
                :interval=2000
                arrow=never
                >
                    <!-- <el-carousel-item v-for="item in items" :key="item"> -->
                    <el-carousel-item v-for="(item,index) in items" :key="index">
                        <span>{{ item }}</span>
                    </el-carousel-item>
                </el-carousel>
        </div>
        <div id="my-content">
            <ul>
                <li v-for="(value,key,index,) in lis" :key=index><a :href=value>{{key}}</a></li>
            </ul>
        </div>
        <!-- <input v-model="message"/> -->
    </div>
</template>
<script>
export default {
    props:{ 
            title_message:String,
            li_message:Object,
    },
    data: function(){
        return {
            items:this.title_message.split(","),
            lis:this.li_message,
        }
    }
}
</script>

<style scoped>
#my-pad {
    width: 1000px;
    height: 500px;
    background-color: #f9fafc;
}
#my-info {
    position: relative;
    background: #99a9bf;
    height: 40px;
}
#my-info span{
    position: relative;
    float: left;
    line-height: 40px;
    margin-left:10px;
    color:red;
}
/* #my-info div{
    position: relative;
    float: left;
    height: 40px;
} */
</style>

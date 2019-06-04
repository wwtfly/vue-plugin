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
            <div class="pad" v-for="(value,key,index) in this.message" :key=index>
                <span>{{key}}</span>
            <ul>
                <li v-for="(value,key,i) in value" :key=i><a :href=value>{{key}}</a></li>
            </ul>
            </div>
        </div>
        <!-- <input v-model="message"/> -->
    </div>
</template>

<script>
export default {
    name:'InfoPad',
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

<style scoped>
#my-pad {
    width: auto;
    height: 120px;
    font-size: 15px;

    /* background-color: #f9fafc; */
}
#my-info {
    position: relative;
    height: 40px;
}
#my-info span{
    position: relative;
    float: left;
    line-height: 40px;
    margin-left:10px;
    color:red;
}
#my-content{
    position: relative;
    padding-left: 10px;
}
.pad{
    position: relative;
    float: left;
    width:200px;
    margin-right:5px;
    height:100px;
}
.pad span{
    text-align: center;
    display: block;
    width:200px;
}
.pad ul{
    width:200px;
    border-right: solid 1px gray;
    margin: 0px;
    padding:0px;
}
.pad ul li{
    display: inline;
    margin-right: 10px;
    /* padding: 0px 20px; */
}
.pad ul li a {
    text-decoration: none;
}
/* #my-info div{
    position: relative;
    float: left;
    height: 40px;
} */
</style>

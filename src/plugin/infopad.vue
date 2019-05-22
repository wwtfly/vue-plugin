<template>
    <div id="my-pad">
        <div id="my-info">
            <h1>{{message}}</h1>
        </div>
        <div id="my-content">
            <ul>
                <li><a href="">链接</a></li>
                <li><a href="">链接</a></li>
                <li><a href="">链接</a></li>
                <li><a href="">链接</a></li>
                <li><a href="">链接</a></li>
            </ul>
        </div>
        <input v-model="message"/>
    </div>
</template>
<script>
export default {
    // props:{myname:String}
    data: function(){
        return {
            message: "key"
        }
    }
}
</script>

<style scoped>
#my-pad {
    width: 100px;
    height: 500px;
    background: green;
}
#my-info {
    background: red;
}
</style>

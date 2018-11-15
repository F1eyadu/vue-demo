<template>
    <div>{{text}}</div>
</template>
<script>
export default {
    // props:['name'],
    data(){
        return{
            text:''
        }
    },
    mounted(){
        let name =  this.$route.params.name
        this.text = '这是详情' + name
    }
}
</script>


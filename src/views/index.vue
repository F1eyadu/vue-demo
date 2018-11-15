<template>
    <div>
        <div>hello world</div>
        <div>{{count}}</div>
        <p>{{text}}</p>
        <p>{{texts}}</p> 
        <div>{{fullName}}</div>
        <div>{{textPlugin}}</div>
        <div class="container">
            <div v-for="(item, index) in list" :key="index">
                <router-link to="'/details/' + item.name + '/data/12321'">{{item.name}}</router-link>
            </div>
        </div>
        <router-link to = '/other'>子组件的入口</router-link>
        <router-link to = '/others' exact>子组件的入口2</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions} from 'vuex'
export default {
    data(){
        return {
            list: [
                {id:1, name: 'xixi'},
                {id:2, name: 'haha'},
                {id:3, name: 'hehe'},
                {id:4, name: 'yiyi'},
                {id:5, name: 'erer'}
            ]
        }
    },
    computed:{
        ...mapState({
            count:(state) => state.count,
            text: (state) => state.a.text,
            texts: (state) => state.b.text
        }),
        ...mapGetters({
            'fullName': 'fullName',
            'textPlugin': 'a/textPlugin'
        })
    },
    mounted(){
        // let i = 0;
        // setInterval(()=>{
        //     this.addCount(i++)
        // },1000)
        this['b/setText']('lalla')
        this['a/setText']('lalla')
        // this.updatedAsync({
        //     num: 56,
        //     time: 2000
        // })
    },
    methods:{
        ...mapMutations(['addCount', 'b/setText','a/setText']),
        ...mapActions(['updatedAsync'])
    }
}
</script>
<style scoped>
    .container{
        width: 350rpx;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }
    .container div {
        font-size: 16px;
        color: #333;
        text-align: center;
        width: 50%;
        line-height: 55px;
    }
    .container div a:link{
        color: #333;
        text-decoration: none;
    }
    .container div a:visited{
        color: #333;
        text-decoration: none;
    }
    .container div a:hover{
        color: #333;
        text-decoration: none;
    }
    .container div a:active{
        color: #333;
        text-decoration: none;
    }
</style>


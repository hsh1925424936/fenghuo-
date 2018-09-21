<template>
    <div class="home">
        <h1>这是home组件中的{{getCount}}</h1>
        <Header @msgFun="func" :messages="message"></Header>
    </div>
</template>
<script>
    import bus from '../../bus.js'
    import Header from  '../header';
    import {mapState,mapGetters,mapMutations} from 'vuex';
    export default {
        data(){
            return{
                message:'hello,'
            }
        },
        computed:{
            ...mapGetters([
                'getCount'
            ])
        },
        components:{
            Header
        },
        mounted() {
            // bus.$emit('msg','这是用bus传递给header的数据！');
            // console.log(this.$children[0].handleClick)
        },
        methods:{
            func(){
                alert('接收到header传过来的信号了')
            }
        }
    }
</script>
<style scoped>

</style>
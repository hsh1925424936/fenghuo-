<template>
    <div class="header" @click="handleClick">
        {{messages}}这是一个header{{count}}
        <h1>{{getCount}}</h1>
    </div>
</template>
<script>
    import bus from '../bus.js';
    import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
    export default {
        data(){
            return{
                list:[1,2,3,4,5,6]
            }
        },
        computed:{
            // count(){
            //     return this.$store.state.count
            // }
            ...mapState([
                'count'
            ]),
            ...mapGetters([
                'getCount'
            ])
        },
        props:{
            messages:{
                type:String,
                require:true
            }
        },
        mounted() {
            // console.log(this.$parent.message);
            bus.$on('msg',(val)=>{
                // console.log(val)
                // alert(val)
            })
        },
        methods:{
            // ...mapMutations([
            //     'addCount'
            // ]),
            ...mapActions([
                'addCount'
            ]),
            handleClick(){
                this.$emit('msgFun');
                this.addCount()
            }
        }
    }
</script>
<style scoped>
h1{
    font-size:2rem;
}
</style>
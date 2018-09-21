<template>
    <div class="login">
        <div class="text">烽火UED前端模板管理系统</div>
        <div class="form">
            <div class="title">欢迎登录</div>
            <div class="content">
                <div class="account cont">
                    <label for="account">账号：</label>
                    <input type="text" id="account" autocomplete="off">
                </div>
                <div class="password cont">
                    <label for="password">密码：</label>
                    <input type="text" id="password">
                </div>
                <div class="btn cont">
                    <a href="javascript:;">登录</a>
                    <a href="javascript:;">重置</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        data (){
            return{

            }
        },
        mounted(){
            axios.get('/test').then(function(res){
                console.log(res)
            })
        },
        methods:{

        }
    }
</script>
<style scoped>
    .login{
        position:relative;
        width: 100%;
        height: 100%;
        background:url('../../assets/login_bg.jpg') no-repeat;
        background-size:100% 100%;
        min-width: 1024px;
        min-height: 570px;
        overflow: hidden;
    }
    .text{
        color: #fff;
        text-align: center;
        margin-top:120px;
        font-size: 45px;
        text-shadow: 5px 5px 5px #ccc;
    }
    .form{
        width:34.2%;
        height:36.8%;
        background:rgba(14,50,86,.5);
        position: absolute;
        top:50%;
        left:50%;
        transform: translateX(-50%) translateY(-50%);
        border:solid 2px rgb(55,90,128);
        border-radius: 5px;
    }
    .title{
        width: 100%;
        height: 40px;
        line-height: 40px;
        color:rgb(186,212,237);
        background: rgba(24,71,127,0.5);
        font-size: 16px;
        letter-spacing: 2px;
        padding-left: 10px;
        box-sizing: border-box;
    }
    .content{
        width: 100%;
        height: calc(100% - 40px);
        padding: 30px 0;
        box-sizing: border-box;
        display:flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    .cont{
        width: 100%;
        display:flex;
        justify-content: center;
    }
    .cont label{
        color: #fff;
    }
    .cont input{
        width: 60%;
        background: transparent;
        border:solid 1px rgb(55,90,128);
        user-select: none;
        color: #fff;
        height: 24px;
        padding: 0 5px;
    }
    .btn a{
        background: rgb(62,126,200);
        color: #fff;
        padding: 5px 30px;
        border-radius: 5px;
        text-decoration: none;
    }
    .btn a:hover{
        background: rgb(0,122,204);
    }
    .btn a:nth-last-child(1){
        margin-left: 30px;
    }
</style>
define([],function(){
    var model = $.extend(true,{},{
        getTotal:function(data){
            return $.ajax({
                type:'GET',
                url:'/CLOUD/index/getTotal.do',
                dataType:'json',
                data:data
            })
        },
        getEach:function(data){
            return $.ajax({
                type:'GET',
                url:'/CLOUD/index/getEach.do',
                dataType:'json',
                data:data
            })
        },
        getTop:function(data){
            return $.ajax({
                type:'GET',
                url:'/CLOUD/index/getTop5.do',
                dataType:'json',
                data:data
            })
        },
        getScatter:function(data){
            return $.ajax({
                type:'GET',
                url:'/CLOUD/index/getScatter.do',
                dataType:'json',
                data:data
            })
        },
        getSplit:function(data){
            return $.ajax({
                type:'GET',
                url:'/CLOUD/index/getSplit.do',
                dataType:'json',
                data:data
            })
        },
        getHackerCluList:function(data){
            return $.ajax({
                type:'GET',
                url:'/CLOUD/index/hackerCluList.do',
                dataType:'json',
                data:data
            })
        },
        protectWebList:function(data){
            return $.ajax({
                type:'GET',
                url:'/CLOUD/index/protectWebList.do',
                dataType:'json',
                data:data
            })
        },
        getSysLocations:function(code){
            return $.ajax({
                type:'GET',
                url:'/CLOUD/index/getSysLocations.do?areaCode='+code,
                dataType:'json'
            })
        }
    })
    return model;
})
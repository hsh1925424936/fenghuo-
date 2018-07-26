define(['oasEventAction'],function(eventAction){
    var home = {
        init:function(){
            this.queryConfirm();
            this._event();
        },
        _event:function(){
            var self = this
            eventAction.add({
                'login':function(){
                    console.log($('.confirm input').val())
                    var str = $('.confirm input').val()
                    console.log(str == commonModel.confirm)
                    self.queryConfirm();
                }
            })
        },
        queryConfirm:function(){
            commonModel.confirm = '';
            var arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
            console.log(arr.length)
            for(var i = 0;i<4;i++){
                commonModel.confirm += arr[Math.floor(Math.random()*52)]
            }   
            $('.confirm i').text(commonModel.confirm)
        }
    };
    var commonModel = (function(){
        var obj = {
            confirm:''
        }
        return obj;
    })()
    return home;
})
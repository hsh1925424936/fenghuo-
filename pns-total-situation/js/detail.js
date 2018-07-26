define(['./model.js', 'oasGrid', 'oasPagin','oasDialog'], function (model, oasGrid, oasPagin,dialog) {
    var app = {
        init: function () {
            var self = this;
            // console.log(window.parent.commonModel)
            var obj = this._getRequest();
            // console.log(obj);
            // console.log(window.location.href)
            commonModel.type = obj.type;
            commonModel.code = obj.code;
            commonModel.startTime = obj.startTime;
            commonModel.endTime = obj.endTime;
            commonModel.scatter = obj.scatter;
            // console.log(commonModel.code)
            // console.log(commonModel.type)
            // var dfd = $.Deferred();

            // this._renderGrid(dfd);
            // dfd.then(function(){
                // console.log(commonModel.totalCount)
            if(commonModel.type == 'hc'){
                self.showHcTable()
            }else{
                self.showDbTable()
            }
            $('.pagin').oasPagin({    
                    // total: commonModel.totalCount,
                    current:1,
                    pageItems:10
                    // showMsg: true
            }).on('pageNoChange.oasPagin', function (ev, current, pageItems) {
                    // console.log(ev, current, pageItems);
                    // console.log(ev)
                    commonModel.currentPage = current;
                    commonModel.pageSize = pageItems;
                    // self._renderGrid(dfd);
                    if(commonModel.type == 'hc'){
                        self.showHcTable()
                    }else{
                        self.showDbTable()
                    }
            })
            // })
        },
        _getRequest:function(){
            var url = location.search;
            var theRequest = {};
            if(url.indexOf('?') != -1){
                var str = url.substr(1);
                var strs = str.split('&');
                for(var i = 0;i<strs.length;i++){
                    theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1]);
                }
            }
            return theRequest;
        },
        showHcTable:function(){
            var totalHead = [
                {
                    "label": '时间',
                    "width": 336,
                    "sort": "sort",
                    "name": 'time_show',
                }, {
                    "label": '虚拟账号',
                    "width": 200,
                    "name": "virtualId",
                    dataRender: "<span title='{{virtualId}}'>{{virtualId}}</span>"

                }, {
                    "label": '账号类型',
                    "width": 200,
                    //"sort" : "sort",
                    "name": "virtualType",
                    dataRender: "<span title='{{virtualType}}'>{{virtualType==1?'微信':'QQ'}}</span>"

                }, {
                    "label": '昵称',
                    "width": 200,
                    "name": "nickName",
                    dataRender: "<span title='{{nickName}}'>{{nickName}}</span>"

                }, 
                // {
                //     "label": '姓名',
                //     "width": 50,
                //     //"sort" : "sort",
                //     "name": "name",
                //     dataRender: "<span title='{{name}}'>{{name}}</span>"

                // },
                /* {
                       "label": '电话',
                       "width": 60,
                       "name": "phone",
                       dataRender: "<span title='{{phone}}'>{{phone}}</span>"
                   },*/ {
                    "label": 'IP活跃地',
                    "width": 200,
                    "name": "ip_show",
                    dataRender: "<span title='{{ip_show}}'>{{ip_show}}</span>"

                }, {
                    "label": '归属地',
                    "width": 200,
                    "name": "dealareaCode_show",
                    dataRender: "<span title='{{dealareaCode_show}}'>{{dealareaCode_show}}</span>"

                }, 
                // {
                //     "label": '备注说明',
                //     "width": 100,
                //     "name": "declarea",
                //     dataRender: "<span title='{{declare}}'>{{declare}}</span>"

                // }, {
                //     "label": '状态',
                //     "width": 30,
                //     "name": "status",
                //     dataRender: "<span>{{status==1?'已查看':'未查看'}}</span>"
                // },
                //    {
                //        "label": '操作',
                //        "width": 100,
                //        "name": "opt",
                //        dataRender : '<a href="javascript:;" title="点击查看{{name}}的详情" onclick="viewDetail(\'{{id}}\', true);" class="oasicon oasicon-modify"></a>'
                //    }
            ];
            app.queryHcData();
            $('.table').oasGrid({
                head: totalHead,
                //checkbox: true,
                //nowrap: false,
            }).oasGrid('render').on("sort.oasGrid", function (ev, index, sortType) {
                commonModel.sortCol = index;
                commonModel.orderDesc = sortType;
                app.queryHcData();
            });
        },
        queryHcData:function(){
            model.getHackerCluList({
                currentPage: commonModel.currentPage,
                pageSize: commonModel.pageSize,
                totalCount: commonModel.totalCount,
                startTime_show: commonModel.startTime?commonModel.startTime:window.parent.commonModel.startTime,
                endTime_show: commonModel.endTime?commonModel.endTime:window.parent.commonModel.endTime,
                scatter:commonModel.scatter?commonModel.scatter:'',               
                dealareaCode:commonModel.code?commonModel.code:window.parent.commonModel.code,
                sortCol:commonModel.sortCol,
                orderDesc:commonModel.orderDesc
            }).then(function (res) {
                var datalist = res.res;
                commonModel.totalCount = res.rf.totalCount;
                $('.table').oasGrid('data', datalist);
                $('.pagin').oasPagin('total', commonModel.totalCount);
            })
        },
        showDbTable:function(){
            var totalHead = [/* {
                "label": '编号',
                "width": 100,
                "sort" : "sort",
                "name": 'id',
                },*/{
                   "label": '被攻击网站名称',
                   "width": 100,
                   //"sort" : "sort",
                   "name": 'siteName',
                   dataRender: "<span title='{{siteName}}'>{{siteName=='null'?'':siteName}}</span>"
               }, {
                   "label": '被攻击域名',
                   "width": 100,
                   "name": "attackHost",
                   dataRender: "<span title='{{attackHost}}'>{{attackHost}}</span>"
               
               }, {
                   "label": '攻击事件名称',
                   "width": 100,
                   //"sort" : "sort",
                   "name": "eventName",
                   dataRender: "<span title='{{eventName}}'>{{eventName}}</span>"
               
               }, {
                   "label": '时间',
                   "width": 100,
                   "sort" : "sort",
                   "name": "showTime",
                   dataRender: "<span title='{{showTime}}'>{{showTime}}</span>"
               
               }, {
                   "label": '情报归属地',
                   "width": 138,
                   //"sort" : "sort",
                   "name": "showDealareaCode",
                   dataRender: "<span title='{{showDealareaCode}}'>{{showDealareaCode}}</span>"
               
               },{
                   "label": '采集地',
                   "width": 100,
                   //"sort" : "sort",
                   "name": "showCaparea",
                   dataRender: "<span title='{{showCaparea}}'>{{showCaparea}}</span>"
               
               }, 
               {
                   "label": '被攻击URL',
                   "width": 100,
                   "name": "attackUrl",
                   dataRender: "<span title='{{attackUrl}}'>{{attackUrl}}</span>"
               },
                //    {
                //        "label": '操作',
                //        "width": 30,
                //        "name": "opt",
                //        dataRender: tableInnerBtns
                //    }
                ];
                app.queryDbData();
                $('.table').oasGrid({
                    head: totalHead,
                    //checkbox: true,
                    //nowrap: false,
                }).oasGrid('render').on("sort.oasGrid", function (ev, index, sortType) {
                    commonModel.sortCol = index;
                    commonModel.orderDesc = sortType;
                    app.queryDbData();
                });
        },
        queryDbData:function(){
            model.protectWebList({
                currentPage: commonModel.currentPage,
                pageSize: commonModel.pageSize,
                totalCount: commonModel.totalCount,
                startTime: commonModel.startTime?commonModel.startTime:window.parent.commonModel.startTime,
                endTime: commonModel.endTime?commonModel.endTime:window.parent.commonModel.endTime,
                // startTime_show:'1522742540',
                // endTime_show:'1522742540', 
                scatter:commonModel.scatter?commonModel.scatter:'',               
                dealareaCode:commonModel.code?commonModel.code:window.parent.commonModel.code,
                sortCol:commonModel.sortCol,
                orderDesc:commonModel.orderDesc
            }).then(function (res) {
                var datalist = res.res;
                commonModel.totalCount = res.rf.totalCount;
                $('.table').oasGrid('data', datalist);
                $('.pagin').oasPagin('total', commonModel.totalCount);
            })
        }
    };
    var commonModel = (function () {
        var obj = {
            type:'',
            code:'',
            startTime:'',
            endTime:'',
            totalCount: 0,
            pageSize: 10,
            currentPage: 1,
            sortCol:'',
            orderDesc:'',
        }
        return obj;
    })()
    return app;
})
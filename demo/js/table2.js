var data = [
    {
        type:'qq',
        count:[
            {
                account:'1111111',
                others:[
                    {
                        account:'33333333',
                        sTime:'2018-3-4',
                        eTime:'2018-5-6',
                        count:'1203次',
                    },
                    {
                        account:'555555555',
                        sTime:'2018-3-4',
                        eTime:'2018-5-6',
                        count:'1203次',
                    },
                    // {
                    //     account:'66666666',
                    //     sTime:'2018-3-4',
                    //     eTime:'2018-5-6',
                    //     count:'1203次',
                    // },
                ]
                
            },
            {
                account:'222222222',
                others:[
                    {
                        account:'4444444444',
                        sTime:'2018-3-4',
                        eTime:'2018-5-6',
                        count:'1203次',
                    },
                    {
                        account:'4444444444',
                        sTime:'2018-3-4',
                        eTime:'2018-5-6',
                        count:'1203次',
                    },
                    // {
                    //     account:'4444444444',
                    //     sTime:'2018-3-4',
                    //     eTime:'2018-5-6',
                    //     count:'1203次',
                    // },
                ]
                
            }
        ]
    },
    {
        type:'wx',
        count:[
            {
                account:'1111111',
                others:[
                    {
                        account:'33333333',
                        sTime:'2018-3-4',
                        eTime:'2018-5-6',
                        count:'1203次',
                    },
                    {
                        account:'555555555',
                        sTime:'2018-3-4',
                        eTime:'2018-5-6',
                        count:'1203次',
                    },
                    {
                        account:'666666666',
                        sTime:'2018-3-4',
                        eTime:'2018-5-6',
                        count:'1203次',
                    },
                    {
                        account:'777777777',
                        sTime:'2018-3-4',
                        eTime:'2018-5-6',
                        count:'1203次',
                    }
                ]
                
            },
            {
                account:'222222222',
                others:[
                    {
                        account:'4444444444',
                        sTime:'2018-3-4',
                        eTime:'2018-5-6',
                        count:'1203次',
                    }
                ]
                
            }
        ]
    }
]
renderTable(data);
function renderTable(data){
    var rowNum = [];
    data.map(function(item,index){
        var len = 0;
        item.count.map(function(item1,index1){
            len+=item1.others.length
        })
        rowNum.push(len)
    })
    for(var i = 0;i<data.length;i++){
        var $tr1 = $('<tr></tr>');
        var n  = 0;
        for(var j = 0;j<data[i].count.length;j++){
            n++;
            var $tr2 = $('<tr></tr>');
            for(var k = 0;k<data[i].count[j].others.length;k++){
                var $tr3 = $('<tr></tr>');
                
                var $td3 = $('<td>'+data[i].count[j].others[k].account+'</td>');
                var $td4 = $('<td>'+data[i].count[j].others[k].sTime+'</td>');
                var $td5 = $('<td>'+data[i].count[j].others[k].eTime+'</td>');
                var $td6 = $('<td>'+data[i].count[j].others[k].count+'</td>');
                
                var $td1 = $('<td rowspan="'+(rowNum[i]+1)+'">'+data[i].type+'</td>');

                if(j == 0 && k == 0){
                    $tr1.append($td1);
                    if($tr1.children().length>0){
                        $('.tbody').append($tr1)
                    }
                }
                var $td2 = $('<td rowspan="'+(data[i].count[n-1].others.length)+'">'+data[i].count[j].account+'</td>');
                if(k==0){
                    $tr2.append($td2,$td3,$td4,$td5,$td6);
                    if($tr2.children().length>0){
                        $('.tbody').append($tr2)
                    }
                }else{
                    $tr3.append($td3,$td4,$td5,$td6)
                    if($tr3.children().length>0){
                        $('.tbody').append($tr3)
                    }
                }
            }
        }
    }
}
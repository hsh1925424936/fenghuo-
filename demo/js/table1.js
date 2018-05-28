var data =[
    {
        count:'111111111',
        others:[
            {
                account:'33333',
                sTime:'2018-5-28',
                eTime:'2018-6-28',
                count:'1339次'
            },
            {
                account:'444444',
                sTime:'2018-5-28',
                eTime:'2018-6-28',
                count:'1339次'
            },
        ]
    },
    {
        count:'222222222',
        others:[
            {
                account:'33333',
                sTime:'2018-5-28',
                eTime:'2018-6-28',
                count:'1339次'
            },
            {
                account:'444444',
                sTime:'2018-5-28',
                eTime:'2018-6-28',
                count:'1339次'
            },
        ]
    }
]
renderTable(data);
function renderTable(data){
    for(var i = 0;i<data.length;i++){
        var $tr1 = $('<tr></tr>');
        var $td1 = $('<td rowspan="'+(data[i].others.length+1)+'">'+data[i].count+'</td>');
        $tr1.append($td1);
        for(var j = 0;j<data[i].others.length;j++){
            var $tr2 = $('<tr></tr>');
            
            var $td2 = $('<td>'+data[i].others[j].account+'</td>');
            var $td3 = $('<td>'+data[i].others[j].sTime+'</td>');
            var $td4 = $('<td>'+data[i].others[j].eTime+'</td>');
            var $td5 = $('<td>'+data[i].others[j].count+'</td>');

            $tr2.append($td2,$td3,$td4,$td5);
            if(j == 0){
                $('.tbody').append($tr1);
            }
            $('.tbody').append($tr2)
        }
    }
}

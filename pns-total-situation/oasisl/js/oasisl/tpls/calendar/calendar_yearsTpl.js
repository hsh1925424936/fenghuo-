define(["../template",""],function(e){return e("calendar/calendar_yearsTpl",function(e){"use strict";var t=this,n=(t.$helpers,t.$each),r=e.arr,i=(e.yearObj,e.index,t.$escape),s="";return s+='<table class="oas-calendar-year-table"> <tbody> </tr> ',n(r,function(e,t){s+=" ",0==t%4&&(s+=" <tr> "),s+=' <td class="table-year-item ',e.disableState===!1&&(s+="disable-item"),s+='" data-year=',s+=i(e.year),s+="> <div>",s+=i(e.year),s+="</div> </td> ",3==t%4&&(s+=" </tr> "),s+=" "}),s+=" </tbody> </table>",new String(s)})});
define(["../template",""],function(e){return e("grid/thead",function(e,t){"use strict";var n=this,r=n.$helpers,i=e.checkbox,s=e.headFront,o=n.$each,u=e.$value,a=e.$index,f=n.$escape,l=n.$string,c=e.headCenter,h=e.colOpts,p=e.headFinale,d=e.colOptsWidth,v="";v+="  ";if(i===!0||s.length>0)v+=' <div class="grid-front-fixed"> <table> <colgroup> ',i===!0&&(v+=' <col width="40px"> '),v+=" ",o(s,function(e,t){v+=' <col width="',v+=f(e.width),v+='"> '}),v+=" </colgroup> <thead> <tr> ",i===!0&&(v+=' <th class="oas-grid-checkbox"><div class="oas-grid-th"><input type="checkbox" /></div></th> '),v+=" ",o(s,function(e,t){v+=" <th",e.title&&(v+=' title="',v+=f(e.title),v+='"'),e.name&&(v+=' name="',v+=f(e.name),v+='"'),v+='> <div class="oas-grid-th"> ',v+=l(e.label),v+=" ",e.sort&&(v+=' <a class="sort-icon oasicon oasicon-',v+=f(e.sort),v+='" href="javascript:;"></a> '),v+=" </div> </th> "}),v+=" </tr> </thead> </table> </div> ";v+='  <div class="grid-main"> <table> <colgroup> ',o(c,function(e,t){v+=' <col width="',e.minWidth?v+="*":v+=f(e.width),v+='"> '}),v+=" </colgroup> <thead> <tr> ",o(c,function(e,t){v+=" <th",e.title&&(v+=' title="',v+=f(e.title),v+='"'),e.name&&(v+=' name="',v+=f(e.name),v+='"'),v+='> <div class="oas-grid-th"><span class="oas-col-line"></span>',v+=l(e.label),e.sort&&(v+='<a class="sort-icon oasicon oasicon-',v+=f(e.sort),v+='" href="javascript:;"></a>'),v+="</div> </th> "}),v+=" </tr> </thead> </table> </div>  ";if(h.data||p.length>0)v+=' <div class="grid-finale-fixed"> <table> <colgroup> ',o(p,function(e,t){v+=' <col width="',v+=f(e.width),v+='"> '}),v+=" ",h.data&&(v+=' <col width="',v+=f(d),v+='"> '),v+=" </colgroup> <thead> <tr> ",o(p,function(e,t){v+=" <th",e.title&&(v+=' title="',v+=f(e.title),v+='"'),e.name&&(v+=' name="',v+=f(e.name),v+='"'),v+='> <div class="oas-grid-th">',v+=l(e.label),e.sort&&(v+='<a class="sort-icon oasicon oasicon-',v+=f(e.sort),v+='" href="javascript:;"></a>'),v+="</div> </th> "}),v+=" ",h.data&&(v+=' <th class="oas-grid-operator oas-grid-operator-',v+=f(h.type),v+='"> <div class="oas-grid-th">操作</div> </th> '),v+=" </tr> </thead> </table> </div> ";return new String(v)})});
define(["../template",""],function(e){return e("thinkInput/bodyTplA",function(e,t){"use strict";var n=this,r=n.$helpers,i=e.isNoData,s=e.blankDom,o=n.$escape,u=e.nodataTip,a=n.$string,f=n.$each,l=e.list,c=e.$value,h=e.$index,p="";return p+='<div class="associate-arrow top-arrow"> </div> <div class="associate-bd oas-scroll-webkit ',i==1&&(p+="no-bottom"),p+='"> ',i==1?(p+=" ",s==""?(p+=' <div class="ellipsis"> ',p+=o(u),p+=" </div> "):(p+=' <div class="ellipsis"> ',p+=o(u),p+=' </div> <div class="no-data-style"> ',p+=a(s),p+=" </div> "),p+=" "):(p+=" <div> <ul> ",f(l,function(e,t){p+=' <li class="associate-item" index=',p+=o(t),p+=' title="',p+=o(e.title),p+='">',p+=a(e.label),p+="</li> "}),p+=" </ul> </div> "),p+=' </div> <div class="associate-ft ',i==1&&(p+="hide"),p+='"> <div class="associate-pagin" data-oas-pagin-type="simple" data-oaspagin-skipto="false" data-oaspagin-size="sm"> </div> </div> <div class="associate-loading"> <div class="oas-local-loading clearfx"> <span class="loading"></span> <span class="loading-text">数据读取中....</span> </div> </div>',new String(p)})});
define(["../template",""],function(e){return e("filter/filter",function(e,t){"use strict";var n=this,r=n.$helpers,i=n.$each,s=e.list,o=e.$value,u=e.$index,a=n.$escape,f="";return i(s,function(e,t){f+=' <div class="seachbox-item"> <div class="oas-connection-item" data-name="',f+=a(e.name),f+='" data-id="',f+=a(e.id),f+='"> <span class="labels">',f+=a(e.label),f+="：</span> ",i(e.children,function(e,t){f+=' <label class="oas-choose-btn" data-id="',f+=a(e.id),f+='" data-name="',f+=a(e.name),f+='"><input type="checkbox">',f+=a(e.label),f+="</label> "}),f+=' <button class="btn btn-default btn-sm mixchoose-btn"><i class="glyphicon glyphicon-plus"></i>多选</button> <a href="javascript:;" class="mixchoose-quit">[退出多选]</a> <button class="btn btn-default btn-sm mixchoose-confirm">确定</button> </div> </div> '}),new String(f)})});
define(["../template",""],function(e){return e("tabsCard/tabsUnit",function(e,t){"use strict";var n=this,r=n.$helpers,i=e.data,s=n.$escape,o=n.$string,u="";if(i.label){u+=' <div class="oas-tabsCard-top"> <span class="tab-img ',u+=s(i.label.imageClass),u+='"/></span> ',i.label.statusClass&&(u+=' <span class="tab-ramark ',u+=s(i.label.statusClass),u+='"></span> '),u+=" ";if(i.label.text||i.label.subText)u+=' <ul class="tab-texts"> ',i.label.text&&(u+=' <li class="tab-text"> ',i.label.text.key&&(u+=' <span class="text-key">',u+=s(i.label.text.key),u+="：</span> "),u+=" ",i.label.text.value&&(u+=' <span class="text-value">',u+=s(i.label.text.value),u+="</span> "),u+=" </li> "),u+=" ",i.label.subText&&(u+=' <li class="tab-subtext"> ',i.label.subText.key&&(u+=' <span class="text-key">',u+=s(i.label.subText.key),u+="：</span> "),u+=" ",i.label.subText.value&&(u+=' <span class="text-value">',u+=s(i.label.subText.value),u+="</span> "),u+=" </li> "),u+=" </ul> ";u+=" </div> "}return u+=" ",i.content&&(u+=' <div class="oas-tabsCard-main">',u+=o(i.content),u+="</div> "),new String(u)})});
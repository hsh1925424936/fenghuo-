!function(e,t){var n,r,i={getPath:function(){var e=document.scripts,t=e[e.length-1],n=t.src;if(t.getAttribute("merge"))return;return n.substring(0,n.lastIndexOf("/")+1)}(),enter:function(e){e.keyCode===13&&e.preventDefault()},config:{},end:{},btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],type:["dialog","page","iframe","loading","tips"]},s={v:"2.1",ie6:!!e.ActiveXObject&&!e.XMLHttpRequest,index:0,path:i.getPath,config:function(e,t){var r=0;return e=e||{},s.cache=i.config=n.extend(i.config,e),s.path=i.config.path||s.path,typeof e.extend=="string"&&(e.extend=[e.extend]),e.extend&&e.extend.length>0?function o(){var n=e.extend;s.use(n[n[r]?r:r-1],r<n.length?function(){return++r,o}():t)}():t&&t(),this},use:function(e,t,r){var i=0,o=n("head")[0],e=e.replace(/\s/g,""),u=/\.css$/.test(e),a=document.createElement(u?"link":"script"),f="layui_layer_"+e.replace(/\.|\//g,"");if(!s.path)return;return u&&(a.rel="stylesheet"),a[u?"href":"src"]=/^http:\/\//.test(e)?e:s.path+e,a.id=f,n("#"+f)[0]||o.appendChild(a),function l(){(u?parseInt(n("#"+f).css("width"))===1989:s[r||f])?function(){t&&t();try{u||o.removeChild(a)}catch(e){}}():setTimeout(l,100)}(),this},ready:function(e,t){var r=typeof e=="function";return r&&(t=e),s.config(n.extend(i.config,function(){return r?{}:{path:e}}()),t),this},alert:function(e,t,r){var i=typeof t=="function";return i&&(r=t),s.open(n.extend({content:e,yes:r},i?{}:t))},confirm:function(e,t,r,o){var u=typeof t=="function";return u&&(o=r,r=t),s.open(n.extend({content:e,btn:i.btn,yes:r,cancel:o},u?{}:t))},msg:function(e,r,o){var a=typeof r=="function",f=i.config.skin,l=(f?f+" "+f+"-msg":"")||"layui-layer-msg",c=u.anim.length-1;return a&&(o=r),s.open(n.extend({content:e,time:3e3,shade:!1,skin:l,title:!1,closeBtn:!1,btn:!1,end:o},a&&!i.config.skin?{skin:l+" layui-layer-hui",shift:c}:function(){r=r||{};if(r.icon===-1||r.icon===t&&!i.config.skin)r.skin=l+" "+(r.skin||"layui-layer-hui");return r}()))},load:function(e,t){return s.open(n.extend({type:3,icon:e||0,shade:.01},t))},tips:function(e,t,r){return s.open(n.extend({type:4,content:[e,t],closeBtn:!1,time:3e3,maxWidth:210},r))}},o=function(e){var t=this;t.index=++s.index,t.config=n.extend({},t.config,i.config,e),t.creat()};o.pt=o.prototype;var u=["layui-layer",".layui-layer-title",".layui-layer-main",".layui-layer-dialog","layui-layer-iframe","layui-layer-content","layui-layer-btn","layui-layer-close"];u.anim=["layui-anim","layui-anim-01","layui-anim-02","layui-anim-03","layui-anim-04","layui-anim-05","layui-anim-06"],o.pt.config={type:0,shade:.3,fix:!0,move:u[1],title:"&#x4FE1;&#x606F;",offset:"auto",area:"auto",closeBtn:1,time:0,zIndex:19891014,maxWidth:360,shift:0,icon:-1,scrollbar:!0,tips:2},o.pt.vessel=function(e,t){var n=this,r=n.index,s=n.config,o=s.zIndex+r,a=typeof s.title=="object",f=s.maxmin&&(s.type===1||s.type===2),l=s.title?'<div class="layui-layer-title" style="'+(a?s.title[1]:"")+'">'+(a?s.title[0]:s.title)+"</div>":"";return s.zIndex=o,t([s.shade?'<div class="layui-layer-shade" id="layui-layer-shade'+r+'" times="'+r+'" style="'+("z-index:"+(o-1)+"; background-color:"+(s.shade[1]||"#000")+"; opacity:"+(s.shade[0]||s.shade)+"; filter:alpha(opacity="+(s.shade[0]*100||s.shade*100)+");")+'"></div>':"",'<div class="'+u[0]+" "+(u.anim[s.shift]||"")+(" layui-layer-"+i.type[s.type])+(s.type!=0&&s.type!=2||!!s.shade?"":" layui-layer-border")+" "+(s.skin||"")+'" id="'+u[0]+r+'" type="'+i.type[s.type]+'" times="'+r+'" showtime="'+s.time+'" conType="'+(e?"object":"string")+'" style="z-index: '+o+"; width:"+s.area[0]+";height:"+s.area[1]+(s.fix?"":";position:absolute;")+'">'+(e&&s.type!=2?"":l)+'<div class="layui-layer-content'+(s.type==0&&s.icon!==-1?" layui-layer-padding":"")+(s.type==3?" layui-layer-loading"+s.icon:"")+'">'+(s.type==0&&s.icon!==-1?'<i class="layui-layer-ico layui-layer-ico'+s.icon+'"></i>':"")+(s.type==1&&e?"":s.content||"")+"</div>"+'<span class="layui-layer-setwin">'+function(){var e=f?'<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>':"";return s.closeBtn&&(e+='<a class="layui-layer-ico '+u[7]+" "+u[7]+(s.title?s.closeBtn:s.type==4?"1":"2")+'" href="javascript:;"></a>'),e}()+"</span>"+(s.btn?function(){var e="";typeof s.btn=="string"&&(s.btn=[s.btn]);for(var t=0,n=s.btn.length;t<n;t++)e+='<a class="'+u[6]+""+t+'">'+s.btn[t]+"</a>";return'<div class="'+u[6]+'">'+e+"</div>"}():"")+"</div>"],l),n},o.pt.creat=function(){var e=this,t=e.config,o=e.index,a,f=t.content,l=typeof f=="object";typeof t.area=="string"&&(t.area=t.area==="auto"?["",""]:[t.area,""]);switch(t.type){case 0:t.btn="btn"in t?t.btn:i.btn[0],s.closeAll("dialog");break;case 2:var f=t.content=l?t.content:[t.content||"http://layer.layui.com","auto"];t.content='<iframe scrolling="'+(t.content[1]||"auto")+'" allowtransparency="true" id="'+u[4]+""+o+'" name="'+u[4]+""+o+'" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="'+t.content[0]+'"></iframe>';break;case 3:t.title=!1,t.closeBtn=!1,t.icon===-1&&t.icon===0,s.closeAll("loading");break;case 4:l||(t.content=[t.content,"body"]),t.follow=t.content[1],t.content=t.content[0]+'<i class="layui-layer-TipsG"></i>',t.title=!1,t.shade=!1,t.fix=!1,t.tips=typeof t.tips=="object"?t.tips:[t.tips,!0],t.tipsMore||s.closeAll("tips")}e.vessel(l,function(r,i){n("body").append(r[0]),l?function(){t.type==2||t.type==4?function(){n("body").append(r[1])}():function(){f.parents("."+u[0])[0]||(f.show().addClass("layui-layer-wrap").wrap(r[1]),n("#"+u[0]+o).find("."+u[5]).before(i))}()}():n("body").append(r[1]),e.layero=n("#"+u[0]+o),t.scrollbar||u.html.css("overflow","hidden").attr("layer-full",o)}).auto(o),t.type==2&&s.ie6&&e.layero.find("iframe").attr("src",f[0]),n(document).off("keydown",i.enter).on("keydown",i.enter),e.layero.on("keydown",function(e){n(document).off("keydown",i.enter)}),t.type==4?e.tips():e.offset(),t.fix&&r.on("resize",function(){e.offset(),(/^\d+%$/.test(t.area[0])||/^\d+%$/.test(t.area[1]))&&e.auto(o),t.type==4&&e.tips()}),t.time<=0||setTimeout(function(){s.close(e.index)},t.time),e.move().callback()},o.pt.auto=function(e){function l(e){e=s.find(e),e.height(o[1]-a-f-2*(parseFloat(e.css("padding"))|0))}var t=this,i=t.config,s=n("#"+u[0]+e);i.area[0]===""&&i.maxWidth>0&&(/MSIE 7/.test(navigator.userAgent)&&i.btn&&s.width(s.innerWidth()),s.outerWidth()>i.maxWidth&&s.width(i.maxWidth));var o=[s.innerWidth(),s.innerHeight()],a=s.find(u[1]).outerHeight()||0,f=s.find("."+u[6]).outerHeight()||0;switch(i.type){case 2:l("iframe");break;default:i.area[1]===""?i.fix&&o[1]>=r.height()&&(o[1]=r.height(),l("."+u[5])):l("."+u[5])}return t},o.pt.offset=function(){var e=this,t=e.config,n=e.layero,i=[n.outerWidth(),n.outerHeight()],s=typeof t.offset=="object";e.offsetTop=(r.height()-i[1])/2,e.offsetLeft=(r.width()-i[0])/2,s?(e.offsetTop=t.offset[0],e.offsetLeft=t.offset[1]||e.offsetLeft):t.offset!=="auto"&&(e.offsetTop=t.offset,t.offset==="rb"&&(e.offsetTop=r.height()-i[1],e.offsetLeft=r.width()-i[0])),t.fix||(e.offsetTop=/%$/.test(e.offsetTop)?r.height()*parseFloat(e.offsetTop)/100:parseFloat(e.offsetTop),e.offsetLeft=/%$/.test(e.offsetLeft)?r.width()*parseFloat(e.offsetLeft)/100:parseFloat(e.offsetLeft),e.offsetTop+=r.scrollTop(),e.offsetLeft+=r.scrollLeft()),n.css({top:e.offsetTop,left:e.offsetLeft})},o.pt.tips=function(){var e=this,t=e.config,i=e.layero,s=[i.outerWidth(),i.outerHeight()],o=n(t.follow);o[0]||(o=n("body"));var a={width:o.outerWidth(),height:o.outerHeight(),top:o.offset().top,left:o.offset().left},f=i.find(".layui-layer-TipsG"),l=t.tips[0];a.autoLeft=function(){a.left+s[0]-r.width()>0?(a.tipLeft=a.left+a.width-s[0],f.css({right:12,left:"auto"})):a.tipLeft=a.left},a.where=[function(){a.autoLeft(),a.tipTop=a.top-s[1]-10,f.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color",t.tips[1])},function(){a.tipLeft=a.left+a.width+10,a.tipTop=a.top,f.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color",t.tips[1])},function(){a.autoLeft(),a.tipTop=a.top+a.height+10,f.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color",t.tips[1])},function(){a.tipLeft=a.left-s[0]-10,a.tipTop=a.top,f.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color",t.tips[1])}],a.where[l-1](),l===1?a.top-(r.scrollTop()+s[1]+16)<0&&a.where[2]():l===2?r.width()-(a.left+a.width+s[0]+16)>0||a.where[3]():l===3?a.top-r.scrollTop()+a.height+s[1]+16-r.height()>0&&a.where[0]():l===4&&s[0]+16-a.left>0&&a.where[1](),i.find("."+u[5]).css({"background-color":t.tips[1],"padding-right":t.closeBtn?"30px":""}),i.css({left:a.tipLeft,top:a.tipTop})},o.pt.move=function(){var e=this,t=e.config,i={setY:0,moveLayer:function(){var e=i.layero,t=parseInt(e.css("margin-left")),n=parseInt(i.move.css("left"));t===0||(n-=t),e.css("position")!=="fixed"&&(n-=e.parent().offset().left,i.setY=0),e.css({left:n,top:parseInt(i.move.css("top"))-i.setY})}},s=e.layero.find(t.move);return t.move&&s.attr("move","ok"),s.css({cursor:t.move?"move":"auto"}),n(t.move).on("mousedown",function(e){e.preventDefault();if(n(this).attr("move")==="ok"){i.ismove=!0,i.layero=n(this).parents("."+u[0]);var s=i.layero.offset().left,o=i.layero.offset().top,a=i.layero.outerWidth()-6,f=i.layero.outerHeight()-6;n("#layui-layer-moves")[0]||n("body").append('<div id="layui-layer-moves" class="layui-layer-moves" style="left:'+s+"px; top:"+o+"px; width:"+a+"px; height:"+f+'px; z-index:2147483584"></div>'),i.move=n("#layui-layer-moves"),t.moveType&&i.move.css({visibility:"hidden"}),i.moveX=e.pageX-i.move.position().left,i.moveY=e.pageY-i.move.position().top,i.layero.css("position")!=="fixed"||(i.setY=r.scrollTop())}}),n(document).mousemove(function(e){if(i.ismove){var n=e.pageX-i.moveX,s=e.pageY-i.moveY;e.preventDefault();if(!t.moveOut){i.setY=r.scrollTop();var o=r.width()-i.move.outerWidth(),u=i.setY;n<0&&(n=0),n>o&&(n=o),s<u&&(s=u),s>r.height()-i.move.outerHeight()+i.setY&&(s=r.height()-i.move.outerHeight()+i.setY)}i.move.css({left:n,top:s}),t.moveType&&i.moveLayer(),n=s=o=u=null}}).mouseup(function(){try{i.ismove&&(i.moveLayer(),i.move.remove(),t.moveEnd&&t.moveEnd()),i.ismove=!1}catch(e){i.ismove=!1}}),e},o.pt.callback=function(){function o(){var t=r.cancel&&r.cancel(e.index);t===!1||s.close(e.index)}var e=this,t=e.layero,r=e.config;e.openLayer(),r.success&&(r.type==2?t.find("iframe").on("load",function(){r.success(t,e.index)}):r.success(t,e.index)),s.ie6&&e.IE6(t),t.find("."+u[6]).children("a").on("click",function(){var i=n(this).index(),u;if(r["btn"+(i+1)]){u=r["btn"+(i+1)](e.index,t);if(u===!1)return!1}i===0?r.yes?r.yes(e.index,t):s.close(e.index):i===1?o():r["btn"+(i+1)]||s.close(e.index)}),t.find("."+u[7]).on("click",o),r.shadeClose&&n("#layui-layer-shade"+e.index).on("click",function(){s.close(e.index)}),t.find(".layui-layer-min").on("click",function(){s.min(e.index,r),r.min&&r.min(t)}),t.find(".layui-layer-max").on("click",function(){n(this).hasClass("layui-layer-maxmin")?(s.restore(e.index),r.restore&&r.restore(t)):(s.full(e.index,r),r.full&&r.full(t))}),r.end&&(i.end[e.index]=r.end)},i.reselect=function(){n.each(n("select"),function(e,t){var r=n(this);r.parents("."+u[0])[0]||r.attr("layer")==1&&n("."+u[0]).length<1&&r.removeAttr("layer").show(),r=null})},o.pt.IE6=function(e){function s(){e.css({top:i+(t.config.fix?r.scrollTop():0)})}var t=this,i=e.offset().top;s(),r.scroll(s),n("select").each(function(e,t){var r=n(this);r.parents("."+u[0])[0]||r.css("display")==="none"||r.attr({layer:"1"}).hide(),r=null})},o.pt.openLayer=function(){var e=this;s.zIndex=e.config.zIndex,s.setTop=function(e){var t=function(){s.zIndex++,e.css("z-index",s.zIndex+1)};return s.zIndex=parseInt(e[0].style.zIndex),e.on("mousedown",t),s.zIndex}},i.record=function(e){var t=[e.outerWidth(),e.outerHeight(),e.position().top,e.position().left+parseFloat(e.css("margin-left"))];e.find(".layui-layer-max").addClass("layui-layer-maxmin"),e.attr({area:t})},i.rescollbar=function(e){u.html.attr("layer-full")==e&&(u.html[0].style.removeProperty?u.html[0].style.removeProperty("overflow"):u.html[0].style.removeAttribute("overflow"),u.html.removeAttr("layer-full"))},e.layer=s,s.getChildFrame=function(e,t){return t=t||n("."+u[4]).attr("times"),n("#"+u[0]+t).find("iframe").contents().find(e)},s.getFrameIndex=function(e){return n("#"+e).parents("."+u[4]).attr("times")},s.iframeAuto=function(e){if(!e)return;var t=s.getChildFrame("html",e).outerHeight(),r=n("#"+u[0]+e),i=r.find(u[1]).outerHeight()||0,o=r.find("."+u[6]).outerHeight()||0;r.css({height:t+i+o}),r.find("iframe").css({height:t})},s.iframeSrc=function(e,t){n("#"+u[0]+e).find("iframe").attr("src",t)},s.style=function(e,t){var r=n("#"+u[0]+e),s=r.attr("type"),o=r.find(u[1]).outerHeight()||0,a=r.find("."+u[6]).outerHeight()||0;if(s===i.type[1]||s===i.type[2])r.css(t),s===i.type[2]&&r.find("iframe").css({height:parseFloat(t.height)-o-a})},s.min=function(e,t){var r=n("#"+u[0]+e),o=r.find(u[1]).outerHeight()||0;i.record(r),s.style(e,{width:180,height:o,overflow:"hidden"}),r.find(".layui-layer-min").hide(),r.attr("type")==="page"&&r.find(u[4]).hide(),i.rescollbar(e)},s.restore=function(e){var t=n("#"+u[0]+e),r=t.attr("area").split(","),o=t.attr("type");s.style(e,{width:parseFloat(r[0]),height:parseFloat(r[1]),top:parseFloat(r[2]),left:parseFloat(r[3]),overflow:"visible"}),t.find(".layui-layer-max").removeClass("layui-layer-maxmin"),t.find(".layui-layer-min").show(),t.attr("type")==="page"&&t.find(u[4]).show(),i.rescollbar(e)},s.full=function(e){var t=n("#"+u[0]+e),o;i.record(t),u.html.attr("layer-full")||u.html.css("overflow","hidden").attr("layer-full",e),clearTimeout(o),o=setTimeout(function(){var n=t.css("position")==="fixed";s.style(e,{top:n?0:r.scrollTop(),left:n?0:r.scrollLeft(),width:r.width(),height:r.height()}),t.find(".layui-layer-min").hide()},100)},s.title=function(e,t){var r=n("#"+u[0]+(t||s.index)).find(u[1]);r.html(e)},s.close=function(e){var t=n("#"+u[0]+e),r=t.attr("type");if(!t[0])return;if(r===i.type[1]&&t.attr("conType")==="object"){t.children(":not(."+u[5]+")").remove();for(var o=0;o<2;o++)t.find(".layui-layer-wrap").unwrap().hide()}else{if(r===i.type[2])try{var a=n("#"+u[4]+e)[0];a.contentWindow.document.write(""),a.contentWindow.close(),t.find("."+u[5])[0].removeChild(a)}catch(f){}t[0].innerHTML="",t.remove()}n("#layui-layer-moves, #layui-layer-shade"+e).remove(),s.ie6&&i.reselect(),i.rescollbar(e),n(document).off("keydown",i.enter),typeof i.end[e]=="function"&&i.end[e](),delete i.end[e]},s.closeAll=function(e){n.each(n("."+u[0]),function(){var t=n(this),r=e?t.attr("type")===e:1;r&&s.close(t.attr("times")),r=null})},i.run=function(){n=jQuery,r=n(e),u.html=n("html"),s.open=function(e){var t=new o(e);return t.index}},"function"==typeof define?define(["jquery"],function(){return i.run(),s}):function(){i.run()}()}(window),!function(){layer.layui_layer_extendlayerextjs=!0;var e=layer.cache||{},t=function(t){return e.skin?" "+e.skin+" "+e.skin+"-"+t:""};layer.prompt=function(e,n){e=e||{},typeof e=="function"&&(n=e);var r,i=e.formType==2?'<textarea class="layui-layer-input">'+(e.value||"")+"</textarea>":function(){return'<input type="'+(e.formType==1?"password":"text")+'" class="layui-layer-input" value="'+(e.value||"")+'">'}();return layer.open($.extend({btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],content:i,skin:"layui-layer-prompt"+t("prompt"),success:function(e){r=e.find(".layui-layer-input"),r.focus()},yes:function(t){var i=r.val();i===""?r.focus():i.length>(e.maxlength||500)?layer.tips("&#x6700;&#x591A;&#x8F93;&#x5165;"+(e.maxlength||500)+"&#x4E2A;&#x5B57;&#x6570;",r,{tips:1}):n&&n(i,t,r)}},e))},layer.tab=function(e){e=e||{};var n=e.tab||{};return layer.open($.extend({type:1,skin:"layui-layer-tab"+t("tab"),title:function(){var e=n.length,t=1,r="";if(e>0){r='<span class="layui-layer-tabnow">'+n[0].title+"</span>";for(;t<e;t++)r+="<span>"+n[t].title+"</span>"}return r}(),content:'<ul class="layui-layer-tabmain">'+function(){var e=n.length,t=1,r="";if(e>0){r='<li class="layui-layer-tabli xubox_tab_layer">'+(n[0].content||"no content")+"</li>";for(;t<e;t++)r+='<li class="layui-layer-tabli">'+(n[t].content||"no  content")+"</li>"}return r}()+"</ul>",success:function(e){var t=e.find(".layui-layer-title").children(),n=e.find(".layui-layer-tabmain").children();t.on("mousedown",function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0;var t=$(this),r=t.index();t.addClass("layui-layer-tabnow").siblings().removeClass("layui-layer-tabnow"),n.eq(r).show().siblings().hide()})}},e))},layer.photos=function(e,n,r){function c(e,t,n){var r=new Image;r.onload=function(){r.onload=null,t(r)},r.onerror=function(e){r.onerror=null,n(e)},r.src=e}var i={};e=e||{};if(!e.photos)return;var s=e.photos.constructor===Object,o=s?e.photos:{},u=o.data||[],a=o.start||0;i.imgIndex=a+1;if(!s){var f=$(e.photos),l=f.find(e.img||"img");if(l.length===0)return;n||l.each(function(t){var n=$(this);u.push({alt:n.attr("alt"),pid:n.attr("layer-pid"),src:n.attr("layer-src")||n.attr("src"),thumb:n.attr("src")}),n.on("click",function(){layer.photos($.extend(e,{photos:{start:t,data:u,tab:e.tab},full:e.full}),!0)})});if(!n)return}else if(u.length===0){layer.msg("&#x6CA1;&#x6709;&#x56FE;&#x7247;");return}i.imgprev=function(e){i.imgIndex--,i.imgIndex<1&&(i.imgIndex=u.length),i.tabimg(e)},i.imgnext=function(e,t){i.imgIndex++;if(i.imgIndex>u.length){i.imgIndex=1;if(t)return}i.tabimg(e)},i.keyup=function(e){if(!i.end){var t=e.keyCode;e.preventDefault(),t===37?i.imgprev(!0):t===39?i.imgnext(!0):t===27&&layer.close(i.index)}},i.tabimg=function(t){if(u.length<=1)return;o.start=i.imgIndex-1,layer.close(i.index),layer.photos(e,!0,t)},i.event=function(){i.bigimg.hover(function(){i.imgsee.show()},function(){i.imgsee.hide()}),i.bigimg.find(".layui-layer-imgprev").on("click",function(e){e.preventDefault(),i.imgprev()}),i.bigimg.find(".layui-layer-imgnext").on("click",function(e){e.preventDefault(),i.imgnext()}),$(document).on("keyup",i.keyup)},i.loadi=layer.load(1,{shade:"shade"in e?!1:.9,scrollbar:!1}),c(u[a].src,function(n){layer.close(i.loadi),i.index=layer.open($.extend({type:1,area:function(){var t=[n.width,n.height],r=[$(window).width()-100,$(window).height()-100];return!e.full&&t[0]>r[0]&&(t[0]=r[0],t[1]=t[0]*r[1]/t[0]),[t[0]+"px",t[1]+"px"]}(),title:!1,shade:.9,shadeClose:!0,closeBtn:!1,move:".layui-layer-phimg img",moveType:1,scrollbar:!1,moveOut:!0,shift:Math.random()*5|0,skin:"layui-layer-photos"+t("photos"),content:'<div class="layui-layer-phimg"><img src="'+u[a].src+'" alt="'+(u[a].alt||"")+'" layer-pid="'+u[a].pid+'">'+'<div class="layui-layer-imgsee">'+(u.length>1?'<span class="layui-layer-imguide"><a href="javascript:;" class="layui-layer-iconext layui-layer-imgprev"></a><a href="javascript:;" class="layui-layer-iconext layui-layer-imgnext"></a></span>':"")+'<div class="layui-layer-imgbar" style="display:'+(r?"block":"")+'"><span class="layui-layer-imgtit"><a href="javascript:;">'+(u[a].alt||"")+"</a><em>"+i.imgIndex+"/"+u.length+"</em></span></div>"+"</div>"+"</div>",success:function(t,n){i.bigimg=t.find(".layui-layer-phimg"),i.imgsee=t.find(".layui-layer-imguide,.layui-layer-imgbar"),i.event(t),e.tab&&e.tab(u[a],t)},end:function(){i.end=!0,$(document).off("keyup",i.keyup)}},e))},function(){layer.close(i.loadi),layer.msg("&#x5F53;&#x524D;&#x56FE;&#x7247;&#x5730;&#x5740;&#x5F02;&#x5E38;<br>&#x662F;&#x5426;&#x7EE7;&#x7EED;&#x67E5;&#x770B;&#x4E0B;&#x4E00;&#x5F20;&#xFF1F;",{time:3e4,btn:["下一张","不看了"],yes:function(){u.length>1&&i.imgnext(!0,!0)}})})}}();
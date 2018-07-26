define(["position","tpl/tabsCard/tabsCard","tpl/tabsCard/tabsUnit","oasisUf","lodash"],function(e,t,n){"use strict";$.oasUiFactory("oasTabsCard",{VERSION:"1.0.0",options:{width:"auto",height:"auto",tabsCardHead:{title:"",isCopyBtn:!1,isCloseBtn:!0},tabsCardBody:{},tabsCardFooter:{btns:[]},trigger:"click",direction:"bottom",focusoutClose:!0,hoverDelay:2e3,delay:100,container:!1,offset:[0,0]},_create:function(){var e=this.options,t=this;this._initEvent()},_initEvent:function(){var e=this.options,t=this,n=e.trigger,r=this.options.hoverDelay;n&&(n==="click"?this.$el.on("click."+this.uiName,this.$el,function(e){t._toggle.call(t,$(e.target))}):(this.$el.on("mouseenter."+this.uiName,this.$el,function(){t._enter()}),this.$el.on("mouseleave."+this.uiName,this.$el,function(){t._leave(r)})))},_initRelativeEvent:function(e){var t=this,n=0,r=this.options,i=r.hoverDelay,s=r.trigger,o=r.tabsCardFooter,u;e.on("click."+this.uiName,".oas-tabsCard-title .delete-btn",function(){t._toggle()}),e.on("click."+this.uiName,".oas-tabsCard-title .copy-btn",function(){t._emit("copy",[t.$el,t.relativeDom])}),e.on("click."+this.uiName,".oas-tabsCard-tabs .oas-tabs-hd li",function(){var e=$(this).index();$(this).siblings().removeClass("current").end().addClass("current"),t._changetab(e),t._emit("tabChange",[e,t.$el,t.relativeDom])}),s=="hover"&&(e.on("mouseenter."+this.uiName,this.$el,function(){t._enter()}),e.on("mouseleave."+this.uiName,this.$el,function(){t._leave(i)}));if(o&&o.btns){var a=0;e.on("click."+this.uiName,"button:not('.disabled')",function(){a=$(this).index(),u=o.btns[a].callback||"",_.isFunction(u)&&u.apply(null,[t.$el,e])})}n=t._getCurrentIndex(),e.find("li").eq(n).trigger("click")},_toggle:function(){var e=this.options;this.status=this.status||!1,this.status?this._closeTabsCard():this._openTabsCard()},_enter:function(){var e=this;e.hoverTimeoutId_End&&clearTimeout(e.hoverTimeoutId_End),e.openTimeout&&clearTimeout(e.openTimeout),e.closeTimeout&&clearTimeout(e.closeTimeout),e.hoverTimeoutId_Start=setTimeout(function(){e.status?0:e._openTabsCard()},0)},_leave:function(e){var t=this;t.hoverTimeoutId_Start&&clearTimeout(t.hoverTimeoutId_Start),t.openTimeout&&clearTimeout(t.openTimeout),t.closeTimeout&&clearTimeout(t.closeTimeout),t.hoverTimeoutId_End=setTimeout(function(){t.status?t._closeTabsCard():0},e)},_openTabsCard:function(){var e=this,t=this.options,n=t.delay,r=t.direction,i=this.relativeDom=$("<div class='oas-tabsCard'></div>");i.append(e._getRenderDom()),this._emit("show",[this.$el,this.relativeDom]),this.closeTimeout&&clearTimeout(this.closeTimeout),this.openTimeout=setTimeout(function(){e.options.container?i.appendTo(e.options.container):i.insertAfter(e.$el),e._adjustBox(i),e._setPosition(e.$el,i,t.direction),e._initRelativeEvent(i),e.status=!0,this.relativeDom=i,e._emit("shown",[e.$el,this.relativeDom])},n)},_closeTabsCard:function(){this._emit("hide",[this.$el,this.relativeDom]);var e=this,t=this.options,n=this.options.delay;this.openTimeout&&clearTimeout(e.openTimeout),this.closeTimeout=setTimeout(function(){e.relativeDom&&e.relativeDom.remove(),e.status=!1,e._emit("hidden",[e.$el,this.relativeDom]),e.relativeDom=null},n)},_adjustBox:function(e){var t=this.options,n=e.outerWidth(),r=t.height,i=e.find(".oas-tabsCard-title").outerHeight(),s=e.find(".oas-tabsCard-footer").outerHeight();n<t.width&&e.outerWidth(t.width),r=r>i+s+50?r:i+s+50,t.height!="auto"&&(e.outerHeight(r),e.find(".oas-tabsCard-content").outerHeight(t.height-i-s))},_getRenderDom:function(){var e=this.$el.attr("data-card-title");return e&&(this.options.tabsCardHead.title=e),$(t({data:this.options}))},_getCurrentIndex:function(){var e=this.options,t=e.tabsCardBody&&e.tabsCardBody.tabs,n;return t?$.each(t,function(e,t){t.selected?n=e:0}):n=0,n},_changetab:function(e){var t=this,r=this.options,i=r.tabsCardBody.tabs,s=i[e];s&&this.relativeDom.find(".oas-tabs-bd").html(n({data:s}))},_setPosition:function(t,n,r){var i=this.options.offset,s=e.getPosition(t,n,r),o=s.top,u=s.left,a=t.outerWidth(),f=t.outerHeight(),l=t.offset().top,c=t.offset().left,h={height:$(window).height(),width:$(window).width(),scrollTop:$(window).scrollTop(),scrollLeft:$(window).scrollLeft()},p=n.outerWidth(),d=n.outerHeight();if(h.width+h.scrollLeft-u-p<0&&!(u<p))switch(r){case"bottom":s.left=u-p/2+a/2;break;case"top":s.left=u-p/2+a/2;break;case"right":s.left=u-p-a-20}if(h.height+h.scrollTop-o-d<0&&!(o<d))switch(r){case"bottom":s.top=o-d-f-20;break;case"left":s.top=o-d/2+f/2;break;case"right":s.top=o-d/2+f/2}if(h.height+h.scrollTop-o-d<0&&h.width+h.scrollLeft-u-p<0&&!(o<d))switch(r){case"bottom":s.top=o-d-f-20,s.left=u-p/2+a/2;break;case"left":s.top=o-d/2+f/2;break;case"right":s.top=o-d/2+f/2,s.left=u-p-a-20;break;case"top":s.top=o-d/2+f/2,s.left=u-p/2+a/2}if(c<p){switch(r){case"left":s.left=c+a+10;break;case"bottom":s.left=c;break;case"top":s.left=c}if(c>p/2)switch(r){case"bottom":s.left=e.getPosition(t,n,r).left;break;case"top":s.left=e.getPosition(t,n,r).left}}if(l<d){switch(r){case"top":s.top=l+f+10;break;case"left":s.top=l;break;case"right":s.top=l}if(l>d/2)switch(r){case"left":s.top=e.getPosition(t,n,r).top;break;case"right":s.top=e.getPosition(t,n,r).top}}_.isNumber(parseInt(i[0]))&&(s.top+=i[0]),_.isNumber(parseInt(i[1]))&&(s.left+=i[1]),n.offset(s)},invoke:{hide:function(){this._closeTabsCard()},show:function(){this.relativeDom||this._openTabsCard()},content:function(e){this.options.tabsCardBody&&(this.options.tabsCardBody.content=e,this.relativeDom.find(".oas-tabsCard-content").html(e))},setBtnDisabled:function(e,t){var n=this.relativeDom.find(".oas-tabsCard-footer button").eq(e);t?n.addClass("disabled"):n.removeClass("disabled")},setCardTitle:function(e){this.options.tabsCardHead.title=e,this.relativeDom.find(".oas-tabsCard-title h3").html(e)},tabsCardBody:function(e){this.options.tabsCardBody=e,this.relativeDom.html(t({data:this.options}));var n=this._getCurrentIndex();this.relativeDom.find("li").eq(n).trigger("click"),this._adjustBox(this.relativeDom),this._setPosition(this.$el,this.relativeDom,this.options.direction)},tabsCardFooter:function(e){this.options.tabsCardFooter=e,this.relativeDom.html(t({data:this.options}));var n=this._getCurrentIndex();this.relativeDom.find("li").eq(n).trigger("click"),this._adjustBox(this.relativeDom),this._setPosition(this.$el,this.relativeDom,this.options.direction)}}})});
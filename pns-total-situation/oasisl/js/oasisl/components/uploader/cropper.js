define(["cropper","oasDialog"],function(e,t){var n=function(){function s(e,t){typeof r=="undefined"&&function(){var t=new Image,n=!0;t.onload=t.onerror=function(){if(this.width!=1||this.height!=1)n=!1},t.src=e,r=n}(),r?t(e):$.ajax("../../server/preview.php",{method:"POST",data:e,dataType:"json"}).done(function(e){e.result?t(e.result):alert("Ԥ������")})}var e=$(".cropper-wraper"),t=e.find(".img-container img"),n=$(".upload-btn"),r,i;return t.cropper({aspectRatio:16/9,preview:".img-preview",done:function(e){}}),n.on("click",function(){return i&&i(t.cropper("getData")),!1}),{setSource:function(n){return s(n,function(e){t.cropper("setImgSrc",e)}),e.removeClass("webuploader-element-invisible"),this},getImageSize:function(){var e=t.get(0);return{width:e.naturalWidth,height:e.naturalHeight}},setCallback:function(e){return i=e,this},disable:function(){return t.cropper("disable"),this},enable:function(){return t.cropper("enable"),this}}}()});
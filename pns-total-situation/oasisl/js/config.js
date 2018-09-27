requirejs.config({baseUrl:"/oasisl/js/",paths:{jquery:"lib/jquery/1.8.3/jquery",bs:"lib/bootstrap/3.2.0/bootstrap","bs-datepick":"plugins/bs-datetimepicker/bs-datetimepicker",layer:"plugins/layer/layer",umeditor:"plugins/umeditor/umeditor",umlang:"plugins/umeditor/lang/zh-cn",umconfig:"plugins/umeditor/umeditor.config",zeroclipboard:"plugins/umeditor/third-party/zeroclipboard/ZeroClipboard.min",webuploader:"plugins/webuploader/webuploader.nolog",cropper:"plugins/webuploader/cropper/cropper",cookie:"plugins/jquery-cookie/jquery-cookie",path:"plugins/path/path",lodash:"plugins/lodash/lodash",nprogress:"plugins/nprogress/nprogress",validate:"plugins/jquery-validate/jquery.validate",util:"oasisl/base/util/index",ajax:"oasisl/base/ajax/index",oasisUf:"oasisl/base/uifactory/index",position:"oasisl/base/position/index",form:"oasisl/base/form/index",oasDialog:"oasisl/components/dialog/index",oasEventAction:"oasisl/base/eventAction/eventAction",oasToolTip:"oasisl/components/tooltip/index",oasPopover:"oasisl/components/popover/index",oasDropdown:"oasisl/components/dropdown/index",oasUploader:"oasisl/components/uploader/index",oasPagin:"oasisl/components/pagin/index",oasSticky:"oasisl/components/sticky/index",oasFilter:"oasisl/components/filter/index",oasScrollspy:"oasisl/components/scrollspy/index",oasCollapse:"oasisl/components/collapse/index",transition:"oasisl/components/collapse/transition",oasFormtip:"oasisl/components/formtip/index",oasFormTip:"oasisl/components/formtip/index",oasNumberRoll:"oasisl/components/numberRoll/index",oasInput:"oasisl/components/placeholder/index",oasCalendar:"oasisl/components/calendar/index",oasGrid:"oasisl/components/grid/index",oasSelect:"oasisl/components/select/index",oasTree:"oasisl/components/tree/index",oasGuide:"oasisl/components/guide/index",oasValidate:"oasisl/components/validate/index",oasForm:"oasisl/components/form/index",oasGridTree:"oasisl/components/gridTree/index",global:"oasisl/base/global/index",oasTabsCard:"oasisl/components/tabsCard/index",oasThinkInput:"oasisl/components/thinkInput/index",oasOperate:"oasisl/components/operate/index",oasOverlay:"oasisl/components/overlay/index",oasMap:"plugins/oasis-map/index",Position:"oasisl/components/position/index",tpl:"oasisl/tpls/",template:"lib/template/template",viewTpl:"/assets/template",busCommon:"/assets/js/common"},map:{"*":{css:"lib/require/css/css.min",text:"lib/require/text"}},shim:{jquery:{exports:"jQuery"},nprogress:{deps:["css!plugins/nprogress/nprogress"]},umeditor:{exports:"UM",deps:["umconfig","css!plugins/umeditor/themes/default/css/umeditor.min"]},path:{exports:"path"},umlang:{deps:["umeditor"]},layer:{deps:["css!plugins/layer/skin/layer.css"]},webuploader:{exports:"Webuploader",deps:["jquery","css!plugins/webuploader/webuploader"]},cropper:{deps:["css!plugins/webuploader/cropper/cropper"]}}});
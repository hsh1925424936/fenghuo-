// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
Vue.config.productionTip = false
// function resize(){
//   var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
//   if(clientWidth >= 320 && clientWidth <= 768){
//     document.documentElement.style.fontSize = clientWidth / 20 +'px'
//   }else if(clientWidth < 320){
//     document.documentElement.style.fontSize = '16px'
//   }else if(clientWidth > 768){
//     document.documentElement.style.fontSize = '38.4px'
//   }
// }
// window.onresize = function(){
//   resize();
// }
// window.onload = function(){
//   resize();
// }
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueLazyload from 'vue-lazyload'
import { Lazyload } from 'mint-ui';




Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(MintUI);
Vue.use(Lazyload);
Vue.use(VueLazyload);


Vue.use(VueLazyload,{
  error:"static/img/loading_v2.gif",
  loading:"static/img/jop.jpg",
  attempt:3
});



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

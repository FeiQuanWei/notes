import Vue from 'vue'
import App from './App'
import router from './router'
import 'babel-polyfill'
import fastclick from 'fastclick'
import './common/stylus/index.styl'
import VuelazyLoad from 'vue-lazyload'
import store from './store'
Vue.config.productionTip = false

fastclick.attach(document.body)
Vue.use(VuelazyLoad, {
  loading: require('common/image/default.png')
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

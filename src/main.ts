// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import YDUI from 'vue-ydui' /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
// import 'vue-ydui/dist/ydui.rem.css'
import vuex from 'vuex'
import VueAxios from 'vue-axios'
// import VueAuthenticate from 'vue-authenticate'
import axios from 'axios'
import store from './store/store'
// import MintUI from 'mint-ui'/
// import 'mint-ui/lib/style.css'
// var VueTouch = require('vue-touch')

Vue.config.productionTip = false
// Vue.use(YDUI)
// Vue.use(MintUI)
// Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(VueAxios, axios, vuex)
// Vue.use(VueAuthenticate, {
//   baseUrl: 'https://diycode.cc/api/v3',
//   providers: {
//   }
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

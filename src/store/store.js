import Vuex from 'vuex'
import Vue from 'vue'
import UsersModule from './modules/userModule'
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules: {
    userLogin: UsersModule
  },
  strict: debug // 是否开启严格模式
})

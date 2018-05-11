import Vuex from 'vuex'
import Vue from 'vue'
import users from './modules/userModule'
Vue.use(Vuex)
// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    users: users
  }
  // strict: debug // 是否开启严格模式
})

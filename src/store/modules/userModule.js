// import Vue from "vue";
import axios from 'axios'

export default {
  state: {
    userToken: {}
  },
  mutations: {
    setToken (state, accessToken) {
      localStorage.setItem('access_token', accessToken)
      state.userToken = accessToken
    }
  },
  actions: {
    login (context, {username, password}) {
      let params = {
        client_id: 'd484a494', // 客户端id 暂时不知道怎么安全存放
        client_secret: '7a4464eb952cd3ab39a52dcf884c03bf0c276bb9104cf703f954ed1fca4f4adc', // 私钥 暂时不知道怎么存放
        grant_type: 'password',
        username: username,
        password: password
      }
      return new Promise((resolve, reject) => {
        axios.post('https://diycode.cc/oauth/token', params)
          .then((response) => {
            if (response.status === 200 && response.statusText === 'OK') {
              context.commit('setToken', {'access_token': response.data.access_token})
            }
            resolve(response)
          }).catch((response) => {
            reject(response)
          })
      })
    }
  }
}

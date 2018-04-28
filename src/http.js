'use strict'

import axios from 'axios'
import store from './store/store.js'
import qs from 'qs'

axios.defaults.timeout = 5000
axios.defaults.baseURL = 'https://diycode.cc/api/v3'

axios.interceptors.request.use(config => {
  if (store.state.userLogin.userToken) {
    config.headers.Authorization = `access_token${store.state.userLogin.userToken}`
  }
  return config
}, error => {
  return Promise.reject(error)
})
// http request 拦截器
axios.interceptors.response.use(response => {
  return response
}, error => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        break
      default:
        break
    }
  }
  return Promise.resolve(error.response)
})

function checkStatus (response) {
  // loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response
  }
  return {
    status: -404,
    msg: '网络异常'
  }
}

function checkCode (res) {
  if (res.status === -404) {
  }
  return res
}

export default {
  post (url, data) {
    return axios({
      method: 'post',
      baseURL: axios.defaults.baseURL,
      url,
      data: qs.stringify(data),
      timeout: axios.defaults.timeout,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  },
  get (url, params) {
    return axios({
      method: 'get',
      baseURL: axios.defaults.baseURL,
      url,
      params, // get 请求时带的参数
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  }
}

'use strict'

import axios from 'axios'
import store from './store/store.js'
import * as types from './store/types'
import qs from 'qs'
import router from './router/index.js'

axios.defaults.timeout = 5000
axios.defaults.baseURL = 'https://diycode.cc/api/v3'

axios.interceptors.request.use(config => {
  if (store.state.token) {
    config.headers.Authorization = `access_token${store.state.token}`
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
        store.commit(types.LOGOUT)
        router.replace({
          path: 'login',
          query: {redirect: router.currentRoute.fullPath}
        })
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
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  // 异常状态下，把错误信息返回去
  return {
    status: -404,
    msg: '网络异常'
  }
}

function checkCode (res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.status === -404) {
    alert(res.msg)
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

<template>
  <div class="bg">
    <yd-navbar title="登录"></yd-navbar>
    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">用户名：</span>
        <yd-input slot="right" required v-model="username" max="20" placeholder="请输入用户名"></yd-input>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">密码：</span>
        <yd-input slot="right" type="password" v-model="password" placeholder="请输入密码"></yd-input>
      </yd-cell-item>
    </yd-cell-group>
    <yd-button-group>
      <yd-button size="large" @click.native="login">登录</yd-button>
    </yd-button-group>
  </div>
</template>
<script lang='ts'>
import Vue from 'vue'
// import * as types from '../store/types'
export default Vue.extend({
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', {'username': this.username, 'password': this.password})
        .then(response => {
          if (response.status === 200) {
            this.$router.push('/')
          } else {
            this.$dialog.notify({
              mes: response.data.error_description,
              timeout: 3000
            })
          }
        }).catch(response => {
          console.log(response)
        })
    }
  }
})
</script>
<style>
  .bg {
    width: 100%;
    height: 100%;
    background-color: white;
  }
</style>

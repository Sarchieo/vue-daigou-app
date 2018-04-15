<template>
  <div>
    <yd-slider autoplay="3000">
      <yd-slider-item>
        <a href="http://www.ydcss.com">
          <img src="http://img.ivsky.com/img/bizhi/pre/201801/21/darling_in_the_franxx-002.jpg">
        </a>
      </yd-slider-item>
      <yd-slider-item>
        <a href="http://www.ydcss.com">
          <img src="http://img.ivsky.com/img/bizhi/pre/201801/21/darling_in_the_franxx-012.jpg">
        </a>
      </yd-slider-item>
      <yd-slider-item>
        <a href="http://www.ydcss.com">
          <img src="http://img.ivsky.com/img/bizhi/pre/201801/21/darling_in_the_franxx-010.jpg">
        </a>
      </yd-slider-item>
    </yd-slider>
    <yd-list theme="5">
      <!--<yd-list-item v-for="item, key in list" :key="key" style="height: 5rem">-->
        <!--<img  slot="img" :src="item.img">-->
        <!--<span slot="title">{{item.title}}</span>-->
        <!--<yd-list-other slot="other">-->

        <!--</yd-list-other>-->
      <!--</yd-list-item>-->
    </yd-list>
  </div>
</template>
<script>
import axios from 'axios'
import http from '../../http'
// import qs from 'qs'
export default{
  data () {
    return {
      list: [
        {img: 'http://img.ivsky.com/img/bizhi/pre/201801/21/darling_in_the_franxx-001.jpg'},
        {img: 'http://img.ivsky.com/img/bizhi/pre/201801/21/darling_in_the_franxx-008.jpg'},
        {img: 'http://img.ivsky.com/img/bizhi/pre/201801/21/darling_in_the_franxx-013.jpg'},
        {img: 'http://img.ivsky.com/img/bizhi/pre/201801/21/jiandui_collection-002.jpg'}
      ]
    }
  },
  methods: {

    login: function () {
      let params = {
        client_id: 'd484a494',
        client_secret: '7a4464eb952cd3ab39a52dcf884c03bf0c276bb9104cf703f954ed1fca4f4adc',
        grant_type: 'password',
        username: 'hxbnzy@gmail.com',
        password: 'az4821483'
      }
      axios.post('https://diycode.cc/oauth/token', params)
        .then(response => {
          console.log(response)
        })
        .catch(err => {
          console.log(err)
        })
    },
    news: function () {
      let params = {
        offset: '0',
        limit: '20',
        access_token: 'a3d02c41b3807909ce8a47a8c2b1f7ce023c4fdbcdbd43dda55e6f447239578e'
      }
      http.get('https://diycode.cc/api/v3/news.json', params)
        .then(response => {
          console.log(response)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted: function () {
    //    this.login(function (response) {
    //      console.log(response)
    //    })
    this.news(function (response) {
      console.log(response)
    })
  }
}
</script>
<style>

</style>

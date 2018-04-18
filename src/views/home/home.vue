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
    // 获取news分类列表
    newsNodes: function () {
      http.get('/news/nodes.json')
        .then(response => {
          this.$dialog.notify({
            mes: '分类列表获取成功',
            timeout: 3000
          })
          console.log(response)
        })
        .catch(err => {
          this.$dialog.notify({
            mes: 'news分类列表获取失败 error:' + err,
            timeout: 3000
          })
        })
    }
  },
  mounted: function () {
    this.newsNodes()
  }
}
</script>
<style>

</style>

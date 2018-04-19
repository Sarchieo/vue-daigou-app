<template>
  <div>
    <yd-tab horizontal-scroll>
      <yd-tab-panel label="Android"></yd-tab-panel>
      <yd-tab-panel label="iOS"></yd-tab-panel>
      <yd-tab-panel label="Swift"></yd-tab-panel>
      <yd-tab-panel label="React"></yd-tab-panel>
      <yd-tab-panel label="Ruby"></yd-tab-panel>
      <yd-tab-panel label="PHP"></yd-tab-panel>
      <yd-tab-panel label="F2E"></yd-tab-panel>
      <yd-tab-panel label="Node"></yd-tab-panel>
      <yd-tab-panel label="VR"></yd-tab-panel>
      <yd-tab-panel label="Machine Learning"></yd-tab-panel>
      <yd-tab-panel label="Interesting"></yd-tab-panel>
      <yd-tab-panel label="Product"></yd-tab-panel>
    </yd-tab>
    <transition>
      <router-view></router-view>
    </transition>
  </div>

</template>
<script>
import http from '../../http'
// import qs from 'qs'
export default{
  data () {
    return {
      nodes: []
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
          this.nodes = response.data
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

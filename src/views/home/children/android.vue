<template>
  <div>
    <div style="width:100%;height: 100%;background-color: aqua">
      <mt-cell title="标题文字" icon="more" value="带 icon"></mt-cell>
      <mt-cell title="标题文字" icon="more" value="带 icon"></mt-cell>
      <mt-cell title="标题文字" icon="more" value="带 icon"></mt-cell>
    </div>
  </div>

</template>
<script>
import http from '../../../http'
export default{
  data () {
    return {
    }
  },
  methods: {
    // 获取news列表
    newsList: function () {
      let params = {
        node_id: this.node_id
      }
      http.get('/news.json', params)
        .then(response => {
          if (response.status === -404) {
            this.$dialog.notify({
              mes: 'news分类列表获取失败 error:' + response.msg,
              timeout: 3000
            })
          }
          console.log(response)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.newsList()
  }
}
</script>
<style>

</style>

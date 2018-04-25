<template>
  <div class="container">
    <div v-for="(item, index) in newList" :key="index">
      <!--<ul class="flex-container">{{item.title}}</ul>-->
      <div class="flex-container">
        <img class="avatar" :src="item.user.avatar_url"/>
        <div>
          <ul>{{item.title}}</ul>
          <ul>{{item.node_name}}</ul>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import http from '../../../http'
export default{
  data () {
    return {
      newList: [],
      node_id: 1
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
          this.newList = response.data
          console.log(this.newList)
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
  .container{
    width:100%;
    height: 100%;
    background-color: gainsboro;
  }
  .flex-container {
    margin-bottom: .1rem;
    background-color: white;
    display: flex;
    height: 2rem;
  }
  .avatar {
    margin: .2rem;
    width: 1rem;
    line-height: 2rem;
    height: 1rem;
  }
</style>

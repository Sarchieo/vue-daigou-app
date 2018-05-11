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
        })
        .catch(err => {
          console.log(err)
        })
    },
    loadTop () {
      this.$refs.loadmore.onTopLoaded()
    },
    loadBottom () {
      this.allLoaded = true// if all data are loaded
      this.$refs.loadmore.onBottomLoaded()
    }
  },
  created () {
    this.newsList()
    console.log('--------------------created执行了--------------------')
  },
  beforeCreate () {
    // 在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。
    console.log('--------------------beforeCreate执行了--------------------')
  },
  mounted () {
    // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。
    console.log('--------------------mounted执行了--------------------')
  },
  beforeUpdate () {
    // 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前
    // 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
    console.log('--------------------beforeUpdate执行了--------------------')
  },
  Update: function () {
    // 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
    // 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环。
    console.log('--------------------Update执行了--------------------')
  },

  // <keep-alive> 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。
  activated () {
    // keep-alive 组件激活时调用。
    console.log('--------------------activated执行了--------------------')
    this.newsList()
  },
  deactivated () {
    // keep-alive 组件停用时调用。
    console.log('--------------------deactivated执行了--------------------')
  },
  beforeDestroy () {
    // 实例销毁之前调用。在这一步，实例仍然完全可用。
    console.log('--------------------beforeDestroy执行了--------------------')
  },
  destroyed () {
    // Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。
    console.log('--------------------destroyed执行了--------------------')
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

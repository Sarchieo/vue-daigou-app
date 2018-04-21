<template>
  <!--<yd-layout>-->
  <div>
    <transition>
      <router-view></router-view>
    </transition>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="/" >
        <img slot="icon" src="../assets/jewelry.png">
        推荐
      </mt-tab-item>
      <mt-tab-item id="/favorite">
        <img slot="icon" src="../assets/favorite.png">
        收藏
      </mt-tab-item>
      <mt-tab-item id="/find">
        <img slot="icon" src="../assets/lights.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="/me">
        <img slot="icon" src="../assets/bussiness-man.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default{
  data () {
    return {
      selected: '/'
    }
  },
  watch: {
    selected: function (val, oldvar) {
      this.$router.push(val)
    }
  },
  methods: {}
}
</script>
<style>

</style>

<template>
  <yd-layout>
    <router-view></router-view>
    <yd-tabbar slot="tabbar">
      <yd-tabbar-item title="推荐" link="/home" active>
        <yd-icon name="home" slot="icon"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="购物车" link="#">
        <yd-icon name="shopcart-outline" slot="icon"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="个人中心" link="/me">
        <yd-icon name="ucenter-outline" slot="icon"></yd-icon>
      </yd-tabbar-item>
    </yd-tabbar>
  </yd-layout>
</template>
<script>
export default{
  data () {
    return {
      houseActive: true,
      keepActive: false,
      meActive: false
    }
  },
  methods: {}
}
</script>
<style>

</style>

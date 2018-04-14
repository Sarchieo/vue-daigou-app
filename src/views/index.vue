<template>
  <yd-layout>
    <!--<yd-navbar slot="navbar" title="首页"></yd-navbar>-->
    <yd-tabbar slot="tabbar">
      <yd-tabbar-item title="首页" link="#" active>
        <yd-icon name="home" slot="icon"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="购物车" link="#">
        <yd-icon name="shopcart-outline" slot="icon"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="个人中心" link="#">
        <yd-icon name="ucenter-outline" slot="icon"></yd-icon>
      </yd-tabbar-item>
    </yd-tabbar>
  </yd-layout>
</template>
<script>
export default{

}
</script>
<style>

</style>

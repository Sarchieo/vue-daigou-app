<template>
  <!--<yd-layout>-->
  <div class="container">
      <transition :name="transitionName">
        <keep-alive>
          <router-view class="child-view"></router-view>
        </keep-alive>
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
      selected: '/',
      transitionName: ''
    }
  },
  watch: {
    selected: function (val, oldvar) {
      this.$router.push(val)
    },
    $route (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>
<style>
  .container{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .child-view {
    position: absolute;
    left:0;
    top: 0;
    height: 100%;
    width: 100%;
    transition: all .5s cubic-bezier(.55,0,.1,1);
    background-color: #f2f2f2;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  /* 当child-view的内容过多时会撑开child-view使得内部能够滚动 */
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(750/@g, 0);
    transform: translate(750/@g, 0);
    transition-delay: .5s;
    -webkit-transition-delay: .5s;
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-750/@g, 0);
    transform: translate(-750/@g, 0);
    transition-delay: .5s;
    -webkit-transition-delay: .5s;
  }
  .slide-enter-active {
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
  }
  .slide-leave-active {
    -webkit-transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
</style>

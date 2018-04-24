<template>
  <div>
    <div class="swiper-container" id="nav" style="background-color: white">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <span style="color:rgba(255,72,145,1);">Android</span></div>
        <div class="swiper-slide">
          <span>iOS</span></div>
        <div class="swiper-slide">
          <span>Swift</span></div>
        <div class="swiper-slide">
          <span>React</span></div>
        <div class="swiper-slide">
          <span>Ruby</span></div>
        <div class="swiper-slide">
          <span>PHP</span></div>
        <div class="swiper-slide">
          <span>F2E</span></div>
        <div class="swiper-slide">
          <span>Node</span></div>
        <div class="swiper-slide">
          <span>VR</span></div>
        <div class="swiper-slide">
          <span>Machine</span></div>
        <div class="swiper-slide">
          <span>Interesting</span></div>
        <div class="swiper-slide">
          <span>Product</span></div>
        <div class="bar">
          <div class="color"></div>
        </div>
      </div>
    </div>
    <keep-alive>
      <router-view class="child-view"></router-view>
    </keep-alive>
  </div>

</template>
<script>
import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper'
// import qs from 'qs'
export default{
  data () {
    return {
      nodes: [],
      node_id: 1,
      tSpeed: 300, // 切换速度300ms
      navSum: null,
      clientWidth: null,
      navSlideWidth: null,
      navWidth: null,
      topBar: null,
      bar: null,
      childrenPage: [
        {name: 'android', url: '/'},
        {name: 'ios', url: '/ios'}
      ]
    }
  },
  methods: {
    jumpPage (index) {
      this.$router.push(this.childrenPage[index].url)
    }
  },
  created: function () {
  },
  mounted: function () {
    let seif = this
    var navSwiper = new Swiper('#nav', {
      slidesPerView: 6,
      freeMode: true,
      on: {
        init: function () {
          seif.navSlideWidth = this.slides.eq(0).css('width') // 导航字数需要统一,每个导航宽度一致
          seif.bar = this.$el.find('.bar')
          seif.bar.css('width', seif.navSlideWidth)
          seif.bar.transition(seif.tSpeed)
          seif.navSum = this.slides[this.slides.length - 1].offsetLeft // 最后一个slide的位置

          seif.clientWidth = parseInt(this.$wrapperEl.css('width')) // Nav的可视宽度
          seif.navWidth = 0
          for (let i = 0; i < this.slides.length; i++) {
            seif.navWidth += parseInt(this.slides.eq(i).css('width'))
          }
          this.topBar = this.$el.parents('body').find('#top') // 页头
        }
      }
    })
    navSwiper.$el.on('touchstart', function (e) {
      e.preventDefault() // 去掉按压阴影
    })
    navSwiper.on('tap', function (e) {
      let clickIndex = this.clickedIndex
      let clickSlide = this.slides.eq(clickIndex)
      let activeSlidePosition = navSwiper.slides[clickIndex].offsetLeft
      // 路由跳转
      seif.jumpPage(clickIndex)
      // 释放时导航粉色条移动过渡
      seif.bar.transition(seif.tSpeed)
      seif.bar.transform('translateX(' + activeSlidePosition + 'px)')
      // 释放时文字变色过渡
      navSwiper.slides.eq(clickIndex).find('span').transition(seif.tSpeed)
      navSwiper.slides.eq(clickIndex).find('span').css('color', 'rgba(255,72,145,1)')
      if (clickIndex > 0) {
        navSwiper.slides.eq(clickIndex - 1).find('span').transition(seif.tSpeed)
        navSwiper.slides.eq(clickIndex - 1).find('span').css('color', 'rgba(51,51,51,1)')
      }
      if (clickIndex < this.slides.length) {
        navSwiper.slides.eq(clickIndex + 1).find('span').transition(seif.tSpeed)
        navSwiper.slides.eq(clickIndex + 1).find('span').css('color', 'rgba(51,51,51,1)')
      }
      // 导航居中
      let navActiveSlideLeft = navSwiper.slides[clickIndex].offsetLeft // activeSlide距左边的距离

      navSwiper.setTransition(seif.tSpeed)
      if (navActiveSlideLeft < (seif.clientWidth - parseInt(seif.navSlideWidth)) / 2) {
        navSwiper.setTranslate(0)
      } else if (navActiveSlideLeft > seif.navWidth - (parseInt(seif.navSlideWidth) + seif.clientWidth) / 2) {
        navSwiper.setTranslate(seif.clientWidth - seif.navWidth)
      } else {
        navSwiper.setTranslate((seif.clientWidth - parseInt(seif.navSlideWidth)) / 2 - navActiveSlideLeft)
      }
      this.slides.find('span').css('color', 'rgba(51,51,51,1)')
      clickSlide.find('span').css('color', 'rgba(255,72,145,1)')
    })
  }
}
</script>
<style>
  #nav {
    border-bottom:1px solid #ebebeb;
  }
  #nav .swiper-slide span {
    margin: 0 5px;
    text-align: center;
    display: block;
    line-height: 3.0;
    font-size: 14px;
    color: #333333;
  }
  #nav .bar {
    width: 56px;
    height: 3px;
    position: absolute;
    bottom: 0px;
  }
  #nav .bar .color {
    width: 36px;
    margin:0 auto;
    height:3px;
    background:#ff4891;
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
</style>

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
    <div class="swiper-container" id="page">

      <!--<div class="swiper-wrapper">-->
        <!--<div class="swiper-slide slidepage">-->
          <!--<div class="swiper-container scroll">-->
            <!--<div class="swiper-wrapper">-->
              <!--<div class="swiper-slide slidescroll">-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="swiper-slide slidepage">-->
          <!--<div class="swiper-container scroll">-->
            <!--<div class="swiper-wrapper">-->
              <!--<div class="swiper-slide slidescroll">slide3</div></div>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="swiper-slide slidepage">-->
          <!--<div class="swiper-container scroll">-->
            <!--<div class="swiper-wrapper">-->
              <!--<div class="swiper-slide slidescroll">slide4</div></div>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="swiper-slide slidepage">-->
          <!--<div class="swiper-container scroll">-->
            <!--<div class="swiper-wrapper">-->
              <!--<div class="swiper-slide slidescroll">slide5</div></div>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="swiper-slide slidepage">-->
          <!--<div class="swiper-container scroll">-->
            <!--<div class="swiper-wrapper">-->
              <!--<div class="swiper-slide slidescroll">slide6</div></div>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="swiper-slide slidepage">-->
          <!--<div class="swiper-container scroll">-->
            <!--<div class="swiper-wrapper">-->
              <!--<div class="swiper-slide slidescroll">slide7</div></div>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="swiper-slide slidepage">-->
          <!--<div class="swiper-container scroll">-->
            <!--<div class="swiper-wrapper">-->
              <!--<div class="swiper-slide slidescroll">slide8</div></div>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="swiper-slide slidepage">-->
          <!--<div class="swiper-container scroll">-->
            <!--<div class="swiper-wrapper">-->
              <!--<div class="swiper-slide slidescroll">slide9</div></div>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="swiper-slide slidepage">-->
          <!--<div class="swiper-container scroll">-->
            <!--<div class="swiper-wrapper">-->
              <!--<div class="swiper-slide slidescroll">slide10</div></div>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="swiper-slide slidepage">-->
          <!--<div class="swiper-container scroll">-->
            <!--<div class="swiper-wrapper">-->
              <!--<div class="swiper-slide slidescroll">slide11</div></div>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="swiper-slide slidepage">-->
          <!--<div class="swiper-container scroll">-->
            <!--<div class="swiper-wrapper">-->
              <!--<div class="swiper-slide slidescroll">slide12</div></div>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="swiper-slide slidepage">-->
          <!--<div class="swiper-container scroll">-->
            <!--<div class="swiper-wrapper">-->
              <!--<div class="swiper-slide slidescroll">slide13</div></div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    </div>

  </div>

</template>
<script>
import http from '../../http'
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
      progress: null,
      slideProgress: null,
      activeIndex: null,
      bar: null
    }
  },
  methods: {
    // 获取news分类列表
    newsNodes: function () {
      http.get('/news/nodes.json')
        .then(response => {
          this.nodes = response.data
        })
        .catch(err => {
          this.$dialog.notify({
            mes: 'news分类列表获取失败 error:' + err,
            timeout: 3000
          })
        })
    },
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
  created: function () {
    this.newsNodes()
    this.newsList()
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
    var pageSwiper = new Swiper('#page', {
      watchSlidesProgress: true,
      resistanceRatio: 0,
      on: {
        touchMove: function () {
          seif.progress = this.progress
          seif.bar.transition(0)
          seif.bar.transform('translateX(' + seif.navSum * this.progress + 'px)')
          // 粉色255,72,145灰色51,51,51
          for (let i = 0; i < this.slides.length; i++) {
            this.slideProgress = this.slides[i].progress
            if (Math.abs(this.slideProgress) < 1) {
              let r = Math.floor((255 - 51) * (1 - Math.pow(Math.abs(this.slideProgress), 2)) + 51)
              let g = Math.floor((72 - 51) * (1 - Math.pow(Math.abs(this.slideProgress), 2)) + 51)
              let b = Math.floor((145 - 51) * (1 - Math.pow(Math.abs(this.slideProgress), 2)) + 51)
              navSwiper.slides.eq(i).find('span').css('color', 'rgba(' + r + ',' + g + ',' + b + ',1)')
            }
          }
        },
        transitionStart: function () {
          let activeIndex = this.activeIndex
          let activeSlidePosition = navSwiper.slides[activeIndex].offsetLeft
          // 释放时导航粉色条移动过渡
          seif.bar.transition(seif.tSpeed)
          seif.bar.transform('translateX(' + activeSlidePosition + 'px)')
          // 释放时文字变色过渡
          navSwiper.slides.eq(activeIndex).find('span').transition(seif.tSpeed)
          navSwiper.slides.eq(activeIndex).find('span').css('color', 'rgba(255,72,145,1)')
          if (activeIndex > 0) {
            navSwiper.slides.eq(activeIndex - 1).find('span').transition(seif.tSpeed)
            navSwiper.slides.eq(activeIndex - 1).find('span').css('color', 'rgba(51,51,51,1)')
          }
          if (activeIndex < this.slides.length) {
            navSwiper.slides.eq(activeIndex + 1).find('span').transition(seif.tSpeed)
            navSwiper.slides.eq(activeIndex + 1).find('span').css('color', 'rgba(51,51,51,1)')
          }
          // 导航居中
          let navActiveSlideLeft = navSwiper.slides[activeIndex].offsetLeft // activeSlide距左边的距离

          navSwiper.setTransition(seif.tSpeed)
          if (navActiveSlideLeft < (seif.clientWidth - parseInt(seif.navSlideWidth)) / 2) {
            navSwiper.setTranslate(0)
          } else if (navActiveSlideLeft > seif.navWidth - (parseInt(seif.navSlideWidth) + seif.clientWidth) / 2) {
            navSwiper.setTranslate(seif.clientWidth - seif.navWidth)
          } else {
            navSwiper.setTranslate((seif.clientWidth - parseInt(seif.navSlideWidth)) / 2 - navActiveSlideLeft)
          }
        }
      }
    })
    navSwiper.$el.on('touchstart', function (e) {
      e.preventDefault() // 去掉按压阴影
    })
    navSwiper.on('tap', function (e) {
      let clickIndex = this.clickedIndex
      let clickSlide = this.slides.eq(clickIndex)
      pageSwiper.slideTo(clickIndex, 0)
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
  .scroll {
    height:100%;
  }
  .slidescroll {
    height:auto;
  }
</style>

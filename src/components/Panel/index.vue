<template>
  <div id="panel" v-show="showPanel">
    <div class="mask" @click="hidePanel"></div>
    <div class="container">
      <div class="wrapper">
        <div class="short-line">
          <div></div>
          <div></div>
        </div>
        <div class="main">
          <div class="header">
            <div class="inner">{{ panelTitle }}</div>
          </div>
          <div v-if="showPanel" class="body">
            <div class="swiper-wrapper">
              <ul ref="swiper" id="swiper" class="swiper animate" :style="containerStyle">
                <li>
                  <Qrcode @zoom="setZoomSrc" />
                </li>
                <li>
                  <Theme :theme="theme" @switchTheme="switchTheme" />
                </li>
                <li>
                  <Qrcode @zoom="setZoomSrc" />
                </li>
                <li>
                  <Theme :theme="theme" @switchTheme="switchTheme" />
                </li>
              </ul>
            </div>
            <button class="cursor btn left-btn" @click="swiperTo(-1)">
              <i class="icon icon-left-open-outline"></i>
            </button>
            <button class="cursor btn right-btn" @click="swiperTo(1)">
              <i class="icon icon-right-open-outline"></i>
            </button>
            <div class="like">
              <p>
                已经有 <span>{{ likeTimes || '∞' }}</span> 人留下 ❤ 了~
              </p>
            </div>
          </div>
          <div class="footer">
            <div class="cursor" :data-title="likeBtnText" @click="likeSite"></div>
          </div>
        </div>
        <div class="long-line">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
    <div v-if="!!zoomSrc" class="zoom" @click="setZoomSrc()">
      <img class="cursor" :src="zoomSrc" alt />
    </div>
  </div>
</template>

<script>
import Theme from './components/Theme'
import Qrcode from './components/Qrcode'
import { localSave, localRead } from '@/utils'
import images from '@/assets/images'

const { bg } = images

export default {
  name: 'Panel',
  components: { Theme, Qrcode },
  props: {
    showPanel: {
      type: Boolean,
      default: false,
    },
    isMobile: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      theme: '',
      likeTimes: 0,
      isLikeSite: localRead('isLikeSite', false),
      currentInx: 1,
      lockSwiper: false,
      zoomSrc: '',
    }
  },
  computed: {
    panelTitle() {
      const inx = (this.currentInx + 1) % 2
      return ['背景主题', '【QrCode】'][inx]
    },
    distance() {
      return [0, -600, -1200, -1800][this.currentInx]
    },
    containerStyle() {
      return {
        transform: `translate3d(${this.distance}px, 0, 0)`,
      }
    },
    likeBtnText() {
      return this.isLikeSite ? "Love Me ？(ゝω・)" : 'So do I 🎉'
    },
  },
  watch: {
    '$isMobile.value': {
      immediate: true,
      handler(val) {
        if (val) return
        this.initTheme()
      },
    },
  },
  mounted() {
    this.queryLike()
  },
  methods: {
    // 点赞数
    async queryLike() {
      this.likeTimes = await this.$store.dispatch('queryLike', 'getTimes')
    },
    // 点赞
    async likeSite() {
      if (this.isLikeSite) return
      this.likeTimes = await this.$store.dispatch('queryLike')
      this.isLikeSite = true
      localSave('isLikeSite', true)
    },
    // 初始化背景主题
    initTheme() {
      if (this.theme) return
      const theme = localRead('theme', 'touhou')
      this.setTheme(theme)
    },
    // 切换主题
    switchTheme(theme) {
      if (theme === this.theme) return
      this.setTheme(theme)
    },
    // 设置主题
    setTheme(theme) {
      this.theme = theme
      localSave('theme', theme)
      window.$('#bg').backstretch(bg[theme], {
        duration: 10000,
        alignY: 0,
        transition: 'fade',
        transitionDuration: 1000,
      })
    },
    // 关闭面板
    hidePanel() {
      this.$emit('hidePanel')
      this.$nextTick(() => {
        this.currentInx = 1
      })
    },
    // 滑动面板
    swiperTo(direction) {
      if (this.lockSwiper) return
      this.lockSwiper = true
      const swiper = this.$refs.swiper
      swiper.classList.add('animate')

      this.currentInx += direction
      setTimeout(() => {
        this.lockSwiper = false
        if (this.currentInx === 0) {
          swiper.classList.remove('animate')
          this.currentInx = 2
        }
        if (this.currentInx === 3) {
          swiper.classList.remove('animate')
          this.currentInx = 1
        }
      }, 500)
    },
    // 设置缩放二维码
    setZoomSrc(src = '') {
      this.zoomSrc = src
    },
  },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>

<template>
  <div ref="carouselItem" class="navi-carousel-item">
    <navi-scroll
      ref="naviScroll"
      :touch="touch"
      :min="min"
      :touchEndReturn="touchEndReturn"
      @change="change"
      @touchEnd="touchEnd">
      <div ref="scrollContent" class="scroll-content">
        <ul>
          <li
            v-for="(text, index) in list"
            :key="index">{{ text }}</li>
        </ul>
        <div class="loading-more" style="display: block; transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">正在加载中，请稍后...</div>
      </div>
    </navi-scroll>
  </div>
</template>

<script>
  import NaviScroll from '@/components/Scroll/index.vue'
  export default {
    components: {
      NaviScroll
    },
    data () {
      return {
        min: 0,
        touch: null,
        loading: false,
        touchEndReturn: false,
        list: [
          "AlloyTouch",
          "AlloyFinger - Super Tiny Size Gestures Library",
          "Transformjs - Made CSS3 Super Easy",
          "AlloyFlow - ",
          "Nuclear - Some HTML + Scoped CSS + JS ",
          "AlloyGameEngine",
          "Rosin",
          "LivePool",
          "AlloyStick",
          "CodeStar",
          "AlloyDesigner",
          "JXAnimate",
          "Spirit",
          "AlloyImage",
          "ModJS",
          "Pretty row 16",
          "stepify",
          "AlloyTimer",
          "Alloy Desktop",
          "JX UI"
        ]
      }
    },
    mounted () {
      this.touch = this.$refs.carouselItem
      this.resetMin()
    },
    methods: {
      change (v) {
        if (v <= this.min + 5 && !this.loading) {
          this.loading = true
          this.loadMore()
          this.$emit('loadMore')
        }
      },
      resetMin () {
        this.$nextTick(() => {
          this.min = -1 * parseInt(getComputedStyle(this.$refs.scrollContent).height) + 400
        })
      },
      touchEnd (evt, value) {
        if (value > 70) {
          this.touchEndReturn = false
          this.$nextTick(() => {
            this.$refs.naviScroll.to(60)
            this.refresh()
            this.touchEndReturn = true
          })
        } else {
          this.touchEndReturn = true
        }
      },
      loadMore () {
        setTimeout(() => {
          this.loading = false;
          let list = this.list.slice(0, 10)
          this.list = this.list.concat(list)
          this.resetMin()
        }, 1000)
      },
      refresh () {
        setTimeout(() => {
          let list = this.list.slice(10, 20)
          this.list = list.concat(this.list)
          this.$refs.naviScroll.to(0)
          this.resetMin()
        }, 1000)
      }
    }
  }
</script>

<style lang="scss" scoped>
.navi-carousel {
  &-item {
    display: inline-block;
    height: 400px;
    background-color: #eee;
    overflow: hidden;
    li {
      height: 40px;
      line-height: 40px;
      font-size: 12px;
      background-color: #fafafa;
      border-bottom: 1px solid #eee;
    }
  }
}
.loading-more {
  padding: 15px 0 20px;
  height: 40px;
  text-align: center;
  color: #777;
}
</style>

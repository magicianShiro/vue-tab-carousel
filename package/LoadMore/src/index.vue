<template>
  <div
    ref="loadMore"
    class="navi-load-more"
    :style="{ height: actualHeight() + 'px' }">
    <div v-if="showLoading" class="loading-icon">
      <img :src="require('@/assets/loading.svg')">
    </div>
    <navi-scroll
      ref="naviScroll"
      :touch="touch"
      :min="min"
      :spring="false"
      :touchEndReturn="touchEndReturn"
      @change="change"
      @touchMove="touchMove"
      @touchEnd="touchEnd">
      <div ref="scrollContent" class="scroll-content">
        <div v-if="showArrow" ref="arrow" class="pull">
          <div
            :class="{ 'arrow--up': release }"
            class="arrow">
            <img :src="require('@/assets/arrow.svg')"><br />
          </div>
        </div>
        <slot />
      </div>
    </navi-scroll>
    
  </div>
</template>

<script>
  import NaviScroll from 'package/Scroll/index.js'
  export default {
    name: 'NaviLoadMore',
    components: {
      NaviScroll
    },
    inject: {
      tabCarousel: { default: () => ({ height: 0 }) }
    },
    props: {
      height: {
        type: Number,
        default: 400
      },
      refresh: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        min: 0,
        touch: null,
        touchEndReturn: true, // 控制scroll的touchEnd的return值
        behavior: '', // 操作行为 主要是判断refresh
        arrowHeight: 0, // 箭头区域的高度
        showLoading: false,
        showArrow: true,
        release: false
      }
    },
    mounted () {
      this.touch = this.$refs.loadMore
      this.arrowHeight = this.$refs.arrow.offsetHeight
      this.resetMin()
    },
    methods: {
      change (v) {
        if (v <= this.min + 5) {
          this.$emit('loadMore')
        }
      },
      resetMin () {
        this.$nextTick(() => {
          if (this.behavior === 'refresh') {
            this.showLoading = false
            this.$refs.naviScroll.to(0, 300)
            setTimeout(() => {
              this.showArrow = true
            }, 300)
            this.min = -1 * parseInt(getComputedStyle(this.$refs.scrollContent).height) + this.actualHeight()
          } else {
            this.min = -1 * parseInt(getComputedStyle(this.$refs.scrollContent).height) + this.actualHeight() + this.arrowHeight
            if (this.min > 0) this.min = 0
            // console.log(parseInt(getComputedStyle(this.$refs.scrollContent).height))
            // if (this.min < this.actualHeight) this.min = -this.actualHeight + 1
          }
        })
      },
      touchMove (evt, value) {
        if (value > 70) {
          this.release = true
        } else {
          this.release = false
        }
      },
      touchEnd (evt, value) {
        if (!this.refresh) return
        if (value > 70) {
          this.touchEndReturn = false
          this.$nextTick(() => {
            this.$refs.naviScroll.to(50, 300)
            this.showArrow = false
            this.showLoading = true
            this.behavior = 'refresh'
            this.$emit('refresh')
            this.touchEndReturn = true
          })
        } else {
          this.behavior = 'infinite'
          this.touchEndReturn = true
        }
      },
      actualHeight () {
        return this.tabCarousel.height ? this.tabCarousel.height : this.height
      }
    }
  }
</script>

<style lang="scss" scoped>
.navi-load-more {
  position: relative;
  background-color: #eee;
  overflow: hidden;
}

.loading-icon {
  position: absolute;
  top: 0;
  left: 50%;
  width: 40px;
  height: 40px;
  margin: 5px 0;
  margin-left: -20px;
  text-align: center;
  img {
    width: 100%;
    height: 100%;
  }
}
.pull {
  height: 60px;
  text-align: center;
  overflow: hidden;
  margin-top: -60px;
}
.arrow {
  margin-top: 5px;
  margin-bottom: 5px;
  img {
    width: 20px;
    height: 20px;
    line-height: 32px;
    transition: transform .4s ease;
    transform: rotate(180deg);
  }
  &::after {
    content: "Pull to refresh";
    font-size: 14px;
    line-height: 18px;
  }
  &--up {
    img {
      transform: rotate(0)
    }
    &::after {
      content: "Release to refresh";
    }
  }
}

</style>

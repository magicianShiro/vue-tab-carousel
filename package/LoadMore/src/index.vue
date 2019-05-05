<template>
<!-- :style="{ height: actualHeight() + 'px' }" -->
  <div
    ref="loadMore"
    class="navi-load-more"
    :style="{ height: wrapHeight() }">
    <div v-if="showLoading && refresh === true" class="loading-icon">
      <!-- <img src="@/assets/loading.svg"> -->
      <svg-icon icon-class="loading" class-name="svg-loading"></svg-icon>
    </div>
      <!-- :min="min" -->

    <navi-scroll
      ref="naviScroll"
      :touch="touch"
      :spring="false"
      :touchEndReturn="touchEndReturn"
      :min="min"
      @change="change"
      @touchMove="touchMove"
      @touchEnd="touchEnd">
      <div ref="scrollContent" class="scroll-content">
        <div v-if="refreshAllow && showArrow && refresh === true" ref="arrow" class="pull">
          <div
            :class="{ 'arrow--up': release }"
            class="arrow">
            <!-- <img src="@/assets/arrow.svg"><br /> -->
            <svg-icon icon-class="arrow" class-name="svg-arrow"></svg-icon><br />
          </div>
        </div>
        <slot />
      </div>
    </navi-scroll>
    
  </div>
</template>

<script>
  import NaviScroll from 'package/Scroll/index.js'
  import SvgIcon from 'package/SvgIcon/index.vue'
  export default {
    name: 'NaviLoadMore',
    components: {
      NaviScroll,
      SvgIcon
    },
    inject: {
      tabCarousel: { default: () => ({ height: 0 }) }
    },
    props: {
      height: {
        type: [Number, String],
        default: 400
      },
      refresh: {
        type: Boolean,
        default: false
      },
      refreshAllow: {
        type: Boolean,
        default: true
      },
      refreshSpring: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        tabCarouselHeight: 0,
        min: 0,
        touch: null,
        touchEndReturn: true, // 控制scroll的touchEnd的return值
        behavior: '', // 操作行为 主要是判断refresh
        arrowHeight: 0, // 箭头区域的高度
        showLoading: false,
        showArrow: true,
        release: false,
        cacheHeight: null // 计算出的最终的视图的高度
      }
    },
    mounted () {
      this.touch = this.$refs.loadMore
      this.arrowHeight = this.$refs.arrow ? this.$refs.arrow.offsetHeight : 0
      this.resetMin()
    },
    computed: {
      
    },
    methods: {
      change (v) {
        if(v > 0 && !this.refreshSpring && !this.refresh){
          this.$refs.naviScroll.to(0, 0)
        }
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
            // this.min = -1 * parseInt(getComputedStyle(this.$refs.scrollContent).height)
          } else {
            this.min = -1 * parseInt(getComputedStyle(this.$refs.scrollContent).height) + this.actualHeight() + this.arrowHeight
            // this.min = -1 * parseInt(getComputedStyle(this.$refs.scrollContent).height) + this.arrowHeight
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
      wrapHeight () {
        if (this.cacheHeight) return this.cacheHeight
        let height = this.tabCarousel.height ? this.tabCarousel.height : this.height
        let result = '0px'
        if (typeof height === 'number') result = height + 'px'
        else if (typeof height === 'string') {
          if (height.indexOf('%') !== -1 || height.indexOf('vh') !== -1) {
            result =  height
          } else {
            result = height.replace('px', '') + 'px'
          }
        }
        this.cacheHeight = result
        return result
      },
      actualHeight () {
        if (this.tabCarouselHeight) return this.tabCarouselHeight
        let height = this.tabCarousel.height ? this.tabCarousel.height : this.height
        if (typeof height === 'string') {
          if (height.indexOf('%') !== -1 || height.indexOf('vh') !== -1) {
            height = parseInt(getComputedStyle(this.$refs.loadMore).height)
          } else {
            return parseInt(height)
          }
        }
        this.tabCarouselHeight = height
        return height
        // return this.tabCarousel.height ? this.tabCarousel.height : this.height
      }
    }
  }
</script>

<style lang="scss" scoped>
.navi-load-more {
  position: relative;
  // background-color: #eee;
  overflow: hidden;
}
.svg-loading {
  font-size: 32px;
}
.svg-arrow {
  font-size: 20px;
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
  .svg-arrow {
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
    .svg-arrow {
      transform: rotate(0);
    }
    &::after {
      content: "Release to refresh";
    }
  }
}

</style>

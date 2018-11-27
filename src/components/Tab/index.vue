<template>
  <div class="navi-tab">
    <navi-scroll
      ref="naviScroll"
      touch=".navi-tab"
      :vertical="false"
      property="translateX"
      :min="min">
      <div class="navi-tab__wrap">
        <ul
          :class="{ 'navi-tab__list--flex': tabList.length <= 4 }"
          ref="tabList"
          class="navi-tab__list">
          <li
            v-for="(tab, index) in tabList"
            :key="index"
            @click="tabClick(index)"
            :class="{ 'navi-tab__item--active': index === activeIndex }" 
            class="navi-tab__item">{{ tab }}</li>
        </ul>
        <p
          ref="line"
          class="navi-tab__line"
          :style="{ transition: transition }"></p>
        <!-- <p
          ref="line"
          class="navi-tab__line"></p> -->
      </div>
      
      <!-- <p class="navi-tab__line"></p> -->
    </navi-scroll>
  </div>
</template>

<script>
  import NaviScroll from '@/components/Scroll/index.vue'
  export default {
    name: 'NaviTab',
    model: {
      prop: 'activeIndex'
    },
    props: {
      activeIndex: {
        type: Number,
        default: 0
      },
      tabList: {
        required: true,
        type: Array,
        default: () => []
      }
    },
    components: {
      NaviScroll
    },
    data () {
      return {
        ulWidth: 0,
        min: 0,
        transition: null
      }
    },
    watch: {
      activeIndex (val) {
        this.tabClick(val)
      },
      tabList (val) {
        this.$nextTick(() => {
          this.calculatedWidth()
        })
      }
    },
    methods: {
      calculatedWidth () {
        // if (this.tabList.length <=4 ) return
        let ulWidth = Array.from(document.querySelectorAll('.navi-tab__item')).reduce((outWidth, liEl) => {
          let marginLeft = parseInt(window.getComputedStyle(liEl, null)['margin-left'])
          let marginRight = parseInt(window.getComputedStyle(liEl, null)['margin-right'])
          let width = liEl.offsetWidth
          outWidth += marginLeft + marginRight + width
          return outWidth
        }, 0)
        this.ulWidth = ulWidth
        this.$refs.tabList.style.width=ulWidth + 'px'
        this.min = -ulWidth + window.innerWidth
        let { lineMove } = this.getMove()
        this.$refs.line.style.transform = `translateX(${lineMove}px)`
      },
      tabClick (index) {
        if (!this.transition) this.transition = 'transform .3s'
        this.$emit('input', index)
        this.$nextTick(() => {
          let { wrapMove, lineMove } = this.getMove()
          let time = 300
          this.$refs.naviScroll.to(-wrapMove, time)
          this.$refs.line.style.transform = `translateX(${lineMove}px)`
        }) 
      },
      getMove () {
        let liEl = document.querySelector('.navi-tab .navi-tab__item--active')
        let liMarginLeft = parseInt(window.getComputedStyle(liEl, null)['margin-right'])
        let liWidth = liEl.offsetWidth
        let liOfferLeft = liEl.offsetLeft - liMarginLeft
        let viewPortWidth = window.innerWidth
        let centerX = (viewPortWidth - liWidth) / 2
        let moveMax = this.ulWidth - viewPortWidth
        let move = liOfferLeft - centerX
        let lineWidth = this.$refs.line.offsetWidth
        let lineToLi = (liWidth - lineWidth) / 2
        let liToLeft = centerX + liMarginLeft + move + lineToLi
        if (move < 0) {
          move = 0
          liToLeft = liEl.offsetLeft + lineToLi
        }
        if (move > moveMax) {
          move = moveMax
          liToLeft = liEl.offsetLeft + lineToLi
        }
        return {
          wrapMove: move,
          lineMove: liToLeft
        }
      
        // this.$refs.naviScroll.to(-move, time)
        // this.$refs.line.style.transform = `translateX(${liToLeft}px)`
      }
    },
    mounted () {
      if (this.tabList.length === 0) return
      this.$nextTick(() => {
        this.calculatedWidth()
      })
    }
  }
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/_mixin.scss';
.navi-tab {
  position: relative;
  font-size: 20px;
  height: 44px;
  &::after {
    @include border(bottom)
  }
  &__list {
    overflow: hidden;
    &--flex {
      display: flex;
    }
  }
  &__item {
    flex: 1;
    // min-width: 60px;
    min-width: 90px;
    // margin: 0 10px;
    padding: 12px 18px;
    float: left;
    font-size: 14px;
    text-align: center;
    &--active {
      color: #f60;
    }
  }
  &__line {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 60px;
    height: 2px;
    background-color: #f60;
    // transform: translateX(10px);
  }
}

</style>

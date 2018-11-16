<template>
  <div class="navi-tab">
    <navi-scroll
      ref="naviScroll"
      :vertical="false"
      property="translateX"
      :min="min">
      <div class="navi-tab__wrap">
        <ul ref="tabList" class="navi-tab__list">
          <li
            v-for="(tab, index) in tabList"
            :key="index"
            @click="tabClick($event, index)"
            :class="{ 'navi-tab__item--active': index === activeIndex }" 
            class="navi-tab__item">{{ tab }}</li>
        </ul>
        <p
          ref="line"
          class="navi-tab__line"
          :style="{ transition: transition }"></p>
      </div>
      
      <!-- <p class="navi-tab__line"></p> -->
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
        tabList: ['标签1','标签2','标签3','标签4','我是标签5','标签6','标签7','标签8','标签9','标签10'],
        ulWidth: 0,
        min: 0,
        activeIndex: 0,
        transition: 'transform .3s'
      }
    },
    methods: {
      calculatedWidth () {
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
      },
      tabClick (evt, index) {
        this.activeIndex = index
        let liEl = evt.target
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
        let time = 300
        // if (move < 30) {
        //   time = 100
        //   this.transition = 'transform .1s'
        // }
        // else {
        //   time = 600
        //   this.transition = 'transform .6s'
        // }
        this.$refs.naviScroll.to(-move, time)
        this.$refs.line.style.transform = `translateX(${liToLeft}px)`
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.calculatedWidth()
      })
    }
  }
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/_mixin.scss';
.navi-tab {
  font-size: 20px;
  &__wrap {
    position: relative;
    &::after {
      @include border(bottom)
    }
  }
  &__list {
    overflow: hidden;
  }
  &__item {
    min-width: 60px;
    margin: 0 10px;
    padding: 12px 8px;
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
    transform: translateX(10px);
  }
}

</style>

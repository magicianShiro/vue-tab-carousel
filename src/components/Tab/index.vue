<template>
  <div class="navi-tab">
    <navi-scroll
      :vertical="false"
      property="translateX"
      :min="min">
      <ul class="navi-tab__list">
        <li class="navi-tab__item">1</li>
        <li class="navi-tab__item">2</li>
        <li class="navi-tab__item">3</li>
        <li class="navi-tab__item">4</li>
        <li class="navi-tab__item">5</li>
        <li class="navi-tab__item">6</li>
        <li class="navi-tab__item">7</li>
        <li class="navi-tab__item">8</li>
        <li class="navi-tab__item">9</li>
        <li class="navi-tab__item">10</li>
      </ul>
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
        min: 0
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
        this.min = -ulWidth + window.innerWidth
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
.navi-tab {
  font-size: 20px;
  &__list {
    width: 800px;
    overflow: hidden;
  }
  &__item {
    width: 60px;
    margin: 0 10px;
    float: left;
    padding: 18px 8px;
    background-color: #f60;
  }
}

</style>

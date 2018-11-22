<template>
  <div class="navi-tab-carousel">
    <navi-tab
      :tab-list="tabList"
      :active-index="activeIndex"
      @input="val => $emit('input', val)"/>
    <navi-carousel
      ref="naviCarousel"
      :active-index="activeIndex"
      @input="val => $emit('input', val)">
      <slot />
    </navi-carousel>
  </div>
</template>

<script>
import NaviTab from '@/components/Tab'
import NaviCarousel from '@/components/Carousel'
export default {
  name: 'NaviTabCarousel',
  model: {
    prop: 'activeIndex'
  },
  props: {
    activeIndex: {
      type: Number,
      default: 0
    }
    // tabList: {
    //   type: Array,
    //   default: () => []
    // }
  },
  components: {
    NaviTab,
    NaviCarousel
  },
  data () {
    return {
      tabList: [],
      active: 0
    }
  },
  mounted () {
    this.$nextTick(() => {
      let children = this.$refs.naviCarousel.$slots.default
      let tags = children.map(v => v.child.tag)
      this.tabList = tags
    })
  }
}
</script>

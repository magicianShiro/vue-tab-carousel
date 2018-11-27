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
    },
    contentHeight: {
      type: Number,
      default: 0
    }
    // tabList: {
    //   type: Array,
    //   default: () => []
    // }
  },
  provide () {
    return {
      tabCarousel: this.props
    }
  },
  components: {
    NaviTab,
    NaviCarousel
  },
  watch: {
    contentHeight (val) {
      this.props.height = val
    }
  },
  data () {
    return {
      tabList: [],
      active: 0,
      props: {
        height: this.contentHeight
      }
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

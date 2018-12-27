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
import NaviTab from 'package/Tab/index.js'
import NaviCarousel from 'package/Carousel/index.js'
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
      default: 400
    },
    skeleton: {
      type: Boolean,
      default: true
    }
  },
  provide () {
    return {
      tabCarousel: this.props,
      skeleton: this.skeleton
    }
  },
  components: {
    NaviTab,
    NaviCarousel
  },
  watch: {
    contentHeight (val) {
      this.props.height = val
    },
    activeIndex: {
      handler (val) {
        this.$nextTick(() => {
          let component =this.$slots.default[val].child
          component.active()
        })
      },
      immediate: true
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
      // let children = this.$refs.naviCarousel.$slots.default
      let children = this.$slots.default
      let tags = children.map(v => v.child.tag)
      this.tabList = tags
    })
  }
}
</script>

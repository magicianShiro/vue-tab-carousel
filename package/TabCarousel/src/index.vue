<template>
  <div class="navi-tab-carousel">
    <navi-tab
      ref="naviTab"
      :tab-list="tabList"
      :active-index="activeIndex"
      :line-width="lineWidth"
      :lineColor="lineColor"
      :active-color="activeColor"
      :default-color="defaultColor"
      @input="val => $emit('input', val)"/>
    <navi-carousel
      ref="naviCarousel"
      :style="{ height: wrapHeight() }"
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
      type: [Number, String],
      required: true
    },
    skeleton: {
      type: Boolean,
      default: true
    },
    lineWidth: {
      type: [Number, String],
      default: 60
    },
    lineColor: {
      type: String,
      default: '#f60'
    },
    activeColor: {
      type: String,
      default: '#f60'
    },
    defaultColor: {
      type: String,
      default: '#000'
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
          let component = this.$slots.default.filter(v => v.elm.nodeType === 1)[val].child
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
      },
      cacheHeight: null
    }
  },
  methods: {
    wrapHeight () {
      if (this.cacheHeight) return this.cacheHeight
      let height = this.contentHeight
      let result = ''
      let tabComponent = this.$refs.naviTab
      if (tabComponent && typeof height === 'string' && height.indexOf('%') !== -1) {
        let tabEl = this.$refs.naviTab.$el
        let tabHeight = tabEl.offsetHeight
        result = `calc(${height} - ${tabHeight + 'px'})`
      }
      this.cacheHeight = result
      return result
    }
  },
  mounted () {
    this.$nextTick(() => {
      // let children = this.$refs.naviCarousel.$slots.default
      // 过滤掉文本节点
      let children = this.$slots.default.filter(v => v.elm.nodeType === 1)
      let tags = children.map(v => v.child.tag)
      this.tabList = tags
    })
  }
}
</script>
<style lang="scss" scoped>
.navi-tab-carousel {
  height: 100%;
}
</style>

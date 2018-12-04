<template>
  <div class="navi-tab-carousel-item">
    <div
      v-if="skeletonShow"
      class="navi-tab-carousel-skeleton"
      :style="{ height: this.tabCarousel.height + 'px' }"></div>
    <slot v-else />
  </div>
</template>

<script>
  export default {
    name: 'NaviTabCarouselItem',
    inject: {
      tabCarousel: { default: () => ({ height: 0 }) },
      skeleton: { default: true }
    },
    props: {
      tag: {
        required: true,
        type: String
      }
    },
    data () {
      return {
        tempSkeleton: null
      }
    },
    methods: {
      active () {
        if (!this.skeletonShow) return
        this.tempSkeleton = false
      }
    },
    computed: {
      skeletonShow () {
        return this.tempSkeleton === false ? this.tempSkeleton : this.skeleton
      }
    }
  }
</script>

<style lang="scss" scoped>
.navi-tab-carousel-item {
  display: inline-block;
}
</style>

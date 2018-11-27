<template>
  <div class="tab-carousel">
    <navi-tab-carousel
      :content-height="400"
      v-model="activeIndex">
      <navi-tab-carousel-item tag="标签1">
        <load-more></load-more>
      </navi-tab-carousel-item>
      <navi-tab-carousel-item tag="标签2">
        <load-more></load-more>
      </navi-tab-carousel-item>
      <navi-tab-carousel-item tag="标签3">
        <load-more></load-more>
      </navi-tab-carousel-item>
      <navi-tab-carousel-item tag="标签4">
        <load-more></load-more>
      </navi-tab-carousel-item>
      <navi-tab-carousel-item tag="标签5">
        <load-more></load-more>
      </navi-tab-carousel-item>
      <navi-tab-carousel-item tag="标签6">
        <load-more></load-more>
      </navi-tab-carousel-item>
      <navi-tab-carousel-item tag="标签7">
        <load-more></load-more>
      </navi-tab-carousel-item>
      <navi-tab-carousel-item tag="标签8">
        <load-more></load-more>
      </navi-tab-carousel-item>
    </navi-tab-carousel>
  </div>
</template>

<script>
import LoadMore from './LoadMore'
export default {
  components: {
    LoadMore
  },
  data () {
    return {
      activeIndex: 0,
      list: ['标签1', '标签2', '标签3', '标签4', '标签5', '标签6', '标签7', '标签8', '标签9', '标签10'],
    }
  }
}
</script>
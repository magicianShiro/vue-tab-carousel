<template>
  <div id="app">
    <!-- <tab /> -->
    <!-- <carousel /> -->
    <!-- <load-more /> -->
    <tab-carousel />
  </div>
</template>

<script>

import Tab from 'example/components/Tab'
import Carousel from 'example/components/Carousel'
import LoadMore from 'example/components/LoadMore'
import TabCarousel from 'example/components/TabCarousel'
export default {
  name: 'app',
  components: {
    Tab,
    // Carousel,
    // LoadMore,
    TabCarousel
  },
  data () {
    return {
      list: ['标签1', '标签2', '标签3', '标签4', '标签5', '标签6', '标签7', '标签8', '标签9', '标签10'],
      activeIndex: 0
    }
  }
}
</script>

<style lang="scss">
#app {
  background-color: #fafafa;
}
</style>

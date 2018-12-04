<template>
  <div id="app">
    <tab />
    <!-- <carousel /> -->
    <!-- <load-more /> -->
    <!-- <tab-carousel /> -->
  </div>
</template>

<script>

import Tab from 'example/components/Tab'
// import Carousel from 'example/components/Carousel'
// import LoadMore from 'example/components/LoadMore'
// import TabCarousel from 'example/components/TabCarousel'
export default {
  name: 'app',
  components: {
    Tab,
    // Carousel,
    // LoadMore,
    // TabCarousel
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
#app {
  background-color: #fafafa;
}
</style>

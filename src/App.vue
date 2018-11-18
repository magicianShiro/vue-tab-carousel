<template>
  <div id="app">
    <navi-tab-carousel></navi-tab-carousel>
  </div>
</template>

<script>
import NaviTabCarousel from '@/components/TabCarousel'
// import Scroll from '@/components/Scroll'
export default {
  name: 'app',
  components: {
    NaviTabCarousel
  }
}
</script>

<style lang="scss">
#app {
  background-color: #fafafa;
}
</style>

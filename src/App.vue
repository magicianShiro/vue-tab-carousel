<template>
  <div id="app">
    <navi-tab />
    <!-- <scroll /> -->
  </div>
</template>

<script>
import NaviTab from '@/components/Tab'
// import Scroll from '@/components/Scroll'
export default {
  name: 'app',
  components: {
    NaviTab
    // Scroll
  }
}
</script>

<style lang="scss">
#app {
  background-color: #fafafa;
}
</style>

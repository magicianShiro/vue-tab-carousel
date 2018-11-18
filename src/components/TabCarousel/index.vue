<template>
  <div class="navi-tab-carousel">
    <navi-tab :active-index.sync="active"/>
    <navi-carousel :active-index.sync="active"/>
  </div>
</template>

<script>
import NaviTab from '@/components/Tab'
import NaviCarousel from '@/components/Carousel'
export default {
  name: 'app',
  components: {
    NaviTab,
    NaviCarousel
  },
  data () {
    return {
      active: 0
    }
  }
}
</script>

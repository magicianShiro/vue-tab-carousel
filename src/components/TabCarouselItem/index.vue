<template>
  <div class="navi-tab-carousel-item">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'NaviTabCarouselItem',
    props: {
      tag: {
        required: true,
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
.navi-tab-carousel-item {
  display: inline-block;
}
</style>

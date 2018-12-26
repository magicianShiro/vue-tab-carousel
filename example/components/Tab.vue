<template>
  <navi-tab :tab-list="list" v-model="activeIndex"></navi-tab>
</template>

<script>
  export default {
    data () {
      return {
        list: ['标签1', '标签2', '标签3'],
        activeIndex: 0
      }
    }
  }
</script>
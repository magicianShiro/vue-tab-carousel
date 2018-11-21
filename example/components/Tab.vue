<template>
  <navi-tab :tab-list="list" v-model="activeIndex"></navi-tab>
</template>

<script>
  export default {
    data () {
      return {
        list: ['标签1', '标签2', '标签3', '标签4', '标签5', '标签6', '标签7', '标签8', '标签9', '标签10'],
        activeIndex: 0
      }
    }
  }
</script>
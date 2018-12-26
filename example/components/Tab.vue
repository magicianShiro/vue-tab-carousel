<template>
  <div class="tab">
    <navi-tab :tab-list="list1" v-model="activeIndex1"></navi-tab>
    <navi-tab :tab-list="list2" v-model="activeIndex2"></navi-tab>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list1: '_'.repeat(2).split('_').map((v, i) => `标签${i + 1}`),
        activeIndex1: 0,
        list2: '_'.repeat(9).split('_').map((v, i) => `标签${i + 1}`),
        activeIndex2: 0
      }
    }
  }
</script>
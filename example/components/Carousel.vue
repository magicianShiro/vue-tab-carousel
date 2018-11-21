<template>
  <navi-carousel v-model="activeIndex">
    <img
      v-for="(img, index) in imgArr"
      :key="index"
      :src="img">
  </navi-carousel>
</template>

<script>
  export default {
    data () {
      return {
        activeIndex: 0,
        imgArr: [
          require('example/assets/images/1.jpg'),
          require('example/assets/images/2.jpg'),
          require('example/assets/images/3.jpg'),
          require('example/assets/images/4.jpg'),
          require('example/assets/images/5.jpg'),
          require('example/assets/images/6.jpg'),
          require('example/assets/images/7.jpg'),
          require('example/assets/images/8.jpg'),
        ]
      }
    }
  }

</script>

<template>
<div class="tab-carousel-navi">
  <router-link to="/tab">tab</router-link>
  <router-link to="/carousel">carousel</router-link>
  <router-link to="/loadmore">loadmore</router-link>
  <router-link to="/tab_carousel">tabCarousel</router-link>
</div>
</template>

<style lang="scss" scoped>
.tab-carousel-navi {
  padding-top: 100px;
  a {
    display: block;
    padding: 10px 0;
    font-size: 18px;
    text-align: center;
  }
}
</style>

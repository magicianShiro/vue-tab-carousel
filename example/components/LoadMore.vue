<template>
  <navi-load-more
    ref="loadMore"
    :height="400"
    refresh
    @refresh="refresh"
    @loadMore="loadMore">
    <transition name="fade" mode="out-in">
      <div key="loading" v-if="firstLoading" class="loading">
        <img :src="require('example/assets/svg/loading-bars.svg')">
      </div>
      <div key="content" v-else class="content">
        <ul>
          <li
            v-for="(text, index) in list"
            :key="index">{{ text }}</li>
        </ul>
        <div class="loading-more" style="display: block; transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">正在加载中，请稍后...</div>
      </div>
    </transition>
  </navi-load-more>
</template>

<script>
  export default {
    data () {
      return {
        firstLoading: true,
        flag: false,
        list: []
      }
    },
    mounted () {
      setTimeout(() => {
        this.firstLoading = false
        this.list = [
          "AlloyTouch",
          "AlloyFinger - Super Tiny Size Gestures Library",
          "Transformjs - Made CSS3 Super Easy",
          "AlloyFlow - ",
          "Nuclear - Some HTML + Scoped CSS + JS ",
          "AlloyGameEngine",
          "Rosin",
          "LivePool",
          "AlloyStick",
          "CodeStar",
          "AlloyDesigner",
          "JXAnimate",
          "Spirit",
          "AlloyImage",
          "ModJS",
          "Pretty row 16",
          "stepify",
          "AlloyTimer",
          "Alloy Desktop",
          "JX UI"
        ]
        this.$refs.loadMore.resetMin()
      }, 1000)
    },
    methods: {
      loadMore () {
        if (this.flag) return
        this.flag = true
        setTimeout(() => {
          this.flag = false;
          let list = this.list.slice(0, 10)
          this.list = this.list.concat(list)
          this.$refs.loadMore.resetMin()
        }, 1000)
      },
      refresh () {
        setTimeout(() => {
          let list = this.list.slice(10, 20)
          this.list = list.concat(this.list)
          this.$refs.loadMore.resetMin()
        }, 1000)
      }
    }
  }
</script>

<style lang="scss" scoped>
li {
  height: 40px;
  line-height: 40px;
  font-size: 12px;
  background-color: #fafafa;
  border-bottom: 1px solid #eee;
}
.loading-more {
  padding: 15px 0 20px;
  font-size: 12px;
  // height: 40px;
  text-align: center;
  color: #777;
}
.loading {
  width: 60px;
  height: 60px;
  margin: 0 auto;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
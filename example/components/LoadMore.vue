<template>
  <navi-load-more
    ref="loadMore"
    :height="400"
    refresh
    @refresh="refresh"
    @loadMore="loadMore">
    <div class="load-more-content">
      <transition name="fade" mode="out-in">
        <div key="loading" v-if="firstLoading" class="loading">
          <img :src="require('example/assets/svg/loading-bars.svg')">
        </div>
      </transition>
      <div v-if="!firstLoading" class="content">
        <ul>
          <li
            v-for="(text, index) in list"
            :key="index">{{ text }}</li>
        </ul>
        <div class="loading-more" style="display: block; transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">正在加载中，请稍后...</div>
      </div>
    </div>
    
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
        let count = 0
        while (++count <= 20) {
          this.list.push(count)
        }
        this.$refs.loadMore.resetMin()
      }, 1000)
    },
    methods: {
      loadMore () {
        if (this.flag) return
        this.flag = true
        setTimeout(() => {
          this.flag = false;
          let list = []
          let count = this.list[this.list.length - 1]
          while (++count <= this.list[this.list.length - 1] + 10) {
            list.push(count)
          }
          this.list = this.list.concat(list)
          this.$refs.loadMore.resetMin()
        }, 1000)
      },
      refresh () {
        setTimeout(() => {
          let list = []
          let count = this.list[0]
          while(--count >= this.list[0] - 10) {
            list.unshift(count)
          }
          this.list = list.concat(this.list)
          this.$refs.loadMore.resetMin()
        }, 1000)
      }
    }
  }
</script>

<style lang="scss" scoped>
.load-more-content {
  position: relative;
  width: 100%;
  height: 100%;
}
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // background-color: #fafafa;
  text-align: center;
  z-index: 1;
  img {
    width: 60px;
    height: 60px;
    margin: 0 auto;
  }
}
.fade-enter-active, .fade-leave-active {
  // transition: opacity .2s;
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
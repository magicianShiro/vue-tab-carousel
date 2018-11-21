<template>
  <div
    ref="loadMore"
    class="navi-load-more"
    :style="{ height: height + 'px' }">
    <navi-scroll
      ref="naviScroll"
      :touch="touch"
      :min="min"
      :spring="false"
      :touchEndReturn="touchEndReturn"
      @change="change"
      @touchEnd="touchEnd">
      <div ref="scrollContent" class="scroll-content">
        <!-- <div class="pull">
          <div id="arrow" class="arrow">
            <img :src="require('@/assets/arrow.svg')"><br />
          </div>
        </div> -->
        <slot />
      </div>
    </navi-scroll>
  </div>
</template>

<script>
  import NaviScroll from '@/components/Scroll/index.vue'
  export default {
    name: 'NaviLoadMore',
    components: {
      NaviScroll
    },
    props: {
      height: {
        required: true,
        type: Number,
        default: 0
      },
      refresh: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        min: 0,
        touch: null,
        touchEndReturn: true,
        behavior: ''
      }
    },
    mounted () {
      this.touch = this.$refs.loadMore
      this.resetMin()
    },
    methods: {
      change (v) {
        // if (v <= this.min + 5 && !this.loading) {
        if (v <= this.min + 5) {
          // this.loading = true
          // this.loadMore()
          this.$emit('loadMore')
        }
      },
      resetMin () {
        this.$nextTick(() => {
          if (this.behavior === 'refresh') this.$refs.naviScroll.to(0, 300)
          this.min = -1 * parseInt(getComputedStyle(this.$refs.scrollContent).height) + this.height
        })
      },
      touchEnd (evt, value) {
        if (!this.refresh) return
        if (value > 70) {
          this.touchEndReturn = false
          this.$nextTick(() => {
            this.$refs.naviScroll.to(60, 300)
            this.behavior = 'refresh'
            // this.refresh()
            this.$emit('refresh')
            this.touchEndReturn = true
          })
        } else {
          this.touchEndReturn = true
        }
      },
      // loadMore () {
      //   setTimeout(() => {
      //     this.loading = false;
      //     let list = this.list.slice(0, 10)
      //     this.list = this.list.concat(list)
      //     this.resetMin()
      //   }, 1000)
      // },
      // refresh () {
      //   setTimeout(() => {
      //     let list = this.list.slice(10, 20)
      //     this.list = list.concat(this.list)
      //     this.$refs.naviScroll.to(0)
      //     this.resetMin()
      //   }, 1000)
      // }
    }
  }
</script>

<style lang="scss" scoped>
.navi-load-more {
  // height: 400px;
  background-color: #eee;
  overflow: hidden;
}
.pull {
  // width: 50px;
  height: 50px;
}
#arrow {
  margin-top: 5px;
  margin-bottom: 5px;
  // width: 50px;
  height: 40px;
  img {
    width: 100%;
    height: 100%;
  }
  // &::after {
  //   content: "Pull to refresh";
  // }
}

</style>

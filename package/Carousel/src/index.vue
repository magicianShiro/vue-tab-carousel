<template>
  <div class="navi-carousel">
    <navi-scroll
      ref="naviScroll"
      touch=".navi-carousel"
      :vertical="false"
      property="translateX"
      :min="min"
      :step="step"
      :inertia="false"
      :touchEndReturn="false"
      @touchEnd="touchEnd"
      @initSuccess="initSuccess">
      <div ref="carouselList" class="navi-carousel__list">
        <slot />
      </div>
    </navi-scroll>
  </div>
</template>

<script>
import NaviScroll from 'package/Scroll/index.js'
// import NaviCarouselItem from '@/components/CarouselItem/index.vue'
export default {
  name: 'NaviCarousel',
  model: {
    prop: 'activeIndex'
  },
  props: {
    activeIndex: {
      type: Number,
      default: 0
    },
    animationTime: {
      type: Number,
      default: 300
    }
  },
  components: {
    NaviScroll
    // NaviCarouselItem
  },
  data () {
    return {
      max: 0,
      min: 0,
      step: 0,
      startPageX: 0
    }
  },
  mounted () {
    this.calculated ()
  },
  watch: {
    activeIndex (val) {
      this.$refs.naviScroll.to(-this.step * val, this.animationTime);
    }
  },
  methods: {
    calculated () {
      this.step = window.innerWidth
      let carouselListEl = this.$refs.carouselList
      if (carouselListEl.children.length === 0) return
      this.min = -window.innerWidth * (carouselListEl.children.length - 1)
      carouselListEl.style.width = carouselListEl.children.length * 100 + '%'
      Array.from(carouselListEl.children).forEach(item => {
        item.style.width = (100 / carouselListEl.children.length) + '%'
        item.style.display = "inline-block"
      })
    },
    initSuccess () {
      this.$refs.naviScroll.to(-1 * this.step * this.activeIndex, 0);
    },
    touchEnd (evt, v, index) {
      var step_v = index * this.step * -1;
      var dx = v - step_v;
      if (v < this.min) {
        this.$refs.naviScroll.to(this.min, this.animationTime);
      } else if (v > this.max) {
        this.$refs.naviScroll.to(this.max, this.animationTime);
      } else if (Math.abs(dx) < 30) {
        this.$refs.naviScroll.to(step_v, this.animationTime);
      }
      else if (dx > 0) {
        // this.$refs.naviScroll.to(step_v + this.step, this.animationTime);
        this.$emit('input', this.activeIndex - 1)
        // this.$emit('update:activeIndex', this.activeIndex - 1)
      } else {
        // this.$refs.naviScroll.to(step_v - this.step, this.animationTime);
        // this.$emit('update:activeIndex', this.activeIndex + 1)
        this.$emit('input', this.activeIndex + 1)
      }
    }
  }
}
</script>

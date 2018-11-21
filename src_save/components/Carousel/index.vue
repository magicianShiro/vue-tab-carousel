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
      @touchEnd="touchEnd">
      <div ref="carouselList" class="navi-carousel__list">
        <navi-carousel-item />
        <navi-carousel-item />
        <navi-carousel-item />
        <navi-carousel-item />
        <navi-carousel-item />
        <navi-carousel-item />
        <navi-carousel-item />
        <navi-carousel-item />
        <navi-carousel-item />
        <navi-carousel-item />
        <!-- <div class="navi-carousel__item">2</div>
        <div class="navi-carousel__item">3</div>
        <div class="navi-carousel__item">4</div>
        <div class="navi-carousel__item">5</div>
        <div class="navi-carousel__item">6</div>
        <div class="navi-carousel__item">7</div>
        <div class="navi-carousel__item">8</div>
        <div class="navi-carousel__item">9</div>
        <div class="navi-carousel__item">10</div> -->
      </div>
    </navi-scroll>
  </div>
</template>

<script>
import NaviScroll from '@/components/Scroll/index.vue'
import NaviCarouselItem from '@/components/CarouselItem/index.vue'
export default {
  props: {
    activeIndex: {
      type: Number,
      default: 0
    }
  },
  components: {
    NaviScroll,
    NaviCarouselItem
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
      this.$refs.naviScroll.to(-this.step * val);
    }
  },
  methods: {
    calculated () {
      this.step = window.innerWidth
      this.min = -window.innerWidth * (document.querySelectorAll('.navi-carousel-item').length - 1)
      this.$nextTick(() => {
        let carouselListEl = this.$refs.carouselList
        carouselListEl.style.width = carouselListEl.childNodes.length * 100 + '%'
        carouselListEl.childNodes.forEach(item => {
          item.style.width = (100 / carouselListEl.childNodes.length) + '%'
        })
      })
    },
    touchEnd (evt, v, index) {
      var step_v = index * this.step * -1;
      var dx = v - step_v;
      if (v < this.min) {
        this.$refs.naviScroll.to(this.min, 100);
      } else if (v > this.max) {
        this.$refs.naviScroll.to(this.max, 100);
      } else if (Math.abs(dx) < 30) {
        this.$refs.naviScroll.to(step_v, 100);
      }
      else if (dx > 0) {
        this.$refs.naviScroll.to(step_v + this.step, 100);
        this.$emit('update:activeIndex', this.activeIndex - 1)
      } else {
        this.$refs.naviScroll.to(step_v - this.step, 100);
        this.$emit('update:activeIndex', this.activeIndex + 1)
      }
    }
  }
}
</script>

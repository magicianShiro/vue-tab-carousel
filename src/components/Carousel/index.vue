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
      <div style="width: 1000%;" class="navi-carousel__list">
        <div class="navi-carousel__item">
          <navi-scroll
            touch=".navi-carousel__item"
            :min="-400">
              <ul>
                <li>AlloyTouch</li>
                <li>AlloyFinger - Super Tiny Size Gestures Library</li>
                <li>Transformjs - Made CSS3 Super Easy</li>
                <li>AlloyFlow - </li>
                <li>Nuclear - Some HTML + Scoped CSS + JS </li>
                <li>AlloyGameEngine</li>
                <li>Rosin</li>
                <li>LivePool</li>
                <li>AlloyStick</li>
                <li>CodeStar</li>
                <li>AlloyDesigner</li>
                <li>JXAnimate</li>
                <li>Spirit</li>
                <li>AlloyImage</li>
                <li>ModJS</li>
                <li>Pretty row 16</li>
                <li>stepify</li>
                <li>AlloyTimer</li>
                <li>Alloy Desktop</li>
                <li>JX UI</li>
            </ul>
          </navi-scroll>
        </div>
        <div class="navi-carousel__item">2</div>
        <div class="navi-carousel__item">3</div>
        <div class="navi-carousel__item">4</div>
        <div class="navi-carousel__item">5</div>
        <div class="navi-carousel__item">6</div>
        <div class="navi-carousel__item">7</div>
        <div class="navi-carousel__item">8</div>
        <div class="navi-carousel__item">9</div>
        <div class="navi-carousel__item">10</div>
      </div>
    </navi-scroll>
  </div>
</template>

<script>
import NaviScroll from '@/components/Scroll/index.vue'
export default {
  props: {
    activeIndex: {
      type: Number,
      default: 0
    }
  },
  components: {
    NaviScroll
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
      this.min = -window.innerWidth * (document.querySelectorAll('.navi-carousel__item').length - 1)
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
        this.$refs.naviScroll.to(step_v + this.step, 300);
        this.$emit('update:activeIndex', this.activeIndex - 1)
      } else {
        this.$refs.naviScroll.to(step_v - this.step, 300);
        this.$emit('update:activeIndex', this.activeIndex + 1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.navi-carousel {
  &__item {
    display: inline-block;
    // width: 100%;
    width: 10%;
    height: 400px;
    background-color: #eee;
    overflow: hidden;
    li {
      height: 40px;
      line-height: 40px;
      font-size: 12px;
      background-color: #fafafa;
      border-bottom: 1px solid #eee;
    }
  }
}
</style>

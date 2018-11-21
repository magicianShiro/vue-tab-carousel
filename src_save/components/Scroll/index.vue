<template>
  <div ref="scroll-wrpper" class="wrapper">
    <div ref="scroller" class="scroller">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import AlloyTouch from "alloytouch"
import Transform from "alloytouch/transformjs"
export default {
  props: {
    touch: {
      type: [String, HTMLDivElement],
      default: '.wrapper'
    },
    vertical: {
      type: Boolean,
      default: true
    },
    property: {
      type: String,
      default: 'translateY'
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 0
    },
    step: {
      type: Number,
      default: 0
    },
    inertia: {
      type: Boolean,
      default: true
    },
    touchEndReturn: {
      type: [String, Boolean],
      default: ''
    },
    spring: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      alloyTouch: null
    }
  },
  mounted() {
    setTimeout(() => {
      this.init()
    }, 20);
  },
  watch: {
    min (val) {
      if (this.alloyTouch && val) {
        this.alloyTouch.min = val
      }
    }
  },
  methods: {
    init() {
      let _this = this
      // let target = document.querySelector("#scroller");
      let target = this.$refs.scroller
      //给element注入transform属性
      Transform(target, true);
      this.alloyTouch = new AlloyTouch({
        touch: this.touch, //反馈触摸的dom
        vertical: this.vertical, //不必需，默认是true代表监听竖直方向touch
        target: target, //运动的对象
        property: this.property, //被滚动的属性
        sensitivity: 1, //不必需,触摸区域的灵敏度，默认值为1，可以为负数
        factor: 1, //不必需,默认值是1代表touch区域的1px的对应target.y的1
        min: this.min, //不必需,滚动属性的最小值
        max: this.max, //不必需,滚动属性的最大值
        step: this.step === 0 ? undefined : this.step,
        spring: this.spring, //不必需,是否有回弹效果。默认是true
        inertia: this.inertia,
        maxSpeed: 2,
        animationEnd: function(value) {
          _this.$emit('animationEnd', value)
        },
        pressMove: function(evt, value) {
          //console.log(evt.deltaX + "_" + evt.deltaY + "__" + value);
          _this.$emit('pressMove', evt, value)
        },
        change: function (value) {
          _this.$emit('change', value)
        },
        touchStart: function (evt, value) {
          _this.$emit('touchStart', evt, value)
        },
        touchMove: function (evt, value) {
          _this.$emit('touchMove', evt, value)
        },
        touchEnd: function (evt, value, index) {
          let a = _this.$emit('touchEnd', evt, value, index)
          return typeof _this.touchEndReturn === 'boolean' ? _this.touchEndReturn : undefined
        },
        tap: function (evt, value) {
          _this.$emit('tap', evt ,value)
        }
      })
    },
    to (value, time, ease) {
      this.alloyTouch.to(value, time, ease)
    },
    stop () {
      this.alloyTouch.stop()
    }
  }
}
</script>

<style>
#wrapper {
  /* position: absolute;
  z-index: 1;
  top: 45px;
  bottom: 48px;
  left: 0;
  width: 100%;
  overflow: hidden; */
  height: 100%;
}
#scroller {
  position: absolute;
  z-index: 1;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  width: 100%;
  transform: translateZ(0);
  user-select: none;
  text-size-adjust: none;
}
/* #scroller ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  text-align: left;
}
#scroller li {
  padding: 0 10px;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #fff;
  background-color: #fafafa;
  font-size: 14px;
} */
</style>

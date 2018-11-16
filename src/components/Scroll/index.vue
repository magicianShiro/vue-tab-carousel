<template>
  <div id="wrapper">
    <div id="scroller">
      <!-- <ul>
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
        <li>CodeTank</li>
        <li>iSpriter</li>
        <li>Rythem</li>
        <li>Go!Png </li>
        <li>JX</li>
        <li>TEditor</li>
        <li> row 1</li>
        <li> row 2</li>
        <li> row 3</li>
        <li>row 5</li>
        <li> row 5</li>
        <li> row 7</li>
        <li> row 8</li>
        <li> row 9</li>
        <li> row 11</li>
        <li> row 11</li>
        <li> row 12</li>
        <li> row 13</li>
        <li> row 14</li>
        <li> row 15</li>
        <li> row 16</li>
        <li> row 17</li>
        <li> row 18</li>
        <li> row 19</li>
        <li> row 20</li>
        <li> row 21</li>
        <li> row 22</li>
        <li> row 23</li>
        <li> row 24</li>
        <li> row 25</li>
      </ul> -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
import AlloyTouch from "alloytouch"
import Transform from "alloytouch/transformjs"
export default {
  props: {
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
    }
    // step: {
    //   type: Number,
    //   default: 40
    // }
  },
  data () {
    return {
      alloyTouch: null
    }
  },
  mounted() {
    setTimeout(() => {
      this.init();
    }, 20);
  },
  methods: {
    init() {
      let _this = this
      let target = document.querySelector("#scroller");
      //给element注入transform属性
      Transform(target, true);
      this.alloyTouch = new AlloyTouch({
        touch: "#wrapper", //反馈触摸的dom
        vertical: _this.vertical, //不必需，默认是true代表监听竖直方向touch
        target: target, //运动的对象
        property: this.property, //被滚动的属性
        sensitivity: 1, //不必需,触摸区域的灵敏度，默认值为1，可以为负数
        factor: 1, //不必需,默认值是1代表touch区域的1px的对应target.y的1
        min: this.min, //不必需,滚动属性的最小值
        max: this.max, //不必需,滚动属性的最大值
        // step: this.step,
        animationEnd: function(value) {
          // console.log(value);
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
        toucheEnd: function (evt, value) {
          _this.$emit('touchEnd', evt, value)
        },
        tap: function (evt, value) {
          _this.$emit('tap', evt ,value)
        }
      })
    },
    to (value, time ,ease) {
      this.alloyTouch(value, time, ease)
    },
    stop () {
      this.alloyTouch.stop()
    }
  }
}
</script>

<style>
#wrapper {
  position: absolute;
  z-index: 1;
  top: 45px;
  bottom: 48px;
  /* top: 0; */
  /* bottom: 0; */
  left: 0;
  width: 100%;
  background: #ccc;
  overflow: hidden;
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

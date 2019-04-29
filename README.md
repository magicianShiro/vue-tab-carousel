# tab-carousel

## 安装
`npm i --save vue-tab-carousel`

## 初始化
```vue
import Vue from 'vue'
import TabCarousel from 'vue-tab-carousel'

Vue.use(TabCarousel)
```

## 使用
### tab组件
```vue
<template>
  <navi-tab :tab-list="list1" v-model="activeIndex1"></navi-tab>
</template>

<script>
export default {
  data () {
    return {
      list1: ['标签1', '标签2', '标签3'],
      activeIndex1: 0,
    }
  }
}
</script>
```
### 属性
|参数|说明|类型|可选值|是否必填|默认值|
|--|--|--|--|--|--|
|tab-list|标签名|Array||true||
|line-width|下划线长度|Number/String||false|60|
|line-color|下划线颜色|String||false|#f60|
|active-color|文字选中时的颜色|String||false|#f60|
|default-color|文字未被选中时的颜色|String||false|#000|

### carousel组件
> 注意: carousel组件的slot中的内容不能用一个父元素全部包起来, 这和实现方式有关
```vue
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
        require('example/assets/images/8.jpg')
      ]
    }
  }
}
</script>
```

### 属性
|参数|说明|类型|可选值|是否必填|默认值|
|--|--|--|--|--|--|
|animation-time|过渡时间|Number||false|300|

## loadmore组件
> 注意: 不管是下拉刷新还是上滑加载, 当数据拿到之后需要调用该组件的`resetMin`方法来重新计算高度 例如  `this.$refs.loadMore.resetMin()`
```vue
<template>
  <navi-load-more
    ref="loadMore"
    :height="400"
    refresh
    @refresh="refresh"
    @loadMore="loadMore">
    // 填写你的代码
  </navi-load-more>
</template>
```
### 属性
|参数|说明|类型|可选值|是否必填|默认值|
|--|--|--|--|--|--|
|height|滑动视口的高度|Number||true|400|
|refresh|是否开启下拉刷新|Boolean|true/false|false|false|

### 事件
|事件名称|说明|回调参数|
|--|--|--|
|loadMore|滑动到底部的时候触发|-|
|refresh|下拉刷新的时候触发(refresh参数为true才有效)|-|

## tabCarousel组件
> 注意: `navi-tab-carousel-item` 组件中可以嵌套`load-more`组件, 此时 `load-more` 组件不需要设置`height`属性, `content-height`属性会将其所有的高度统一化
```vue
<template>
  <navi-tab-carousel
    :content-height="400"
    :skeleton="true"
    v-model="activeIndex">
    <navi-tab-carousel-item tag="标签1">
      // 填写你的代码(配合loadmore组件口味更佳)
    </navi-tab-carousel-item>
    <navi-tab-carousel-item tag="标签2">
      // 填写你的代码(配合loadmore组件口味更佳)
    </navi-tab-carousel-item>
    <navi-tab-carousel-item tag="标签3">
      // 填写你的代码(配合loadmore组件口味更佳)
    </navi-tab-carousel-item>
  </navi-tab-carousel>
</template>
```
### 属性
> 关于tab的属性可以直接参照tab部分

|参数|说明|类型|可选值|是否必填|默认值|
|--|--|--|--|--|--|
|content-height|滑动视口的高度|Number||true|400|
|skeleton|是否开启骨架屏占位(主要是为了懒加载)|Boolean|true/false|true|true|


### 子组件属性
|参数|说明|类型|可选值|是否必填|默认值|
|--|--|--|--|--|--|
|tag|最终会统一作为tab的名称|string||true|-|
import Vue from 'vue'
import App from './App.vue'
// import TabCarousel from '../lib/vueTabCarousel.umd.js'
import TabCarousel from '../src'
// import transform from '@/directives/transform'
// import '@/assets/styles/index.scss'

// Vue.directive('transform', transform)
// console.log(element)
Vue.use(TabCarousel)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

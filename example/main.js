import Vue from 'vue'
import App from './App.vue'
import * as TabCarousel from '../lib/vue-tab-carousel.umd.js'
// import TabCarousel from '../src'
// import transform from '@/directives/transform'
// import '@/assets/styles/index.scss'

// Vue.directive('transform', transform)
console.log(TabCarousel)
// Vue.use(TabCarousel)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
// import TabCarousel from '../lib/vueTabCarousel.umd.js'
import TabCarousel from '../src'
import router from './router'
// import transform from '@/directives/transform'
// import '@/assets/styles/index.scss'

// Vue.directive('transform', transform)
// console.log(element)
Vue.use(TabCarousel)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
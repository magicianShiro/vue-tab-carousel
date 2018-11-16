import Vue from 'vue'
import App from './App.vue'
import transform from '@/directives/transform'
import '@/assets/styles/index.scss'

Vue.directive('transform', transform)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

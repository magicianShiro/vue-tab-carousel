import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'app',
    component: () => import('example/components/Navi.vue')
  },
  {
    path: '/tab',
    name: 'tab',
    component: () => import('example/components/Tab.vue')
  },
  {
    path: '/carousel',
    name: 'carousel',
    component: () => import('example/components/Carousel.vue')
  },
  {
    path: '/loadmore',
    name: 'loadmore',
    component: () => import('example/components/LoadMore.vue')
  },
  {
    path: '/tab_carousel',
    name: 'tab_carousel',
    component: () => import('example/components/TabCarousel.vue')
  }
]

export default new VueRouter({
  routes
})

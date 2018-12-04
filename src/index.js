// import Scroll from './components/Scroll'
import Tab from './components/Tab'
// import Carousel from './components/Carousel'
// import LoadMore from './components/LoadMore'
// import TabCarousel from './components/TabCarousel'
// import TabCarouselItem from './components/TabCarouselItem'
import './assets/styles/index.scss'
const components = [
  // Scroll,
  Tab,
  // Carousel,
  // LoadMore,
  // TabCarousel,
  // TabCarouselItem
]

export default {
  install (Vue) {
    components.forEach(component => {
      Vue.component(component.name, component)
    })
  }  
}

// const install = function (Vue) {
//   components.forEach(component => {
//     Vue.component(component.name, component)
//   })
// }

// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue)
// }

// // export {
// //   // Scroll,
// //   Tab,
// //   // Carousel,
// //   // LoadMore,
// //   // TabCarousel,
// //   // TabCarouselItem
// // }

// // export default {
// //   install,
// //   // Scroll,
// //   Tab,
// //   // Carousel,
// //   // LoadMore,
// //   // TabCarousel,
// //   // TabCarouselItem
// // }

// module.exports = {
//   install,
//   Tab
// }

// module.exports.default = module.exports

import Scroll from '../package/Scroll'
import Tab from '../package/Tab'
import Carousel from '../package/Carousel'
import LoadMore from '../package/LoadMore'
import TabCarousel from '../package/TabCarousel'
import TabCarouselItem from '../package/TabCarouselItem'
import './assets/styles/index.scss'
const components = [
  Scroll,
  Tab,
  Carousel,
  LoadMore,
  TabCarousel,
  TabCarouselItem
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  Scroll,
  Tab,
  Carousel,
  LoadMore,
  TabCarousel,
  TabCarouselItem
}

export default {
  install,
  Scroll,
  Tab,
  Carousel,
  LoadMore,
  TabCarousel,
  TabCarouselItem
}

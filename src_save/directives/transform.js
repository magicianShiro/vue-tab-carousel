import Transform from "alloytouch/transformjs"
import 'alloytouch/transformjs/asset/to.js'
// console.log(window.To)
export default {
  bind: function(el, binding){
    Transform(el)
    var value = binding.value
    for(var key in value){
      el[key] = value[key]
    }
  },
  update: function(el, binding){
    var value = binding.value
    for(var key in value){
      console.log(key)
      console.log(value[key])
      window.To.go(el, 'transform', `translateX(${value[key]}px)`, 600)
      // window.To(el, key, value[key], 600)
      // el[key] = value[key]
    }
    
  },
  unbind: function(){

  }
}

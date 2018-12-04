
import Vue from 'vue'
class Loading {
  constructor (options) {
    // this.content = options.content
    this.width = options.width || '50px'
    this.height = options.height || '50px'
    this.color = options.color || '#333'
    this.start()
  }
  start () {
    this.createEl()
    this.append()
    this.setElement()
    this.setStyle()
    this.addEvent()
    // this.show()
  }
  show () {
    this.divEl.style.display = 'block'
    this.divEl.classList.add('navi-loading--active')
  }
  hide () {
    this.divEl.classList.add('navi-loading--leave')
  }
  createEl () {
    this.divEl = document.createElement('div')
    this.divEl.classList.add('navi-loading')
    this.divEl.classList.add('navi-loading__mask')
    this.divEl.style.zIndex = Loading.zIndex.toString()
    let html = `
      <div class="navi-loading-mask"></div>
      <div class="navi-loading-container">
        <svg class="navi-loading-svg">
          <use xlink:href="#icon-loading-bars">
          </use>
        </svg>
      </div>
    `
    // this.divEl.innerHTML = html
    this.divEl.innerHTML = html
  }
  append () {
    this.bodyEl = document.querySelector('body')
    this.bodyEl && this.bodyEl.appendChild(this.divEl)
  }
  setElement () {
    this.contentEl = document.querySelector('.navi-loading-container')
    this.maskEl = document.querySelector('.navi-loading-mask')
    this.loadingEl = document.querySelector('.navi-loading-svg')
  }
  setStyle () {
    if (this.loadingEl) {
      this.loadingEl.style.width = this.width
      this.loadingEl.style.height = this.height
      this.loadingEl.style.fill = this.color
    }
    if (this.contentEl) {
      let contentWidth = this.contentEl.offsetWidth
      this.contentEl.style.marginLeft = (-contentWidth / 2) + 'px'
    }
    this.divEl.style.display = 'none'
  }
  addEvent () {
    this.maskEl && this.maskEl.addEventListener('touchmove', e => e.preventDefault())
    // this.maskEl && this.maskEl.addEventListener('click', this.hide.bind(this))
    this.contentEl && this.contentEl.addEventListener('animationend', this.animationend.bind(this))
  }
  animationend () {
    if (this.divEl.classList.contains('navi-loading--leave')) {
      this.divEl.classList.remove('navi-loading--leave')
      this.divEl.style.display = 'none'
      // this.bodyEl && this.bodyEl.removeChild(this.divEl)
    } else if (this.divEl.classList.contains('navi-loading--active')) {
      this.divEl.classList.remove('navi-loading--active')
    }
  }
  changeContent (content) {
    let contentEl = document.querySelector('.navi-loading__content')
    if (contentEl) {
      contentEl.innerText = content
    }
  }
  open (options = {}) {
    this.width = options.width || '50px'
    this.height = options.height || '50px'
    this.color = options.color || '#333'
    this.loadingEl.style.width = this.width
    this.loadingEl.style.height = this.height
    this.loadingEl.style.fill = this.color
    this.show()
  }
  close() {
    this.hide()
  }
}

let loading
function fun (options) {
  Loading.zIndex++
  loading = new Loading(options || {})
  return loading 
}

Vue.prototype.$loading = fun()

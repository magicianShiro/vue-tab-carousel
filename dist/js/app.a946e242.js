(function(t){function n(n){for(var i,a,u=n[0],c=n[1],l=n[2],f=0,d=[];f<u.length;f++)a=u[f],r[a]&&d.push(r[a][0]),r[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);s&&s(n);while(d.length)d.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var t,n=0;n<o.length;n++){for(var e=o[n],i=!0,u=1;u<e.length;u++){var c=e[u];0!==r[c]&&(i=!1)}i&&(o.splice(n--,1),t=a(a.s=e[0]))}return t}var i={},r={app:0},o=[];function a(n){if(i[n])return i[n].exports;var e=i[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=i,a.d=function(t,n,e){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)a.d(e,i,function(n){return t[n]}.bind(null,i));return e},a.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=n,u=u.slice();for(var l=0;l<u.length;l++)n(u[l]);var s=c;o.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"259a":function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("097d");var i=e("2b0e"),r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("navi-tab")],1)},o=[],a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"navi-tab"},[e("navi-scroll",{ref:"naviScroll",attrs:{vertical:!1,property:"translateX",min:t.min}},[e("div",{staticClass:"navi-tab__wrap"},[e("ul",{ref:"tabList",staticClass:"navi-tab__list"},t._l(t.tabList,function(n,i){return e("li",{key:i,staticClass:"navi-tab__item",class:{"navi-tab__item--active":i===t.activeIndex},on:{click:function(n){t.tabClick(n,i)}}},[t._v(t._s(n))])})),e("p",{ref:"line",staticClass:"navi-tab__line",style:{transition:t.transition}})])])],1)},u=[],c=(e("5df3"),e("1c4c"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"wrapper"}},[e("div",{attrs:{id:"scroller"}},[t._t("default")],2)])}),l=[],s=(e("c5f6"),e("a29b")),f=e.n(s),d=e("3879"),p=e.n(d),v={props:{vertical:{type:Boolean,default:!0},property:{type:String,default:"translateY"},min:{type:Number,default:0},max:{type:Number,default:0}},data:function(){return{alloyTouch:null}},mounted:function(){var t=this;setTimeout(function(){t.init()},20)},methods:{init:function(){var t=this,n=document.querySelector("#scroller");p()(n,!0),this.alloyTouch=new f.a({touch:"#wrapper",vertical:t.vertical,target:n,property:this.property,sensitivity:1,factor:1,min:this.min,max:this.max,animationEnd:function(n){t.$emit("animationEnd",n)},pressMove:function(n,e){t.$emit("pressMove",n,e)},change:function(n){t.$emit("change",n)},touchStart:function(n,e){t.$emit("touchStart",n,e)},touchMove:function(n,e){t.$emit("touchMove",n,e)},toucheEnd:function(n,e){t.$emit("touchEnd",n,e)},tap:function(n,e){t.$emit("tap",n,e)}})},to:function(t,n,e){this.alloyTouch.to(t,n,e)},stop:function(){this.alloyTouch.stop()}}},h=v,m=(e("d8f0"),e("2877")),b=Object(m["a"])(h,c,l,!1,null,null,null);b.options.__file="index.vue";var y=b.exports,_={components:{NaviScroll:y},data:function(){return{tabList:["标签1","标签2","标签3","标签4","我是标签5","标签6","标签7","标签8","标签9","标签10"],ulWidth:0,min:0,activeIndex:0,transition:"transform .3s"}},methods:{calculatedWidth:function(){var t=Array.from(document.querySelectorAll(".navi-tab__item")).reduce(function(t,n){var e=parseInt(window.getComputedStyle(n,null)["margin-left"]),i=parseInt(window.getComputedStyle(n,null)["margin-right"]),r=n.offsetWidth;return t+=e+i+r,t},0);this.ulWidth=t,this.$refs.tabList.style.width=t+"px",this.min=-t+window.innerWidth},tabClick:function(t,n){this.activeIndex=n;var e=t.target,i=parseInt(window.getComputedStyle(e,null)["margin-right"]),r=e.offsetWidth,o=e.offsetLeft-i,a=window.innerWidth,u=(a-r)/2,c=this.ulWidth-a,l=o-u,s=this.$refs.line.offsetWidth,f=(r-s)/2,d=u+i+l+f;l<0&&(l=0,d=e.offsetLeft+f),l>c&&(l=c,d=e.offsetLeft+f);var p=300;this.$refs.naviScroll.to(-l,p),this.$refs.line.style.transform="translateX(".concat(d,"px)")}},mounted:function(){var t=this;this.$nextTick(function(){t.calculatedWidth()})}},g=_,w=(e("67d4"),Object(m["a"])(g,a,u,!1,null,"4c9c4bf5",null));w.options.__file="index.vue";var x=w.exports,S={name:"app",components:{NaviTab:x}},$=S,O=(e("5c0b"),Object(m["a"])($,r,o,!1,null,null,null));O.options.__file="App.vue";var j=O.exports,T=(e("f2be"),{bind:function(t,n){p()(t);var e=n.value;for(var i in e)t[i]=e[i]},update:function(t,n){var e=n.value;for(var i in e)console.log(i),console.log(e[i]),window.To.go(t,"transform","translateX(".concat(e[i],"px)"),600)},unbind:function(){}});e("6861");i["a"].directive("transform",T),i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(j)}}).$mount("#app")},"5c0b":function(t,n,e){"use strict";var i=e("5e27"),r=e.n(i);r.a},"5e27":function(t,n,e){},"61fe":function(t,n,e){},"67d4":function(t,n,e){"use strict";var i=e("61fe"),r=e.n(i);r.a},6861:function(t,n,e){},d8f0:function(t,n,e){"use strict";var i=e("259a"),r=e.n(i);r.a}});
//# sourceMappingURL=app.a946e242.js.map
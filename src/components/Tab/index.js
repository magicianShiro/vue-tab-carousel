import NaviTab from './src/index';

/* istanbul ignore next */
NaviTab.install = function(Vue) {
  Vue.component(NaviTab.name, NaviTab);
};

export default NaviTab
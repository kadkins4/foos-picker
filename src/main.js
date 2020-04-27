import Vue from 'vue';
import App from './App.vue';
import _ from 'lodash';
import './assets/main.css'; // global styling

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faCaretDown, faCaretUp, faStopwatch, faBed, faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faPlus, faCaretDown, faCaretUp, faBed, faStopwatch, faCheckSquare, faSquare);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.prototype._ = _;

new Vue({
  render: h => h(App),
}).$mount('#app')

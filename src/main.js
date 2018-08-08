import Vue from 'vue'
import App from './App.vue'

import {store} from './store';
import router from './routes';


new Vue({
  el: '.wrapper',
  store,
  router,
  render: h => h(App)
})

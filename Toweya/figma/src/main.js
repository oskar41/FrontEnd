import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import {store} from './store';
import {router} from './routes.js';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
    store,
    router
}).$mount('#app')

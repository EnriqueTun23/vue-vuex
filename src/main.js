import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { routes } from './routes';
import VueRouter from 'vue-router';

import {store} from './store/store';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
})
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router,
  store
}).$mount('#app')

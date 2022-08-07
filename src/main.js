import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import globalMethods from './global/index';

Vue.config.productionTip = false

new Vue({
  globalMethods,
  router,
  render: h => h(App),
}).$mount('#app')

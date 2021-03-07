import Vue from 'vue'
import App from './App.vue'
// tools
import VueFullPage from 'vue-fullpage.js'
import { VueMasonryPlugin } from 'vue-masonry';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
// css

Vue.config.productionTip = false

Vue.use(VueFullPage)
Vue.use(VueMasonryPlugin)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

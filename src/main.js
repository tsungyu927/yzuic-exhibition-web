import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueYoutube from 'vue-youtube';

// tools
import VueFullPage from 'vue-fullpage.js';
import { VueMasonryPlugin } from 'vue-masonry';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// css
// import '@/scss/all.scss';

Vue.config.productionTip = false;
Vue.prototype.$ajax = axios;
Vue.use(VueFullPage);
Vue.use(VueMasonryPlugin);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueYoutube);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

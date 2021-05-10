import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueYoutube from 'vue-youtube';

// tools
import VueLazyload from 'vue-lazyload';
import VueFullPage from 'vue-fullpage.js';
import 'fullpage.js/vendors/scrolloverflow';
import { VueMasonryPlugin } from 'vue-masonry';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
// css
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

//font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// css
// import '@/scss/all.scss';

Vue.config.productionTip = false;
Vue.prototype.$ajax = axios;
Vue.use(VueYoutube);
const loadimage = require('./assets/home/transparent.png');

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: loadimage,
  attempt: 1,
});
Vue.use(VueFullPage);
Vue.use(VueMasonryPlugin);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

library.add(faBars, faArrowLeft);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

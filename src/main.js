import Vue from 'vue';
import router from './router/index';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  router,
  components: {
    App,
  },
  render: h => h(App),
}).$mount('#app');

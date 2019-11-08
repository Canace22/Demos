import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

const app = new Vue({
  components: {
    App,
  },
  render: h => h(App),
});

window.mountApp = () => {
  app.$mount('#app');
};

window.mountApp();

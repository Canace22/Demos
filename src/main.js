import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

// new Vue({
// router,
// store,
//   render: h => h(App),
// }).$mount('#app');
const app = new Vue({
  components: {
    App,
  },
  render: h => h(App),
});

window.mountApp = () => {
  app.$mount('#app');
};

if (process.env.NODE_ENV === 'production') {
  if (window.STYLE_READY) {
    window.mountApp();
  }
} else {
  window.mountApp();
}

import Vue from 'vue';
import Skeleton from 'components/skeleton/skeleton.vue';

export default new Vue({
  components: {
    Skeleton,
  },
  render: h => h(Skeleton),
});

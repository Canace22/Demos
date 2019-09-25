import Vue from 'vue';
import Skeleton from '../../components/Skeleton.vue';
// import Skeleton from '../../components/skeleton-box.vue';

export default new Vue({
  components: {
    Skeleton,
  },
  render: h => h(Skeleton),
});

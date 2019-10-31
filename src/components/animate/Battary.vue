<template>
  <div class="battery-log"></div>
</template>

<script>
import anime from 'animejs';

export default {
  mounted() {
    const el = document.querySelector('.battery-log');
    this.makeBattary(el);
  },
  methods: {
    makeBattary(el) {
      const logEl = el;
      const battery = {
        charged: '0%',
        cycles: 120,
      };

      anime({
        targets: battery,
        charged: '100%',
        cycles: 130,

        easing: 'linear',
        update() {
          logEl.innerHTML = JSON.stringify(battery.cycles);
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

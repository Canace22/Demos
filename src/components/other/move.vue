<template>
  <div class="move-container">
    <div ref="moveDom" class="move-dom"></div>
  </div>
</template>

<script>
export default {
  name: 'move',
  data() {
    return {
      relativeX: 0,
      relativeY: 0,
    };
  },
  mounted() {
    const el = this.$refs.moveDom;
    this.move(el);
  },
  methods: {
    move(el) {
      const itemWrap = el.parentNode;
      const moveItem = (event) => {
        if (event.buttons > 0) {
          const w = +window.getComputedStyle(el).width.replace('px', '');
          const h = window.getComputedStyle(el).height.replace('px', '') / 2;
          console.log(el.x);
          el.style.left = `${event.clientX - w}px`;
          el.style.top = `${event.clientY - h}px`;
        }
      };
      if (window.PointerEvent) {
        itemWrap.addEventListener('pointermove', (e) => {
          if (e.getCoalescedEvents) {
            e.getCoalescedEvents().forEach((coalescedEvent) => {
              moveItem(coalescedEvent);
            });
          } else moveItem(e);
        });
      } else {
        itemWrap.addEventListener('mousemove', moveItem);
      }
    },

  },
};
</script>

<style lang="scss" scoped>
.move-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  .move-dom {
    position: absolute;
    width: 300px;
    height: 300px;
    background: orange;
  }
}
</style>

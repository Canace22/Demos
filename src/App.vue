<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss">
.html,
.body {
  width: 100%;
  height: 100%;
  background-color: #fbebd7;
  overflow: hidden;
}
.body {
  margin: 0;
}
#app {
  width: 100%;
  height: 100%;
  font-family: 'Microsoft Yahei',sans-serif;
}
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #fbebd7;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #f3cb81;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #e9af40;
}
input {
  outline: none;
}
</style>

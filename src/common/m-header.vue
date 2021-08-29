<template>
  <header class="header">
      <h1 class="title">Demos</h1>
      <nav class="nav">
        <slot name="nav"></slot>
      </nav>
    </header>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: title;
  src: url(../../public/font/font.ttf);
}
.header {
  width: 100%;
  height: 4.5rem;
  line-height: 4.5rem;
  background: #e9af40;
  .title {
    text-align: center;
    width: 12.5rem;
    font-family: title;
    color: #781e02;
    padding: 0 0.625rem;
    margin: 0;
  }
  .nav {
    display: none;
  }
}
@media (max-width: 1280px) {
  .header {
    display: flex;
    .nav {
      display: flex !important;
      align-items: center;
      height: 100%;
      margin: auto;
      .item {
        display: flex;
        align-items: center;
        height: 100%;
        color: #781e02;
        font-size: 1.25rem;
        font-weight: 600;
        padding: 0 1.25rem;
        cursor: pointer;
        .icon {
          display: none;
        }
      }
    }
  }
}
</style>

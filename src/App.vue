<template>
  <div id="app" class="app">
    <div class="app-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Loader from './views/Loader';
export default {
  name: 'App',
};
</script>

<style lang="scss">
@import './scss/all.scss';

body {
  margin: 0;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.app {
  position: relative;
  &-container {
    width: 100%;
    height: 100%;
  }
}
</style>

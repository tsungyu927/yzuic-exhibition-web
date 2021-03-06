<template>
  <div id="app">
    <Exhibition />
  </div>
</template>

<script>
import Exhibition from './views/Exhibition'

export default {
  name: 'App',
  components: {
    Exhibition,
  }
}
</script>

<style scoped>
body{
  margin: 0;
  width: 100vw;
  height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
}
</style>

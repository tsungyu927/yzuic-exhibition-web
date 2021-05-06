<template>
  <div id="app" class="app">
    <div class="app-container">
      <router-view />
    </div>
    <RightFooter :is-show="isShowRF" />
  </div>
</template>

<script>
import Loader from './views/Loader';
import RightFooter from './components/RightFooter';

export default {
  name: 'App',
  data() {
    return {
      // show right footer
      isShowRF: false,
    };
  },
  created() {
    window.addEventListener('scroll', this.showFooter);
  },
  methods: {
    //滑到末端 出現 right bar
    showFooter() {
      // console.log('垂直位移量', window.scrollY);
      // console.log('可見螢幕高度', window.screen.height);
      // console.log('網頁內文高度', document.body.scrollHeight);
      if (
        window.scrollY + window.screen.height >=
        document.body.scrollHeight - 1
      ) {
        console.log('end');
        this.isShowRF = true;
      } else {
        this.isShowRF = false;
      }
    },
  },
  components: {
    RightFooter,
  },
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

<template>
  <div id="app" class="app">
    <!-- 右上角的menu-btn -->
    <router-link to="/" tag="button" class="menu-btn">目錄</router-link>

    <div class="app-container">
      <router-view />
    </div>

    <!-- 左下角的選單 -->
    <LeftBar />
    <!-- 右邊的 footer -->
    <RightBar />
    <!-- 右下角的 footer -->
    <div class="sideBar bottom">
      Yan Ze University Information Communication 24th Graduation Exhibition
    </div>
  </div>
</template>

<script>
import LeftBar from '@/components/LeftBar.vue';
import RightBar from '@/components/RightBar.vue';

export default {
  name: 'App',
  components: {
    LeftBar,
    RightBar,
  },
};
</script>

<style lang="scss">
@import './scss/all.scss';

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
  .bottom {
    bottom: 4%;
    min-height: 30px;
    max-width: 430px;
    right: 10%;
    font-size: 0.7rem;
    line-height: 30px;
  }
}
</style>

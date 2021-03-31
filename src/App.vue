<template>
  <div id="app" class="app">
    <!-- 右上角的btn -->
    <button class="menu-btn">
      <router-link to="/">目錄</router-link>
    </button>

    <div class="app-container">
      <router-view />
    </div>

    <!-- 左下角的選單 -->
    <div class="left">
      <LeftBar />
    </div>
    <!-- 右邊的 footer -->
    <div class="right">
      <RightBar />
    </div>
    <!-- 右下角的 footer -->
    <div class="bottom">
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
  &-bar {
    display: none;
    @include md-width() {
      color: #ff1a83;
      font-size: 0.7rem;
      display: flex;
      position: fixed;
      z-index: 1;
      bottom: 2%;
      height: 40%;
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
      padding: 0 1rem;
    }
  }
  .left,
  .right,
  .bottom {
    display: none;
    @include md-width() {
      display: block;
      position: fixed;
      min-width: 27px;
      z-index: 1;
      bottom: 10%;
      max-height: 280px;
      color: $exhibition-mainColor;
      font-size: 0.9rem;
      font-weight: bold;
    }
  }
  .left {
    left: 3%;
  }
  .bottom {
    bottom: 4%;
    min-height: 30px;
    max-width: 430px;
    right: 10%;
    font-size: 0.7rem;
    line-height: 30px;
  }
  .right {
    right: 3%;
  }
}
</style>

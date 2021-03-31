<template>
  <div id="app" class="app">
    <!-- Loading Anim -->
    <Loader />
    <!-- 右上角的btn -->
    <button class="menu-btn">
      <router-link to="/">目錄</router-link>
    </button>

    <div class="app-container">
      <router-view />
    </div>
    <div class="app-bar">
      <!-- 左下角的選單 -->
      <div class="left">
        <LeftBar />
      </div>
      <!-- 右下角的 footer -->
      <div class="right">
        <RightBar />
      </div>
    </div>
  </div>
</template>

<script>
import LeftBar from '@/components/LeftBar.vue';
import RightBar from '@/components/RightBar.vue';
import Loader from './views/Loader'
export default {
  name: 'App',
  components: {
    LeftBar,
    RightBar,
  },
}
</script>

<style lang="scss">
@import './scss/all.scss';

body{
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
    .left {
      width: 2%;
    }
    .right {
      width: 2%;
      position: relative;
      &::after {
        position: absolute;
        content: 'Yan Ze University Information Communication 24th Graduation Exhibition';
        writing-mode: horizontal-tb;
        width: fit-content;
        word-break: keep-all;
        bottom: 0%;
        right: 180%;
        width: max-content;
      }
    }
  }
}

.menu-btn {
  display: none;
  @include md-width() {
    display: flex;
    position: fixed;
    z-index: 1;
    font-weight: bold;
    line-height: 2.8rem;
    justify-content: center;
    font-size: 1rem;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: $exhibition-mainColor 1px solid;
    top: 2%;
    right: 2%;
    background-color: transparent;
  }
  a {
    color: $exhibition-mainColor;
  }
  &:hover {
    background-color: $exhibition-mainColor;
    a {
      color: white;
    }
  }
}
</style>

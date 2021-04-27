<template>
  <div id="app" class="app">
    <!-- Loading Anim -->
    <!-- <Loader /> -->
    <!-- 目錄modal -->
    <Catalog v-if="openCatalog" class="catalogModal" />
    <!-- 右上角的btn -->
    <button class="menu-btn" @click="handleOpenCatalog">
      <div>目錄</div>
    </button>
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
import LeftBar from '@/components/LeftBar.vue'
import RightBar from '@/components/RightBar.vue'
// import Loader from './views/Loader'
import Catalog from './modal/Catalog'
import gsap from 'gsap'

export default {
  name: 'App',
  data(){
    return {
      openCatalog: false
    }
  },
  components: {
    // Loader,
    LeftBar,
    RightBar,
    Catalog,
  },
  methods: {
    handleOpenCatalog: function(){
      if(this.openCatalog){
        gsap.to('.catalogModal',{
          opacity: 0,
          duration: 0.3
        }).then(()=>{
          this.openCatalog = false
        })
      } else{
        this.openCatalog = true
      }
    },
  }
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
  &-bar {
    display: none;
    @include md-width() {
      color: #ff1a83;
      font-size: 0.7rem;
      display: flex;
      position: fixed;
      z-index: 2;
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
    z-index: 2;
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
  div {
    color: $exhibition-mainColor;
  }
  &:hover {
    background-color: $exhibition-mainColor;
    div {
      color: white;
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
}
</style>

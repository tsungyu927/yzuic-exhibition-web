<template>
  <div id="app" class="app">
    <!-- Loading Anim -->
    <!-- <Loader /> -->
    <!-- 目錄modal -->
    <Catalog v-if="openCatalog" class="catalogModal" v-on:handleCloseModal="handleOpenCatalog"  />
    <!-- 右上角的btn -->
    <button class="menu-btn" @click="handleOpenCatalog">
      <div>目錄</div>
    </button>
    <div class="app-container">
      <router-view />
    </div>
    <RightFooter :is-show="isShowRF" />
  </div>
</template>

<script>
import Loader from './views/Loader';
import RightFooter from './components/RightFooter';
// import Loader from './views/Loader'
import Catalog from './modal/Catalog';
import gsap from 'gsap';

export default {
  name: 'App',
  data() {
    return {
      // show right footer
      isShowRF: false,
      openCatalog: false
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
    handleOpenCatalog: function(){
      if(this.openCatalog){
        gsap.to('.catalogModal',{
          opacity: 0,
          duration: 0.3
        }).then(()=>{
          this.openCatalog = false;
        });
      } else{
        this.openCatalog = true;
      }
    },
  },
  components: {
    RightFooter,
    // Loader,
    Catalog,
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

<template>
  <div class="catalog d-flex flex-column flex-md-row">
    <div class="catalog-left d-flex">
      <div class="catalog-logo">
        <img class="img-fluid" :src="imgSrc" />
      </div>
    </div>
    <div class="catalog-right">
      <div class="catalog-right-bar">
        <router-link class="catalog-btn" to="/">
          <div class="catalog-content" @click="handleCloseModal">
            主頁
          </div>
        </router-link>
        <router-link
          class="catalog-btn"
          :to="{ path: '/', query: { anchor: 'info' } }"
        >
          <div class="catalog-content" @click="handleCloseModal">
            展覽<br />資訊
          </div>
        </router-link>
        <router-link class="catalog-btn" to="/exhibition">
          <div class="catalog-content" @click="handleCloseModal">
            展覽<br />作品
          </div>
        </router-link>
      </div>
      <div class="catalog-right-bar">
        <router-link
          class="catalog-btn"
          :to="{ path: '/', query: { anchor: 'concept' } }"
        >
          <div class="catalog-content" @click="handleCloseModal">
            策展<br />概念
          </div>
        </router-link>
        <router-link class="catalog-btn" to="/organizeTeam">
          <div class="catalog-content" @click="handleCloseModal">
            策展<br />團隊
          </div>
        </router-link>
        <router-link class="catalog-btn" to="/contactus">
          <div class="catalog-content" @click="handleCloseModal">
            聯絡<br />我們
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import horImg from '../assets/logo/horizontal-logo.png';
import verImg from '../assets/logo/vertical-logo.png';

export default {
  name: 'Catalog',
  data() {
    return {
      imgSrc: verImg,
    };
  },
  beforeDestroy(){
    window.removeEventListener('resize', this.handleOrientationChange, false);
  },
  mounted() {
    // document.querySelector('body').style.overflowY = 'hidden';
    // 確認方向
    this.handleOrientationChange();
    window.addEventListener('resize', this.handleOrientationChange, false);
  },
  methods: {
    handleOrientationChange: function() {
      if (window.innerWidth > window.innerHeight) {
        // landscape
        this.imgSrc = verImg;
      } else {
        // portrait
        this.imgSrc = horImg;
      }
    },
    handleCloseModal() {
      // document.querySelector('body').style.overflowY = 'scroll';
      // call close
      this.$emit('handleCloseModal');
    }
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.catalog {
  pointer-events: all;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 20;
  width: 100vw;
  height: 100vh;
  background-color: #ff1b82;
  animation: 0.3s linear openAnim;
  $catalog-font-color: #fff;
  // left top
  &-left {
    width: 100%;
    height: 30%;
    @include md-width() {
      width: 30%;
      height: 100%;
    }
    .catalog-logo {
      margin: auto;
      width: 80%;
      @include md-width() {
        max-width: 40%;
      }
    }
  }

  // right bottom
  &-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &-right-bar {
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    @include md-width() {
      width: 80%;
    }
  }
  &-btn {
    cursor: pointer;
    position: relative;
    width: 20%;
  }
  &-btn:after {
    content: '';
    display: block;
    padding-bottom: 100%;
    border: 3px solid #fff;
    border-radius: 50%;
  }
  &-btn:hover {
    background-color: #fff;
    border-radius: 50%;
    & > div {
      color: #ff1b82;
    }
  }
  &-content {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 1.5em;
    font-weight: bold;
    line-height: 1.3em;
  }
}

@keyframes openAnim {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>

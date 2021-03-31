<template>
  <div class="gallery-container">
    <div class="navbar">
      <NavBar />
    </div>
    <full-page ref="fullpage" :options="options">
      <div class="section">
        <img class="background" src="../assets/back.jpg" />
      </div>
      <div class="section">
        <WaterFall />
      </div>
    </full-page>
  </div>
</template>

<script>
import NavBar from '../components/NavBar';
import WaterFall from '../components/WaterFall';

export default {
  name: 'Exhibition',
  data() {
    return {
      options: {
        afterLoad: this.afterLoad,
      },
    };
  },
  methods: {
    afterLoad(origin, destination) {
      if (destination.isLast) {
        this.$refs.fullpage.api.setAllowScrolling(false, 'up');
        // 滑到最後一頁了
        console.log('After load end');
      }
    },
  },
  components: {
    NavBar,
    WaterFall,
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/all.scss';
.gallery-container,
.background {
  width: 100%;
  height: 100%;
}
.scetion {
  width: 100%;
  height: 100%;
}

.navbar {
  position: fixed;
  z-index: 1;
  right: 20px;
  height: 100%;
  bottom: 0;
  @include md-width() {
    position: absolute;
    z-index: 1;
    top: 15px;
    right: 0;
    bottom: auto;
    width: 100%;
    height: auto;
  }
}
</style>

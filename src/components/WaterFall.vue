<template>
  <div class="photo-grid-container">
    <!-- 手機板 header -->
    <div class="pg-header header-pink d-flex d-md-none">
      <div class="header__icon previous">
        <img
          class="img-fluid"
          src="../assets/icons/phone-arrow_white.svg"
          @click="previous"
        />
      </div>
      <div class="title">展覽作品</div>
      <div class="header__icon menu">
        <img class="img-fluid" src="../assets/icons/phone-menu_pink.svg" />
      </div>
    </div>

    <div class="photo-grid">
      <div
        v-masonry
        item-selector=".photo"
        column-width=".photo"
        class="scroll-content"
      >
        <div
          v-masonry-tile
          class="photo"
          :key="imahe.title"
          v-for="imahe in images"
        >
          <img :src="imahe.url" :alt="imahe.title" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import image from '../data/galleryData';

export default {
  name: 'WaterFall',
  data() {
    return {
      images: image,
    };
  },
  methods: {
    previous() {
      return this.$router.push('Home');
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped>
@import '../scss/all.scss';

// waterFall-header
.header-pink {
  background-color: $exhibition-mainColor;
  @include md-width() {
    display: none;
  }
  .title {
    color: #ffff;
  }
}

.photo-grid-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.photo-grid {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}
.scroll-content {
  width: 100%;
  height: max-content;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 100%;
}
.photo {
  width: 50%;
  @include md-width() {
    width: 20%;
  }
  height: max-content;
  display: flex;
  flex-direction: column;
}
.photo img {
  width: 100%;
  height: auto;
}
</style>

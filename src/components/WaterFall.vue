<template>
  <div class="photo-grid-container">
    <!-- 手機板才有 -->
    <div class="waterFall-header">
      <img class="waterFall-header-previous" src="../assets/icons/phone-arrow_pink.svg" />
      <p class="waterFall-header-title">展覽作品</p>
      <img class="waterFall-header-menu" src="../assets/icons/phone-menu_pink.svg" />
    </div>
    <div class="waterFall-navbar">
      <NavBar/>
    </div>

    <div class="photo-grid">
      <div v-masonry item-selector=".photo" column-width=".photo" class="scroll-content">
        <div v-masonry-tile class="photo" :key="imahe.title" v-for="imahe in images">
          <img :src="imahe.url"  :alt="imahe.title"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import NavBar from '../components/NavBar'
  import image from '../data/galleryData'

  export default {
    name: 'WaterFall',
    data(){
      return {
        images: image
      }
    },
    methods: {

    },
    components: {
      NavBar,
    }
  }
</script>

<style lang="scss">
  @import "../scss/all.scss";

  // waterFall-header
  .waterFall-header {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 4fr 1fr;
    background-color: $exhibition-mainColor;
    height: fit-content;
    padding: 1.5rem 0;
    @include md-width() {
      display: none;
    }

    &-title {
      position: relative;
      color: white;
      font-size: 2.5rem;
      font-weight: bold;
      word-break: keep-all;
      @include md-width() {
        font-size: 3.2rem;
      }
    }

    &-previous, &-menu {
      width: 2.5rem;
      height: 2.5rem;
      margin: auto;
    }
  }

  .photo-grid-container{
    position: relative;
    width: 100%;
    height: 100%;
  }
  .photo-grid{
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .scroll-content{
    width: 100%;
    height: max-content;
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 100%;
  }
  .photo{
    width: 25%;
    height: max-content;
    display: flex;
    flex-direction: column;
  }
  .photo img{
    width: 100%;
    height: auto;
  }
</style>
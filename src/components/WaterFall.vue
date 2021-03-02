<template>
  <div class="photo-grid-container">
    <NavBar />
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
import NavBar from './NavBar'
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
    NavBar
  }
}
</script>

<style scoped>
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
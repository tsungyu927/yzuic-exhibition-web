<template>
  <div class="slide-modal">
    <b-carousel
      id="slide-carousel"
      v-model="slide"
      :interval="0"
      controls
      indicators
      background="#000"
      img-width="1024"
      img-height="576"
    >
      <div v-for="img in image" :key="img" >
        <b-carousel-slide :img-src="img" >
        </b-carousel-slide>
      </div>
    </b-carousel>
  </div>
</template>

<script>
// example of component
// 使用boostrap carousel，目前array裡面只能傳網址，不能local (待研究)
// <SlideModal :index="1" :image="['https://picsum.photos/1024/480/?image=10','https://picsum.photos/1024/480/?image=12']" />

export default {
  name: 'SlideModal',
  props: {
    image: {
      type: Array,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    }
  },
  data(){
    return {
      slide: this.index,
      sliding: null,
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.slide-modal{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(89,89,89,0.5);
}

</style>
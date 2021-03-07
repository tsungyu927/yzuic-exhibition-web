<template>
  <div class="slide-modal">
    <button class="slide-close-btn" type="button" @click="handleClose()">
      <img src="../assets/logo/closeBtn_pink.svg" />
    </button>
    <b-carousel
      id="slide-carousel"
      v-model="slide"
      :interval="0"
      controls
      background="transparent"
    >
        <b-carousel-slide v-for="img in image" :key="img" :img-src="img" >
        </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
// example of component
// 使用boostrap carousel，目前array裡面只能傳網址，不能local (待研究)
    // <SlideModal
    //   :index="1" 
    //   :image="[
    //     'https://lh4.googleusercontent.com/proxy/la_whlWnRyQlgYtu_F8S-Cs25yzCZedtOFViVfGNWO_x_TFyf9CUFoxpQA6Q79Tp40ozqPQ6ydJbH-PzbePTAyMlikL3WZDZHABmpQdH4tB9ab9Ea2vVWWkwPJ2xqy1pDYz_Rj7y=s0-d',
    //     'https://images.pexels.com/photos/90270/pexels-photo-90270.jpeg?cs=srgb&dl=pexels-vibez-dzn-90270.jpg&fm=jpg',
    //     'https://lh3.googleusercontent.com/proxy/DenWqVwME3BJ5-BKVbMWRuC52IMqu7atVXVt2GCKTUJLN5lzqmOJ47it9igzwF-sswqk32AwfqbsqNfTB7kghl75kmMZY4JByu1VsJiS-q_ZX9Gra8Qup0iJ6XcgK_wg-mwcyFIJYGY33YaWy1tR_7yM66EdS1leeObxnGf0',
    //     'https://s1.1zoom.me/b5050/296/Mountains_Scenery_Sky_452695_1920x1080.jpg',
    //     'https://yoyotours.com.tw/wp-content/uploads/2011/06/Paris-Wallpaper-Free-Download.jpg',
    //     'http://i.imgur.com/lX2so.jpg'
    //   ]"
    // /> 

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
    handleClose: () => {
      console.log('close modal')
    }
  }
}
</script>

<style>
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
  background-color: rgba(0,0,0,0.8);
}
/* 右上關閉按鈕 */
.slide-close-btn{
  position: absolute;
  top: 5%;
  right: 5%;
  border: none;
  background-color: transparent;
}
/* carouse 本體 */
.carousel{
  width: 90%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

}
.carousel-inner{
  width: 80% !important;
  height: auto !important;
}
/* 左右選擇的按鈕 */
.carousel-control-prev, .carousel-control-next{
  position: absolute !important;
  width: 10% !important;
  height: 100% !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}
/* 左右選擇的icon */
.carousel-control-prev-icon{
  width: 50px !important;
  height: 50px !important;
  background-image: url('../assets/logo/carousel-prev.svg') !important;
}
.carousel-control-next-icon{
  width: 50px !important;
  height: 50px !important;
  background-image: url('../assets/logo/carousel-next.svg') !important;
}

</style>
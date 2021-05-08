<template>
  <div class="catalog">
    <div class="catalog-left">
      <img class="catalog-logo" :src="imgSrc" />
    </div>
    <div class="catalog-right">
      <div class="catalog-right-bar">
        <div class="catalog-btn">
          <div class="catalog-content">
            主頁
          </div>        
        </div>
        <div class="catalog-btn">
          <div class="catalog-content">
            展覽<br>資訊
          </div>        
        </div>
        <div class="catalog-btn">
          <div class="catalog-content">
            展覽<br>作品
          </div>        
        </div>
      </div>
      <div class="catalog-right-bar">
        <div class="catalog-btn">
          <div class="catalog-content">
            策展<br>概念
          </div>        
        </div>
        <div class="catalog-btn">
          <div class="catalog-content">
            策展<br>團隊
          </div>        
        </div>
        <div class="catalog-btn">
          <div class="catalog-content">
            聯絡<br>我們
          </div>        
        </div>
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
    return{
      imgSrc: verImg
    };
  },
  mounted() {
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
    }
  }
};
</script>

<style lang="scss" scoped>
.catalog{
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background-color: #FF1B82;
  animation:  0.3s linear openAnim;
  display: flex;
  flex-direction: column;
  @include md-width() {
    flex-direction: row;
  }

  $catalog-font-color: #fff;
  // left top
  &-left{
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    @include md-width() {
      width: 30%;
      height: 100%;
      justify-content: center;
    }
  }
  &-logo{
    margin-left: 0;
    margin-top: 2em;
    width: 80%;
    height: auto;
    @include md-width() {
      margin-left: 2em;
      margin-top: 0em;
      width: auto;
      height: 80%;
    }
  }

  // right bottom
  &-right{
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    @include md-width() {
      width: 70%;
      height: 100%;
    }
  }
  &-right-bar{
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
  &-btn{
    cursor: pointer;
    position: relative;
    width: 20%;
  }
  &-btn:after{
    content: "";
    display: block;
    padding-bottom: 100%;
    border: 3px solid #fff;
    border-radius: 50%;
  }
  &-btn:hover{
    background-color: #fff;
    border-radius: 50%;
    & > div{
      color: #FF1B82;
    }
  }
  &-content{
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

@keyframes openAnim{
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}
</style>
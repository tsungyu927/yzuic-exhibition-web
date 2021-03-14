<template>
  <div class="works-grid">
    <div class="works-grid-header">
      <img class="previous" src="../assets/icons/phone-arrow_pink.svg"  @click="previous"/>
      <div class="title">遊戲</div>
      <img class="menu" src="../assets/icons/phone-menu_white.svg"/>
    </div>
    <div class="works-grid-container">
      <div class="type-box"> 
      </div>
      <div class="intro-card">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'WorksGrid',
  data(){
    return {
     
    }
  },
  methods: {
    previous() {
      console.log('click');
      return this.$router.push('Exhibition');
      
    }
  },
  components: {
  },
}
</script>

<style lang="scss" scoped>
  @import "../scss/all.scss";
  .works-grid {
    width: 100%;
    height: 100%;
  }

  .works-grid {
    &-header {
      display: grid;
      width: 100%;
      grid-template-columns: 1fr 4fr 1fr;
      background-color: white;
      height: fit-content;
      padding: 1.5rem 0;
      @include md-width() {
        display: none;
      }
    }
    &-container {
      height: 100%;
      padding: 2rem 2rem 0 2rem;
      @include md-width() {
        display: grid;
        grid-template-columns: 20% 1fr;
        grid-gap: 3rem;
        height: 100%;
        padding: 5rem 5rem 0 5rem;
      }
    }
  }

  .title {
    position: relative;
    color: $exhibition-mainColor;
    font-size: 2.5rem;
    font-weight: bold;
    word-break: keep-all;
    @include md-width() {
      font-size: 3.2rem;
    }
  }

  .previous, .menu {
    width: 2.5rem;
    height: 2.5rem;
    margin: auto;
  }

  .type-box {
    display: none;
    @include md-width() {
      position: relative;
      display: flex;
      background: url("../assets/icons/typeBox-bg_pink.svg") no-repeat;
      width: -webkit-fill-available;
      color: white;
      font-size: 3.5rem;
      font-weight: bold;
      background-size: contain;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      height: 19rem;
      &::before {
        position: absolute;
        content:'遊戲';
        writing-mode: vertical-rl;
        margin-bottom: 1rem;
        top: 20%;
        right: 41%;
      }
      &::after {
        position: absolute;
        content:'Game';
        font-size: 2rem;
        right: 32%;
        bottom: 25%;
      }
    }
  }

  .intro-card {
    width: 100%;
    height: 100%;
    background-color: pink;
    @include md-width() {
      display: flex;
      background-color: pink;
    }
  }


</style>
<template>
  <div class="selector-container">
    <button type="button" class="selector-btn" @click="handleClick('全部')">
      <div class="ch">全部</div>
      <div class="en">All</div>
    </button>
    <button type="button" class="selector-btn" @click="handleClick('互動')">
      <div class="ch">互動</div>
      <div class="en">Interactive</div>
    </button>
    <button type="button" class="selector-btn" @click="handleClick('影視')">
      <div class="ch">影視</div>
      <div class="en">Film</div>
    </button>
    <button type="button" class="selector-btn" @click="handleClick('遊戲')">
      <div class="ch">遊戲</div>
      <div class="en">Game</div>
    </button>
    <button type="button" class="selector-btn" @click="handleClick('行銷')">
      <div class="ch">行銷</div>
      <div class="en">Marketing</div>
    </button>
    <button type="button" class="selector-btn" @click="handleClick('專題')">
      <div class="ch">專題</div>
      <div class="en">Project </div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data(){
    return {
      
    }
  },
  methods: {
    handleClick: function(type) {
      console.log(type)
    }
  }
}
</script>


<style lang="scss" scoped>
  @import "../scss/all.scss";
  .selector-container{
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: .3rem;
    padding: .3rem 0;
    @include md-width() {
      display: flex;
      position: absolute;
      top: 2%;
      left: 0;
      z-index: 5;
      width: 95%;
      height: fit-content;
      justify-content: flex-end;
      align-items: center;
    }
  }

  .selector-btn{
    cursor: pointer;
    font-weight: bold;
    border: none;
    background-color: $exhibition-mainColor;
    color: white;
    height: fit-content;
    padding: .8rem 0;
    @include md-width() {
      border-radius: 50%;
      margin-right: 20px;
      width: 6rem;
      height: 6rem;
      font-size: 1.3rem;
    }
    .en {
      display: none;
    }

    &:focus{
        outline: none;
    }

    &:hover{
        background-color: white;
        color: $exhibition-mainColor;
        @include md-width() {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          .en {
            display: block;
            font-weight: normal;
            font-size: .9rem;
          }
          .ch {
            font-size: 1.5rem;
          }
        }
    }
  }
</style>
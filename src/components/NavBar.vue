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


<style scoped>

</style>
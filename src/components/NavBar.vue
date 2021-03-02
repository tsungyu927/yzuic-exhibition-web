<template>
  <div class="selector-container">
    <button type="button" class="selector-btn" @click="handleClick('全部')">
      全部
    </button>
    <button type="button" class="selector-btn" @click="handleClick('互動')">
      互動
    </button>
    <button type="button" class="selector-btn" @click="handleClick('影視')">
      影視
    </button>
    <button type="button" class="selector-btn" @click="handleClick('遊戲')">
      遊戲
    </button>
    <button type="button" class="selector-btn" @click="handleClick('行銷')">
      行銷
    </button>
    <button type="button" class="selector-btn" @click="handleClick('專題')">
      專題
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
.selector-container{
  position: absolute;
  top: 5%;
  left: 0;
  z-index: 5;
  width: 95%;
  padding-right: 5%;
  height: fit-content;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.selector-btn{
  cursor: pointer;
  margin-right: 20px;
  width: 125px;
  height: 125px;
  border: none;
  border-radius: 50%;
  background-color: #FF1A85;
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.7);
}
.selector-btn:focus{
  outline: none;
}
.selector-btn:hover{
  background-color: white;
  color: #FF1A85;
}
</style>
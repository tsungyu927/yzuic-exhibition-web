<template>
  <div class="selector-container">
    <button type="button" class="selector-btn" @click="handleClick('全部')">
      <router-link to="/exhibition">
        <div class="ch">全部</div>
        <div class="en">All</div>
      </router-link>
    </button>
    <button type="button" class="selector-btn" @click="handleClick('互動')">
      <router-link to="/worksGrid">
        <div class="ch">互動</div>
        <div class="en">Interactive</div>
      </router-link>
    </button>
    <button type="button" class="selector-btn" @click="handleClick('影視')">
      <router-link to="/worksGrid">
        <div class="ch">影視</div>
        <div class="en">Film</div>
      </router-link>
    </button>
    <button type="button" class="selector-btn" @click="handleClick('遊戲')">
      <router-link to="/worksGrid">
        <div class="ch">遊戲</div>
        <div class="en">Game</div>
      </router-link>
    </button>
    <button type="button" class="selector-btn" @click="handleClick('行銷')">
      <router-link to="/worksGrid">
        <div class="ch">行銷</div>
        <div class="en">Marketing</div>
      </router-link>
    </button>
    <button type="button" class="selector-btn" @click="handleClick('專題')">
      <router-link to="/worksGrid">
        <div class="ch">專題</div>
        <div class="en">Project</div>
      </router-link>
    </button>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {};
  },
  methods: {
    handleClick: function(type) {
      console.log(type);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/all.scss';
.selector-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 60%;
  @include md-width() {
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 90px;
    width: 100%;
    height: auto;
  }
}

.selector-btn {
  cursor: pointer;
  font-weight: bold;
  border: 0;
  background-color: $exhibition-mainColor;
  padding: 0.5rem 0;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  font-size: 1rem;

  @include md-width() {
    width: 6rem;
    height: 6rem;
    font-size: 1.3rem;
  }
  a {
    color: white;
  }

  .en {
    display: none;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: white;
    a {
      color: $exhibition-mainColor;
      text-decoration: none;
      font-size: 1rem;
      @include md-width() {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 70%;
        align-items: center;
        .en {
          display: block;
          font-weight: normal;
          font-size: 0.9rem;
        }
      }
    }
  }
}
</style>

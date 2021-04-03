<template>
  <div class="left sideBar d-flex flex-column justify-content-center">
    <!--<router-link to="/">Home</router-link> | -->

    <router-link class="square__link" to="/exhibition">展覽作品</router-link>
    <router-link class="square__link" to="/organizeTeam">策展團隊</router-link>
    <router-link class="square__link circle" to="/organizeTeam">FB</router-link>
    <router-link class="square__link circle" to="/organizeTeam">IG</router-link>
    <router-link class="square__link circle" to="/organizeTeam">YT</router-link>
  </div>
</template>

<script>
export default {
  name: 'LeftBar',
};
</script>

<style lang="scss">
.left {
  left: 3%;
}

.square__link {
  display: block;
  border: 1px solid $exhibition-mainColor;
  padding: 5px;
  font-weight: bold;
  color: $exhibition-mainColor;
  &:hover {
    color: white;
    background-color: $exhibition-mainColor;
  }
  &:not(.circle) {
    writing-mode: vertical-lr;
    padding-top: 1rem;
    padding-bottom: 1rem;
    line-height: 1.2;
  }
  & + & {
    margin-top: 10px;
  }
}

.circle {
  border-radius: 50%;
  line-height: 1.35;
}
</style>

<template>
  <div
    :style="cssVars"
    class="left sideBar d-none d-md-flex flex-column justify-content-center"
  >
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
  props: {
    //主色
    mainColor: {
      type: String,
      required: true,
    },
    hoverColor: {
      type: String,
      required: true,
    },
  },
  computed: {
    cssVars() {
      return { '--mainColor': this.mainColor, '--hoverColor': this.hoverColor };
    },
  },
};
</script>

<style lang="scss">
.left {
  left: 3%;
  display: none;
  @include md-width() {
    display: block;
    position: fixed;
    z-index: 1;
    bottom: 10%;
    font-size: 0.9rem;
    font-weight: bold;
  }
}

.square__link {
  display: block;
  border: 1px solid var(--mainColor);
  padding: 5px;
  font-weight: bold;
  color: var(--mainColor);
  &:hover {
    color: var(--hoverColor);
    background-color: var(--mainColor);
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

<template>
  <!-- 手機板 header -->
  <div :style="cssVars" class="pg-header d-flex d-md-none">
    <!-- previous arrow btn -->
    <div class="header__icon previous">
      <!-- <img
        class="img-fluid"
        src="../assets/icons/phone-arrow_white.svg"
        @click="previous"
      /> -->
      <font-awesome-icon
        :icon="['fas', 'arrow-left']"
        class="m-auto"
        size="lg"
        @click="previous"
      />
    </div>
    <!-- title -->
    <div class="title">{{ title }}</div>
    <!-- menu btn -->
    <router-link to="/" tag="button" class="header__icon menu">
      <font-awesome-icon icon="bars" size="lg" class="m-auto" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'MobileHeader',
  props: ['title', 'mainColor', 'secColor', 'bgColor', 'arrowColor'],
  computed: {
    cssVars() {
      return {
        '--mainColor': this.mainColor,
        '--secColor': this.secColor,
        '--bgColor': this.bgColor,
        '--arrowColor': this.arrowColor,
      };
    },
  },
  methods: {
    previous() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss">
//(手機板)header
.pg-header {
  width: 100%;
  background-color: var(--bgColor);
  padding: 0.8rem;
  .title {
    flex: 1;
    font-size: 2rem;
    font-weight: bold;
    color: var(--secColor);
  }
}

.header__icon {
  display: flex;
  z-index: 1;
  font-weight: bold;
  line-height: 2.8rem;
  justify-content: center;
  font-size: 1rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
}

.previous {
  color: var(--arrowColor);
  border: var(--arrowColor) 1px solid;
  background-color: var(--bgColor);
}

.menu {
  color: var(--mainColor);
  border: var(--mainColor) 1px solid;
  background-color: var(--secColor);
}
</style>

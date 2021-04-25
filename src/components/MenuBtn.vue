<template>
  <router-link
    to="/"
    tag="button"
    :style="cssVars"
    class="menu-btn d-none d-md-block"
  >
    <div class="d-none d-md-block">目錄</div>
    <font-awesome-icon icon="bars" size="lg" class="d-md-none m-auto" />
  </router-link>
</template>

<script>
export default {
  name: 'MenuBtn',
  props: {
    //主色
    mainColor: {
      type: String,
      required: true,
    },
  },
  computed: {
    cssVars() {
      return { '--mainColor': this.mainColor };
    },
  },
};
</script>

<style lang="scss" scoped>
//手機板漢堡選單
.menu-btn {
  color: var(--mainColor);
  display: flex;
  position: absolute;
  z-index: 1;
  font-weight: bold;
  line-height: 2.8rem;
  justify-content: center;
  font-size: 1rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: var(--mainColor) 1px solid;
  top: 3%;
  right: 3%;
  background-color: transparent;
  @include md-width() {
    width: 3rem;
    height: 3rem;
    top: 2%;
    right: 2%;
  }
  &:hover {
    background-color: var(--mainColor);
    color: white;
  }
}
</style>

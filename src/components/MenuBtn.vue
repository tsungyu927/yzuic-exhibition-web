<template>
  <router-link
    to="/"
    tag="button"
    class="menu-btn d-none d-md-block"
    :class="[changeColor]"
  >
    <div class="d-none d-md-block">目錄</div>
    <font-awesome-icon icon="bars" size="lg" class="d-md-none m-auto" />
  </router-link>
</template>

<script>
export default {
  name: 'MenuBtn',
  data() {
    return {
      changeColor: '',
    };
  },
  watch: {
    $route: {
      handler: function(to, from) {
        // console.log(to, from);
        switch (to.path) {
          case '/exhibition':
            this.changeColor = 'pink-outline';
            break;
          case '/organizeTeam':
            this.changeColor = 'blue-outline';
            break;
          case '/organizeTeamIntro/':
            this.changeColor = 'blue-outline';
            break;
          default:
            this.changeColor = 'pink-outline';
            break;
        }
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
//手機板漢堡選單
.menu-btn {
  display: flex;
  position: fixed;
  z-index: 10;
  font-weight: bold;
  line-height: 2.8rem;
  justify-content: center;
  font-size: 1rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  top: 3%;
  right: 3%;
  background-color: transparent;
  @include md-width() {
    width: 3rem;
    height: 3rem;
    top: 2%;
    right: 2%;
  }
}

//粉邊粉字
.pink-outline {
  border: 1px solid $exhibition-mainColor;
  color: $exhibition-mainColor;
  &:hover {
    color: $white;
    background-color: $exhibition-mainColor;
  }
}
//藍邊藍字
.blue-outline {
  border: 1px solid $organizeTeam-mainColor;
  color: $organizeTeam-mainColor;
  &:hover {
    color: $white;
    background-color: $organizeTeam-mainColor;
  }
}
</style>

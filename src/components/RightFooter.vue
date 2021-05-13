<template>
  <!-- 右下角的 footer -->
  <div class="sideBar bottom" :class="[changeColor]" v-if="isShow">
    Yan Ze University Information Communication 24th Graduation Exhibition
  </div>
</template>

<script>
export default {
  name: 'RightFooter',
  data() {
    return {
      changeColor: '',
    };
  },
  props: {
    isShow: {
      type: Boolean
    },
  },
  watch: {
    $route: {
      handler: function(to, from) {
        switch (to.path) {
          case '/exhibition':
            this.changeColor = 'fluid__footer';
            break;
          case '/organizeTeam':
            this.changeColor = 'fluid__footer';
            break;
          case '/organizeTeamIntro/':
            this.changeColor = 'organizeTeam__footer';
            break;
          case '/':
            this.changeColor = 'home__footer';
            break;
          case '/contactus':
            this.changeColor = 'home__footer';
            break;
          default:
            this.changeColor = 'exhibition__footer';
        }
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style lang="scss">
.bottom {
  bottom: 2%;
  min-height: 30px;
  right: 4%;
  font-size: 0.7rem;
  line-height: 20px;
  text-align: right;
  @include md-width() {
    bottom: 4%;
    right: 4%;
    line-height: 30px;
  }
}
</style>

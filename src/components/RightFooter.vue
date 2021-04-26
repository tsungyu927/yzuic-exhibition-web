<template>
  <!-- 右下角的 footer -->
  <div class="sideBar bottom" :class="[changeColor]">
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
          case '/organizeTeamIntro':
            this.changeColor = 'organizeTeam__footer';
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
  max-width: 250px;
  right: 4%;
  font-size: 0.7rem;
  line-height: 20px;
  text-align: right;
  @include md-width() {
    bottom: 4%;
    max-width: 430px;
    right: 10%;
    line-height: 30px;
  }
}
</style>

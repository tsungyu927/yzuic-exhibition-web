<template>
  <div class="sideBar right" :class="[changeColor, dynamicallyChangeColor]">
    <div class="right__bar">
      <span>元智大學</span>
      <span>資訊傳播學系</span>
      <span>第24屆畢業展覽</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RightBar',
  data() {
    return {
      changeColor: '',
      dynamicallyChangeColor: this.toWhite ? 'whole-white': '',
    };
  },
  props: {
    toWhite: {
      type: Boolean
    }
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
          default:
            this.changeColor = 'exhibition__footer';
        }
      },
      deep: true,
      immediate: true,
    },
    toWhite: function(newVal, oldVal) { // watch it
      this.dynamicallyChangeColor = this.toWhite ? 'whole-white': '';
    }
  },
};
</script>

<style lang="scss" scoped>
.right {
  right: 2%;
  bottom: 10%;
}
.right__bar {
  writing-mode: vertical-lr;
  span {
    & + span {
      margin-top: 10px;
    }
  }
}
.whole-white {
  color: #fff;
}
</style>

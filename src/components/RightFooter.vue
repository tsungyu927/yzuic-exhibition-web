<template>
  <!-- 右下角的 footer -->
  <div :style="cssVars" class="sideBar bottom">
    Yan Ze University Information Communication 24th Graduation Exhibition
  </div>
</template>

<script>
export default {
  name: 'RightFooter',
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

<style lang="scss">
.bottom {
  color: var(--mainColor);
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

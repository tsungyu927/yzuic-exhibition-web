<template>
  <div class="sideBar right">
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
};
</script>

<style lang="scss" scoped>
.right {
  right: 3%;
}
.right__bar {
  writing-mode: vertical-lr;
  span {
    & + span {
      margin-top: 10px;
    }
  }
}
</style>

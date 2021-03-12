<template>
    <div class="right-bar"> 
      <div>元智大學</div>
      <div>資訊傳播學系</div>
      <div>第24屆畢業展覽</div>
    </div>
</template>

<script>
export default {
  name: 'RightBar',
}

</script>

<style lang="scss">
  @import "../scss/all.scss";
  .right-bar {
    height: 100%;
    writing-mode: vertical-lr;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
  }
</style>
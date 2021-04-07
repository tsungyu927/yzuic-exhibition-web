<template>
  <div class="footer d-flex d-md-none">
    <div class="footer__bar d-flex">
      <a href="https://www.facebook.com/yzuic24th">FB</a>
      <a href="https://www.instagram.com/yzuic_24/">IG</a>
      <a href="https://www.youtube.com/channel/UCdnPnYCHciWlADGldtMtZBA/">YT</a>
    </div>

    <div class="footer__text">
      元智大學 資訊傳播學系 第24屆製作
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss">
.footer {
  background-color: #e2e2e2;
  height: 70px;
  justify-content: space-around;
  align-items: center;
  a {
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    background-color: #929393;
    font-size: 14px;
    padding: 0.5rem;
    line-height: 1.25;
    color: #e2e2e2;
    & + a {
      margin-left: 10px;
    }
  }
  &__text {
    margin-top: 3rem;
    font-size: 0.6rem;
  }
}
</style>

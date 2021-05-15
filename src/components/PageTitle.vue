<template>
  <div class="title sideBar d-flex flex-column justify-content-center">
    <p class="title__ch">{{ chName }}</p>
    <p class="title__en">{{ enName }}</p>
  </div>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    chName: {
      type: String,
      required: true,
    },
    enName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  align-items: center;
  left: 10%;
  top: 10%;
  color: #ffffff;
  display: block;
  position: fixed;
  z-index: 1;
  font-weight: bold;
  &__ch {
    writing-mode: vertical-lr;
    font-size: 90px;
    @include lg-width() {
      font-size: 130px;
    }
  }
  &__en {
    font-size: 10px;
    @include md-width() {
      font-size: 14px;
    }
  }
}
</style>

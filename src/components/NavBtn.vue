<template>
  <!-- 將 JavaScript Variable 與 CSS Variable 綁定，則可使用 JavaScript 動態改變 CSS -->
  <!-- 2. cssVars computed 綁定到 style 屬性  -->
  <button :style="cssVars" class="selector-btn">
    <div class="ch">{{ navItem.chName }}</div>
    <div class="en">{{ navItem.enName }}</div>
  </button>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    //主色
    mainColor: {
      type: String,
      required: true,
    },
    //[navbtn] data
    navItem: {
      type: Object,
      required: true,
    },
  },
  computed: {
    // 1.在 cssVars computed 內，以data值(this.mainColor) 定義 css原生變數(--mianColor)
    cssVars() {
      return { '--mianColor': this.mainColor };
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.selector-btn {
  cursor: pointer;
  font-weight: bold;
  border: 0;
  // 3. 以var() 使用 --mianColor
  background-color: var(--mianColor);
  padding: 0.5rem 0;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  font-size: 1rem;
  @include md-width() {
    width: 6rem;
    height: 6rem;
    font-size: 1.3rem;
  }
  color: white;

  .en {
    display: none;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: white;
    color: var(--mianColor);
    text-decoration: none;
    @include md-width() {
      .en {
        display: block;
        font-weight: normal;
        font-size: 0.9rem;
      }
    }
  }
}
</style>

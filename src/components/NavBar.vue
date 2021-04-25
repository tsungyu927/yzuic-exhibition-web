<template>
  <div class="navbar">
    <!-- 將 JavaScript Variable 與 CSS Variable 綁定，則可使用 JavaScript 動態改變 CSS -->
    <!-- 2. cssVars computed 綁定到 style 屬性  -->
    <div :style="cssVars" class="selector-container">
      <button
        v-for="item in navbarData"
        :key="item.enName"
        class="selector-btn"
        @click="toExbitionPage(item)"
      >
        <div class="ch">{{ item.chName }}</div>
        <div class="en">{{ item.enName }}</div>
      </button>
    </div>
  </div>
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
    //[navbar] 選項data
    navbarData: {
      type: Array,
      required: true,
    },
    //[navbar] 跳轉頁
    navbarPage: {
      type: String,
      required: true,
    },
  },
  computed: {
    // 1.在 cssVars computed 內，以data值(this.mainColor) 定義 css原生變數(--mianColor)
    cssVars() {
      return { '--mianColor': this.mainColor };
    },
  },
  methods: {
    // ...mapActions(['SetTypeBox']),
    toExbitionPage(type) {
      // this.SetTypeBox(type);
      // this.$router.push(`${type.routerLink}/${type.enName.toLowerCase()}`);
      this.$router.push({
        path: this.navbarPage,
        query: { type: type.enName.toLowerCase() },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  z-index: 1;
  right: 20px;
  height: 100%;
  bottom: auto;
  @include md-width() {
    position: absolute;
    z-index: 1;
    top: 15px;
    right: 70px;
    bottom: auto;
    width: 100%;
    height: auto;
  }
}
.selector-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  @include md-width() {
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    height: auto;
  }
}

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
  & + & {
    margin-top: 10px;
  }
  @include md-width() {
    width: 6rem;
    height: 6rem;
    font-size: 1.3rem;
    & + & {
      margin-top: 0;
      margin-left: 10px;
    }
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
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .en {
        display: block;
        font-weight: normal;
        font-size: 0.9rem;
      }
    }
  }
}
</style>

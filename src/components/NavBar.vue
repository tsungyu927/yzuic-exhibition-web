<template>
  <div class="navbar">
    <div class="selector-container">
      <button
        v-for="item in exhibitionNavbar"
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
import { mapActions } from 'vuex';
export default {
  name: 'NavBar',
  data() {
    return {
      exhibitionNavbar: [
        {
          chName: '全部',
          enName: 'All',
          routerLink: '/worksGrid',
        },
        {
          chName: '互動',
          enName: 'Interactive',
          routerLink: '/worksGrid',
        },
        {
          chName: '影視',
          enName: 'Film',
          routerLink: '/worksGrid',
        },
        {
          chName: '遊戲',
          enName: 'Game',
          routerLink: '/worksGrid',
        },
        {
          chName: '行銷',
          enName: 'Marketing',
          routerLink: '/worksGrid',
        },
        {
          chName: '專題',
          enName: 'Project',
          routerLink: '/worksGrid',
        },
      ],
    };
  },
  methods: {
    // ...mapActions(['SetTypeBox']),
    toExbitionPage(type) {
      // this.SetTypeBox(type);
      // this.$router.push(`${type.routerLink}/${type.enName.toLowerCase()}`);
      this.$router.push({
        path: type.routerLink,
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
  bottom: 0;
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
  background-color: $exhibition-mainColor;
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
    color: $exhibition-mainColor;
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

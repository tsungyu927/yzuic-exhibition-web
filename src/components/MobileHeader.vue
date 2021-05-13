<template>
  <!-- 手機板 header -->
  <div class="pg-header d-flex d-md-none" :class="[changeColor]">
    <!-- previous arrow btn -->
    <div class="header__icon previous">
      <font-awesome-icon
        :icon="['fas', 'arrow-left']"
        class="m-auto"
        size="lg"
        @click="previous"
      />
    </div>
    <!-- title -->
    <div class="title">{{ title }}</div>
    <!-- menu btn -->
    <div class="header__icon menu">
      <font-awesome-icon icon="bars" size="lg" class="m-auto" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobileHeader',
  data() {
    return {
      changeColor: '',
    };
  },
  props: ['title'],
  // props: ['title', 'mainColor', 'secColor', 'bgColor', 'arrowColor'],
  computed: {
    // cssVars() {
    //   return {
    //     '--mainColor': this.mainColor,
    //     '--secColor': this.secColor,
    //     '--bgColor': this.bgColor,
    //     '--arrowColor': this.arrowColor,
    //   };
    // },
  },
  methods: {
    previous() {
      this.$router.go(-1);
    },
  },
  watch: {
    $route: {
      handler: function(to, from) {
        switch (to.path) {
          case '/exhibition':
            this.changeColor = 'fluid-pink';
            break;
          case '/organizeTeam':
            this.changeColor = 'fluid-blue';
            break;
          case '/organizeTeamIntro/':
            this.changeColor = 'white-bg__blue';
            break;
          case '/contactus':
            this.changeColor = 'fluid-pink';
            break;
          default:
            this.changeColor = 'white-bg__pink';
        }
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style lang="scss">
//(手機板)header
.pg-header {
  width: 100%;
  padding: 0.8rem;
  .title {
    flex: 1;
    font-size: 2rem;
    font-weight: bold;
  }
}

.header__icon {
  display: flex;
  z-index: 1;
  font-weight: bold;
  line-height: 2.8rem;
  justify-content: center;
  font-size: 1rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
}

//---------------路由改變顏色
//[液態金屬] 透明底 粉icon
.fluid-pink {
  background-color: transparent;
  .previous {
    color: $white;
    border: $white 1px solid;
  }
  .title {
    color: $white;
  }
  .menu {
    color: $exhibition-mainColor;
    background-color: $white;
    border: $white 1px solid;
  }
  //滾動 粉
  &.pink__scrolled {
    background-color: $exhibition-mainColor;
  }
}

//[液態金屬] 透明底 藍icon
.fluid-blue {
  background-color: transparent;
  .previous {
    color: $white;
    border: $white 1px solid;
  }
  .title {
    color: $white;
  }
  .menu {
    color: $organizeTeam-mainColor;
    background-color: $white;
    border: $white 1px solid;
  }
  //滾動 藍
  &.blue__scrolled {
    background-color: $organizeTeam-mainColor;
  }
}

//白底 藍字
.white-bg__blue {
  background-color: $white;
  .previous {
    color: $organizeTeam-mainColor;
    border: $organizeTeam-mainColor 1px solid;
  }
  .title {
    color: $organizeTeam-mainColor;
  }
  .menu {
    background-color: $organizeTeam-mainColor;
    color: $white;
    border: $organizeTeam-mainColor 1px solid;
  }
}

//白底 粉字
.white-bg__pink {
  background-color: $white;
  .previous {
    color: $exhibition-mainColor;
    border: $exhibition-mainColor 1px solid;
  }
  .title {
    color: $exhibition-mainColor;
  }
  .menu {
    background-color: $exhibition-mainColor;
    color: $white;
    border: $exhibition-mainColor 1px solid;
  }
}
</style>

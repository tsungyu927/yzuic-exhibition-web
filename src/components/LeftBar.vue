<template>
  <div
    class="left sideBar d-none d-md-flex flex-column justify-content-center"
    :class="[changeColor]"
  >
    <!--<router-link to="/">Home</router-link> | -->
    <router-link class="square__link" to="/exhibition">展覽作品</router-link>
    <router-link class="square__link" to="/organizeTeam">策展團隊</router-link>
    <router-link class="square__link circle" to="/organizeTeam">FB</router-link>
    <router-link class="square__link circle" to="/organizeTeam">IG</router-link>
    <router-link class="square__link circle" to="/organizeTeam">YT</router-link>
  </div>
</template>

<script>
export default {
  name: 'LeftBar',
  data() {
    return {
      changeColor: '',
    };
  },
  watch: {
    $route: {
      handler: function(to, from) {
        // console.log(to, from);
        switch (to.path) {
          case '/exhibition':
            this.changeColor = 'white-outline__pink';
            break;
          case '/organizeTeam':
            this.changeColor = 'white-outline__blue';
            break;
          case '/organizeTeamIntro':
            this.changeColor = 'blue-outline';
            break;
          default:
            this.changeColor = 'pink-outline';
            break;
        }
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style lang="scss">
.left {
  left: 3%;
  display: none;
  @include md-width() {
    display: block;
    position: fixed;
    z-index: 1;
    bottom: 10%;
    font-size: 0.9rem;
    font-weight: bold;
  }
}

.square__link {
  display: block;
  padding: 5px;
  font-weight: bold;

  &:not(.circle) {
    writing-mode: vertical-lr;
    padding-top: 1rem;
    padding-bottom: 1rem;
    line-height: 1.2;
  }
  & + & {
    margin-top: 10px;
  }
}

.circle {
  border-radius: 50%;
  line-height: 1.35;
}
%defaultColor {
  border: 1px solid $white;
  color: $white;
}

//粉邊粉字
.pink-outline {
  > a {
    border: 1px solid $exhibition-mainColor;
    color: $exhibition-mainColor;
    &:hover {
      color: $white;
      background-color: $exhibition-mainColor;
    }
  }
}
//藍邊藍字
.blue-outline {
  > a {
    border: 1px solid $organizeTeam-mainColor;
    color: $organizeTeam-mainColor;
    &:hover {
      color: $white;
      background-color: $organizeTeam-mainColor;
    }
  }
}
//白邊白字
.white-outline {
  //hover 藍
  &__blue {
    > a {
      @extend %defaultColor;
      &:hover {
        color: $organizeTeam-mainColor;
        background-color: $white;
      }
    }
  }
  //hover 粉
  &__pink {
    > a {
      @extend %defaultColor;
      &:hover {
        color: $exhibition-mainColor;
        background-color: $white;
      }
    }
  }
}
</style>

<template>
  <div
    class="left sideBar d-none d-md-flex flex-column justify-content-center"
    :class="[changeColor, dynamicallyChangeColor]"
  >
    <!--<router-link to="/">Home</router-link> | -->
    <div @click="handleClick('/exhibition')" class="square__link">展覽作品</div>
    <div @click="handleClick('/organizeTeam')" class="square__link">
      策展團隊
    </div>
    <a href="https://www.facebook.com/yzuic24th" class="square__link circle"
      >FB</a
    >
    <a href="https://www.instagram.com/yzuic_24/" class="square__link circle"
      >IG</a
    >
    <a
      href="https://www.youtube.com/channel/UCdnPnYCHciWlADGldtMtZBA/"
      class="square__link circle"
      >YT</a
    >
  </div>
</template>

<script>
import ScrollTrigger from 'gsap/ScrollTrigger';
export default {
  name: 'LeftBar',
  data() {
    return {
      changeColor: '',
      dynamicallyChangeColor: this.toWhite ? 'whole-white-outline' : '',
    };
  },
  props: {
    toWhite: {
      type: Boolean,
    },
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
          case '/organizeTeamIntro/':
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
    toWhite: function(newVal, oldVal) {
      // watch it
      this.dynamicallyChangeColor = this.toWhite ? 'whole-white-outline' : '';
    },
  },
  methods: {
    handleClick: function(place) {
      if (this.$router.currentRoute.path == '/') {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      }
      this.$router.push({
        path: place,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.left {
  left: 4%;
  bottom: 10%;
  display: none;
  @include md-width() {
    display: block;
    position: fixed;
    z-index: 5;
    bottom: 10%;
    font-size: 0.9rem;
    font-weight: bold;
  }
}

.square__link {
  cursor: pointer;
  display: block;
  padding: 5px;
  font-weight: bold;

  &:not(.circle) {
    writing-mode: vertical-lr;
    padding-top: 1rem;
    padding-bottom: 1rem;
    //line-height: 1.2;
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
  border: 1.5px solid $white;
  color: $white;
}

//粉邊粉字
.pink-outline {
  > a,
  > div {
    border: 1.5px solid $exhibition-mainColor;
    color: $exhibition-mainColor;
    &:hover {
      color: $white;
      background-color: $exhibition-mainColor;
    }
  }
}
//藍邊藍字
.blue-outline {
  > a,
  > div {
    border: 1.5px solid $organizeTeam-mainColor;
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
    > a,
    > div {
      @extend %defaultColor;
      &:hover {
        color: $organizeTeam-mainColor;
        background-color: $white;
      }
    }
  }
  //hover 粉
  &__pink {
    > a,
    > div {
      @extend %defaultColor;
      &:hover {
        color: $exhibition-mainColor;
        background-color: $white;
      }
    }
  }
}

// 全白
.whole-white-outline {
  > a,
  > div {
    border: 1.5px solid #fff;
    color: #fff;
    &:hover {
      color: $exhibition-mainColor;
      background-color: $white;
    }
  }
}
</style>

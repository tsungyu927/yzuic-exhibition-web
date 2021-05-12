<template>
  <div>
    <!-- 目錄modal -->
    <Catalog v-if="openCatalog" class="catalogModal" v-on:handleCloseModal="handleOpenCatalog"  />
    <div
      class="menu-btn d-none d-md-block"
      :class="[changeColor, openColor]"
      @click="handleOpenCatalog"
    >
      <div class="d-none d-md-block">目錄</div>
      <font-awesome-icon icon="bars" size="lg" class="d-md-none m-auto" />
    </div>
  </div>
</template>

<script>
import Catalog from '../modal/Catalog';
import gsap from 'gsap';

export default {
  name: 'MenuBtn',
  data() {
    return {
      changeColor: '',
      openColor: '',
      openCatalog: false
    };
  },
  mounted(){
    if(this.toWhite){
      this.openColor = 'whole-white-outline';
    }
  },
  props: {
    toWhite: {
      type: Boolean
    }
  },
  watch: {
    $route: {
      handler: function(to, from) {
        // console.log(to, from);
        switch (to.path) {
          case '/exhibition':
            this.changeColor = 'pink-outline';
            break;
          case '/organizeTeam':
            this.changeColor = 'blue-outline';
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
    toWhite: function(newVal, oldVal) { // watch it
      this.openColor = this.toWhite ? 'whole-white-outline': '';
    }
  },
  methods: {
    handleOpenCatalog: function(){
      if(this.openCatalog){
        gsap.to('.catalogModal',{
          opacity: 0,
          duration: 0.3
        }).then(()=>{
          this.openColor = '';
          this.openCatalog = false;
        });
      } else{
        this.openColor = 'whole-white-outline';
        this.openCatalog = true;
      }
    },
  },
  components: {
    Catalog,
  }
};
</script>

<style lang="scss" scoped>
//手機板漢堡選單
.menu-btn {
  cursor: pointer;
  display: flex;
  position: fixed;
  z-index: 21;
  font-weight: bold;
  line-height: 2.8rem;
  justify-content: center;
  font-size: 1rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  top: 3%;
  right: 3%;
  background-color: transparent;
  @include md-width() {
    width: 3rem;
    height: 3rem;
    top: 2%;
    right: 2%;
  }
}

//粉邊粉字
.pink-outline {
  border: 1px solid $exhibition-mainColor;
  color: $exhibition-mainColor;
  &:hover {
    color: $white;
    background-color: $exhibition-mainColor;
  }
}
//藍邊藍字
.blue-outline {
  border: 1px solid $organizeTeam-mainColor;
  color: $organizeTeam-mainColor;
  &:hover {
    color: $white;
    background-color: $organizeTeam-mainColor;
  }
}

// 全白
.whole-white-outline {
  color: #fff;
  > div {
    border: 1px solid #fff;
    border-radius: 50%;
    &:hover {
      color: $exhibition-mainColor;
      background-color: $white;
    }
  }
}
</style>

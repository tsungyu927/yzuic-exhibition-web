<template>
  <div class="gallery-container">
    <MenuBtn :toWhite="borderToWhite" />
    <full-page ref="fullpage" :options="options">
      <!-- [Section1] 液態金屬 -->
      <div  class="section section1">
        <MobileHeader :title="''" class="p-absolute " />
        <!-- <img class="background" src="../assets/fluid.png" /> -->
      </div>
      <!-- [Section2] 瀑布流 -->
      <div  class="section section__waterFall">
        <button class="arrowup-btn" @click="moveSectionUp">
          <img src="../assets/icons/arrow_up_pink.svg" />
        </button>
        <MobileHeader :title="'展覽作品'" class="pink__scrolled" />
        <div class="navbar">
          <div class="selector-container">
            <NavBtn
              v-for="item in exhibitionNavbar"
              :key="item.enName"
              :nav-item="item"
              :main-color="'#ff1a83'"
              v-on:handleClick="toExbitionPage(item)"
            />
          </div>
        </div>
        <WaterFall id="waterfall" />
      </div>

      <PageTitle :ch-name="'展覽作品'" :en-name="'Exhibition Works'" />
      <LeftBar />
      <RightBar />
      <RightFooter />
    </full-page>
  </div>
</template>

<script>
import MenuBtn from '../components/MenuBtn';
import NavBtn from '../components/NavBtn';
import WaterFall from '../components/WaterFall';
import LeftBar from '../components/LeftBar';
import RightBar from '../components/RightBar';
import RightFooter from '../components/RightFooter';
import PageTitle from '../components/PageTitle';
import MobileHeader from '../components/MobileHeader';

export default {
  name: 'Exhibition',
  data() {
    return {
      borderToWhite: true,
      options: {
        afterLoad: this.afterLoad,
        animateAnchor: false,
        //anchors: ['cover', 'gallery'],
        normalScrollElements: '#waterfall', // 讓waterfall滑動的部分不會影響到fullpage而導致上滑到上面一頁
      },
      exhibitionNavbar: [
        {
          chName: '全部',
          enName: 'All',
        },
        {
          chName: '互動',
          enName: 'Interactive',
        },
        {
          chName: '影視',
          enName: 'Film',
        },
        {
          chName: '遊戲',
          enName: 'Game',
        },
        {
          chName: '行銷',
          enName: 'Marketing',
        },
        /*{
          chName: '專題',
          enName: 'Project',
        },*/
      ],
    };
  },
  mounted() {},
  methods: {
    afterLoad(origin, destination) {
      if (destination.isLast) {
        this.borderToWhite = false;
        // 滑到最後一頁了
        // this.$refs.fullpage.api.setAllowScrolling(false, 'up');
        // this.$refs.fullpage.api.setAllowScrolling(false, 'up');
        // console.log('After load end');
      }
    },
    moveSectionUp() {
      // this.$refs.fullpage.api.setAllowScrolling(true);
      this.borderToWhite = true;
      this.$refs.fullpage.api.moveSectionUp();
    },
    //跳轉頁
    // [Vuex]...mapActions(['SetTypeBox']),
    toExbitionPage(type) {
      // [Vuex]this.SetTypeBox(type);
      // [Vuex]this.$router.push(`${type.routerLink}/${type.enName.toLowerCase()}`);
      this.$router.push({
        path: '/worksGrid',
        query: { type: type.enName.toLowerCase() },
      });
    },
  },
  components: {
    MenuBtn,
    NavBtn,
    WaterFall,
    LeftBar,
    RightBar,
    RightFooter,
    PageTitle,
    MobileHeader,
  },
};
</script>

<style lang="scss" scoped>
.gallery-container,
.background {
  width: 100%;
  height: 100%;
}

.section {
  width: 100%;
  height: 100%;
  .background {
    background-color: #ff1a83;
  }
}
.section1 {
  background-color: #ff1a83;
}

.section__waterFall {
  position: relative;
}

.arrowup-btn {
  position: absolute;
  z-index: 2;
  width: 10%;
  top: 12%;
  left: 4%;
  border-radius: 50%;
  background-color: transparent;
  border: none;
  padding: 0;
  img {
    max-width: 100%;
    max-height: 100%;
    display: block;
    border-radius: 50%;
  }
  @include md-width() {
    top: 5%;
    left: 5%;
    width: 5%;
  }
}

.navbar {
  position: fixed;
  z-index: 1;
  right: 20px;
  height: 100%;
  bottom: auto;
  @include md-width() {
    position: absolute;
    z-index: 3;
    top: 15px;
    right: 70px;
    bottom: auto;
    width: 70%;
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
  & + & {
    margin-top: 10px;
    @include md-width() {
      margin-top: 0;
      margin-left: 10px;
    }
  }
}
</style>

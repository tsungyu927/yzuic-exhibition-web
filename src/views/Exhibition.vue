<template>
  <div class="gallery-container">
    <full-page ref="fullpage" :options="options">
      <!-- [Section1] 液態金屬 -->
      <div class="section">
        <MenuBtn :main-color="'#ff1a83'" />
        <MobileHeader
          :main-color="'#ff1a83'"
          :sec-color="'transparent'"
          :bg-color="'transparent'"
          :arrow-color="'#ffffff'"
          :title="''"
          class="p-absolute"
        />
        <img class="background" src="../assets/fluid.png" />
        <LeftBar :main-color="'#ffffff'" :hover-color="'#ff1a83'" />
        <PageTitle :ch-name="'展覽作品'" :en-name="'Exhibition Works'" />
        <RightBar :main-color="'#ffffff'" :hover-color="'#ff1a83'" />
        <RightFooter :main-color="'#ffffff'" />
      </div>
      <!-- [Section2] 瀑布流 -->
      <div class="section section__waterFall">
        <MenuBtn :main-color="'#ff1a83'" />
        <MobileHeader
          :main-color="'#ff1a83'"
          :sec-color="'#ffffff'"
          :bg-color="'#ff1a83'"
          :arrow-color="'#ffffff'"
          :title="'展覽作品'"
        />
        <!-- <NavBar
          :main-color="'#ff1a83'"
          :navbar-data="exhibitionNavbar"
          :navbar-page="'/worksGrid'"
        /> -->
        <div class="navbar">
          <div class="selector-container">
            <NavBtn
              v-for="item in exhibitionNavbar"
              :key="item.enName"
              :nav-item="item"
              :main-color="'#ff1a83'"
              @click.native="toExbitionPage(item)"
            />
          </div>
        </div>
        <WaterFall />
      </div>
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
      options: {
        afterLoad: this.afterLoad,
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
        {
          chName: '專題',
          enName: 'Project',
        },
      ],
    };
  },
  methods: {
    afterLoad(origin, destination) {
      if (destination.isLast) {
        this.$refs.fullpage.api.setAllowScrolling(false, 'up');
        // 滑到最後一頁了
        console.log('After load end');
      }
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
  img {
    background-color: #ff1a83;
  }
}

.section__waterFall {
  position: relative;
}

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
  & + & {
    margin-top: 10px;
    @include md-width() {
      margin-top: 0;
      margin-left: 10px;
    }
  }
}
</style>

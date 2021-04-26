<template>
  <div class="gallery-container">
    <full-page ref="fullpage" :options="options">
      <!-- [Section1] 液態金屬 -->
      <div class="section">
        <MenuBtn :main-color="'#00cbf4'" />
        <MobileHeader :title="''" class="p-absolute" />
        <img class="background" src="../assets/fluid.png" />
      </div>
      <!-- [Section2] -->
      <div class="section section__waterFall">
        <MenuBtn :main-color="'#00cbf4'" />
        <MobileHeader :title="'策展團隊'" class="blue__scrolled" />
        <div class="navbar">
          <div class="selector-container">
            <NavBtn
              v-for="item in OTNavbar"
              :key="item.enName"
              :nav-item="item"
              :main-color="'#00cbf4'"
              @click.native="toIntroPage(item)"
            />
          </div>
        </div>
      </div>

      <PageTitle :ch-name="'策展團隊'" :en-name="'Organize Team'" />
      <LeftBar />
      <RightBar />
      <RightFooter />
    </full-page>
  </div>
</template>

<script>
import NavBtn from '../components/NavBtn';
import MenuBtn from '../components/MenuBtn';
import LeftBar from '../components/LeftBar';
import RightBar from '../components/RightBar';
import RightFooter from '../components/RightFooter';
import PageTitle from '../components/PageTitle';
import MobileHeader from '../components/MobileHeader';

export default {
  name: 'OrganizeTeam',
  data() {
    return {
      options: {
        afterLoad: this.afterLoad,
      },
      //OrgnaizeTeamNavbar
      OTNavbar: [
        {
          chName: '行政',
          enName: 'Administration',
        },
        {
          chName: '公關',
          enName: 'PR',
        },
        {
          chName: '活動',
          enName: 'Activity',
        },
        {
          chName: '美術',
          enName: 'Art',
        },
        {
          chName: '場務',
          enName: 'Equipment',
        },
        {
          chName: '總務',
          enName: 'Affair',
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
    toIntroPage(type) {
      this.$router.push({
        path: '/Introduction',
        query: { type: type.enName.toLowerCase() },
      });
    },
  },
  components: {
    NavBtn,
    MenuBtn,
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
    background-color: #00cbf4;
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
    width: 40%;
    right: 5%;
  }
}
.selector-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  @include md-width() {
    display: inline-block;
  }
  @include xl-width() {
    padding: 0 50px;
  }
}

.selector-btn {
  @include md-width() {
    margin: 40px 20px;
    & + & {
      margin-top: 0;
    }
  }
  & + & {
    margin-top: 10px;
  }
}
</style>

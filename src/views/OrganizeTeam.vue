<template>
  <div class="gallery-container">
    <MenuBtn :toWhite="borderToWhite" />
    <full-page ref="fullpage" :options="options">
      <!-- [Section1] 液態金屬 -->
      <div data-anchor="covertop" class="section section1">
        <MobileHeader :title="''" class="p-absolute" />
        <!-- <img class="background" src="../assets/fluid.png" /> -->
      </div>
      <!-- [Section2] -->
      <div data-anchor="content" class="section section__waterFall ">
        <MobileHeader :title="'策展團隊'" class="blue__scrolled " />
        <!-- 上滑按鈕 -->
        <button class="arrowup-btn" @click="moveSectionUp">
          <img src="../assets/icons/arrow_up_blue.svg" />
        </button>
        <!-- mobile navbar-->
        <div class="navbar-fixed d-md-none">
          <div class="selector-container">
            <NavBtn
              v-for="item in OTNavbar"
              :key="item.enName"
              :nav-item="item"
              :main-color="'#00cbf4'"
              v-on:handleClick="toIntroduction(item.id)"
            />
          </div>
        </div>
        <div class="content d-md-flex">
          <div class="content__left">
            <div class="content___poster">
              <img class="img-fluid" src="../assets/img/allstaffimg.jpg" />
            </div>
            <div class="content__text pl-5 pl-md-0">
              <div class="title">元智資傳 24 th</div>
              <p>
                我們是第24屆元智資傳系畢業展策展團隊。歷經大學四年的成長與蛻變，在最後一刻，共同策劃屬於我們的畢業展覽，辦展的這一年中，我們度過無數個難熬的時刻，也面對同時要做自己畢業製作的心力憔悴。最終、我們把最好的展覽呈現給大家，為大家帶來此次展覽「此刻變態」。
              </p>
            </div>
          </div>
          <!-- web navbar -->
          <div class="navbar d-none d-md-block">
            <NavBtn
              class="web-navbtn"
              v-for="item in OTNavbar"
              :key="item.enName"
              :nav-item="item"
              :main-color="'#00cbf4'"
              v-on:handleClick="toIntroduction(item.id)"
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
      borderToWhite: true,
      options: {
        afterLoad: this.afterLoad,
        animateAnchor: false,
        // anchors: ['cover', 'content'],
      },
      //OrgnaizeTeamNavbar
      OTNavbar: [
        {
          id: 1,
          chName: '行政',
          enName: 'Administration',
        },
        {
          id: 2,
          chName: '美術',
          enName: 'Art',
        },
        {
          id: 3,
          chName: '場務',
          enName: 'Equipment',
        },
        {
          id: 4,
          chName: '活動',
          enName: 'Activity',
        },
        {
          id: 5,
          chName: '總務',
          enName: 'Affair',
        },
        {
          id: 6,
          chName: '公關',
          enName: 'PR',
        }
      ],
    };
  },
  methods: {
    afterLoad(origin, destination) {
      if (destination.isLast) {
        this.borderToWhite = false;
        // 滑到最後一頁了
        // this.$refs.fullpage.api.setAllowScrolling(false, 'up');
        console.log('After load end');
      }
    },
    moveSectionUp() {
      // this.$refs.fullpage.api.setAllowScrolling(true);
      this.borderToWhite = true;
      this.$refs.fullpage.api.moveSectionUp();
    },
    toIntroduction(id) {
      this.$router.push({
        path: 'organizeTeamIntro/',
        query: { id: id, name: 'staff' },
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
  .background {
    background-color: #00cbf4;
  }
}
.section1 {
  background-color: #00cbf4;
}

.arrowup-btn {
  position: absolute;
  z-index: 2;
  top: 12%;
  left: 4%;
  width: 10%;
  background-color: transparent;
  border-radius: 50%;
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

.section__waterFall {
  position: relative;
}

.sectionContainer {
  height: 100%;
  align-items: center;
  @include md-width() {
    padding-left: 30px;
  }
}

.content {
  @include md-width() {
    height: 100%;
    align-items: center;
    justify-content: space-around;
    &__left {
      width: 70%;
      padding: 70px;
      max-width: 900px;
    }
  }
  &__poster {
    width: 100%;
    @include md-width() {
      max-width: 400px;
      margin: auto;
    }
  }
  &__text {
    text-align: left;
    width: 70%;
    @include md-width() {
      width: 100%;
    }
  }
  .title {
    margin: 30px 0;
    font-size: 30px;
    color: $organizeTeam-mainColor;
    @include md-width() {
      font-size: 30px;
      margin: 15px 0;
    }
    @include lg-width() {
      font-size: 48px;
    }
  }
  p {
    margin-bottom: 0;
    font-size: 16px;
    line-height: 28px;
  }
}

.navbar-fixed {
  position: fixed;
  z-index: 3;
  right: 20px;
  height: 100%;
  bottom: -130%;
}

.navbar {
  position: relative;
  z-index: 2;
  width: 30%;
  display: inline-block;
  padding: 0;
}

.web-navbtn {
  width: 4rem;
  height: 4rem;
  font-size: 1rem;
  @include lg-width() {
    width: 6rem;
    height: 6rem;
    font-size: 1.3rem;
  }
}

.web-navbtn {
  width: 4rem;
  height: 4rem;
  font-size: 1rem;
  @include lg-width() {
    width: 6rem;
    height: 6rem;
    font-size: 1.3rem;
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

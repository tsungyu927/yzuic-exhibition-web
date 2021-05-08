<template>
  <div class="pg-intro col-md-10 px-0" :class="[changeColor]">
    <!-- 展覽作品 Header -->
    <template v-if="isWork">
      <img
        class="pre-arrow"
        src="../assets/icons/web-arrow_pink.svg"
        @click="previous"
      />
      <MobileHeader :title="introData.title" />
    </template>
    <!-- 策展團隊 Header -->
    <template v-if="!isWork">
      <img
        class="pre-arrow"
        src="../assets/icons/web-arrow_blue.svg"
        @click="previous"
      />
      <MobileHeader :title="introData.team" />
    </template>

    <!-- preview img 放大的彈窗 -->
    <SlideModal
      v-if="openSlideModal"
      v-on:handleSlideModal="handleSlideModal"
      :index="sliderNum"
      :image="introData.previewImg"
    />

    <div class="pg-intro-container">
      <!-- 封面 -->
      <!-- 展覽作品 封面-->
      <div class="pg-block p-0 cover d-md-flex flex-md-column" v-if="isWork">
        <div>
          <div class="title">{{ introData.title }}</div>
          <div class="cover__team d-none d-md-block">{{ introData.team }}</div>
        </div>
        <div class="d-none d-md-block cover__poster">
          <img class="img-fluid" :src="getPosterUrl(introData.poster)" />
        </div>
      </div>
      <!-- 策展團隊 封面-->
      <div class="pg-block p-0 cover d-md-flex flex-md-row" v-if="!isWork">
        <div>
          <div>
            <div class="title">{{ introData.team }}</div>
          </div>
          <!-- intro-mobile -->
          <div class="intro-mobile">{{ introData.projectIntro }}</div>
          <!-- intro-web -->
          <div class="intro-web ">
            <p v-if="introData.projectIntro">
              {{ introData.projectIntro | readMoreFun }}
            </p>
            <b-button v-b-modal="'concept-modal'">more</b-button>
          </div>
          <ConceptModal
            :content="introData.projectIntro"
            :modalId="'concept-modal'"
          />
        </div>

        <div class="d-none d-md-block cover__poster">
          <img class="img-fluid" :src="getPosterUrl(introData.poster)" />
        </div>
      </div>

      <!-- 介紹 -->
      <div class="pg-block intro d-md-flex flex-md-row mb-3" v-if="isWork">
        <div class="px-xs-5 pg-block__text">
          <div class="sub-title">{{ introText }}</div>
          <!-- intro-mobile -->
          <div class="intro-mobile">{{ introData.projectIntro }}</div>
          <!-- intro-web -->
          <div class="intro-web ">
            <p v-if="introData.projectIntro">
              {{ introData.projectIntro | readMoreFun }}
            </p>
            <b-button v-b-modal="'concept-modal'">more</b-button>
          </div>
          <ConceptModal
            :content="introData.projectIntro"
            :modalId="'concept-modal'"
          />
        </div>

        <div class="video">
          <div class="video__box">
            <iframe
              frameborder="0"
              :src="introData.viedo"
              allowFullScreen="true"
            >
            </iframe>
          </div>
        </div>
      </div>
      <!-- 作品 -->
      <div class="pg-block work d-md-flex flex-md-row mb-3" v-if="isWork">
        <div class="px-xs-5">
          <div class="sub-title">{{ workText }}</div>
        </div>
        <div class="img-grid col-md-9 col-xs-12">
          <div class="img-grid__group">
            <div
              class="preview-img"
              v-for="(image, index) in introData.previewImg"
              :key="index"
            >
              <img
                class="img-fluid"
                :src="getPreviewUrl(image)"
                @click="handleSlideModal(index)"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- 團隊 -->
      <div class="team pg-block d-md-flex flex-md-row px-xs-5 mb-3">
        <div class="px-xs-5 pg-block__text">
          <div class="sub-title">{{ teamText }}</div>
          <!-- mobile -->
          <div class="intro-mobile d-md-none" v-if="isWork">
            {{ introData.team }}
          </div>
          <!-- web -->
          <div class="d-none d-md-block team__logo" v-if="isWork">
            <img class="img-fluid" :src="getLogoUrl(introData.logo)" />
          </div>
        </div>
        <div class="slideShow">
          <!-- vue-agile套件(Carousel 輪播)  -->
          <!-- 要傳到套件裡，所以參數都要加冒號 -->
          <agile v-if="introData.teamImg" :autoplay="true" :dots="false">
            <div
              class="slide"
              v-for="(image, index) in introData.teamImg"
              :key="index"
            >
              <img class="img-fluid" :src="getTeamUrl(image)" />
            </div>
            <!-- 客製化 按鈕 -->
            <template slot="prevButton"
              ><img class="img-fluid" src="../assets/logo/carousel-prev.svg"
            /></template>
            <template slot="nextButton"
              ><img class="img-fluid" src="../assets/logo/carousel-next.svg"
            /></template>
          </agile>
        </div>

        <!-- mobile版 logo + team intro -->
        <div class="my-3 d-flex">
          <div class="d-md-none flex-grow-1">{{ introData.teamIntro }}</div>
          <div class="team__logo d-md-none logo__mobile" v-if="isWork">
            <img class="img-fluid" :src="getLogoUrl(introData.logo)" />
          </div>
        </div>
      </div>
      <div class="pg-block my-3 my-md-5 d-none d-md-block">
        {{ introData.teamIntro }}
      </div>
      <!-- 組員介紹區 -->
      <div class="d-flex px-md-5">
        <div class="memberGroup d-flex flex-wrap">
          <div
            class="member d-inline-flex flex-column flex-md-row"
            :key="index"
            v-for="(member, index) in introData.members"
          >
            <div class="member__pic">
              <img class="img-fluid" :src="getMemberUrl(member.pic)" />
            </div>
            <div class="member__text p-3 p-md-0">
              <div class="d-md-flex ">
                <div class="member__name">{{ member.name }}</div>
              </div>
              <div class="member__saying">{{ member.saying }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 聯絡我們 -->
      <Footer />
    </div>
    <LeftBar />
    <RightBar />
    <RightFooter />
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
import ConceptModal from '../modal/ConceptModal.vue';
import { VueAgile } from 'vue-agile';
import LeftBar from '../components/LeftBar';
import RightBar from '../components/RightBar';
import RightFooter from '../components/RightFooter';
import MobileHeader from '../components/MobileHeader';
import SlideModal from '../modal/SlideModal';

export default {
  name: 'Introduction',
  data() {
    return {
      introData: {},
      //read more
      readMore: false,
      readMore2: false,
      //video
      videoId: '',
      introText: '',
      teamText: '',
      workText: '',
      sliderNum: 0,
      openSlideModal: false,
      // 判斷是否為 展覽團隊（work）
      isWork: true,
      // 改變sub title 顏色用
      changeColor: '',
    };
  },
  mounted() {
    // console.log(this.$route.query.id);
    let $that = this;
    let type = '';
    //讀本地端json
    this.$ajax.get('/data.json').then(
      (res) => {
        switch ($that.$route.query.name) {
          //展覽作品
          case 'works':
            $that.isWork = true;
            type = res.data.works;
            $that.introText = '介紹';
            $that.workText = '作品';
            $that.teamText = '團隊';
            break;
          //策展團隊
          case 'staff':
            $that.isWork = false;
            type = res.data.staff;
            $that.teamText = '團隊';
            break;
        }
        // console.log('introData:', introData);
        $that.introData = type.filter(function(item) {
          return item.id == $that.$route.query.id;
        })[0];
      },
      (res) => {
        console.log('error');
      }
    );
  },
  methods: {
    //前一頁
    previous() {
      this.$router.go(-1);
    },
    //用環境變數讀取圖片URL
    getLogoUrl(fileName) {
      return `${process.env.VUE_APP_CONTEXT_PATH}${process.env.VUE_APP_IMG}/logo/${fileName}.jpg`;
    },
    getMemberUrl(fileName) {
      return `${process.env.VUE_APP_CONTEXT_PATH}${process.env.VUE_APP_IMG}/memberPic/${fileName}.jpg`;
    },
    getPosterUrl(fileName) {
      return `${process.env.VUE_APP_CONTEXT_PATH}${process.env.VUE_APP_IMG}/poster/${fileName}.jpg`;
    },
    getPreviewUrl(fileName) {
      return `${process.env.VUE_APP_CONTEXT_PATH}${process.env.VUE_APP_IMG}/previewImg/${fileName}.jpg`;
    },
    getTeamUrl(fileName) {
      return `${process.env.VUE_APP_CONTEXT_PATH}${process.env.VUE_APP_IMG}/teamImg/${fileName}.jpg`;
    },
    handleSlideModal(i) {
      if (i !== undefined) {
        this.sliderNum = i;
      }
      this.openSlideModal = !this.openSlideModal;
    },
  },
  watch: {
    $route: {
      handler: function(to, from) {
        // console.log(to, from);
        switch (to.path) {
          case '/exhibition':
            this.changeColor = 'subTitle__pink';
            break;
          case '/organizeTeam':
            this.changeColor = 'subTitle__blue';
            break;
          case '/organizeTeamIntro/':
            this.changeColor = 'subTitle__blue';
            break;
          default:
            this.changeColor = 'subTitle__pink';
            break;
        }
      },
      deep: true,
      immediate: true,
    },
  },
  filters: {
    readMoreFun(str) {
      // console.log(typeof str);
      return str.substring(0, 50) + '...';
    },
  },
  computed: {},
  components: {
    Footer,
    ConceptModal,
    LeftBar,
    RightBar,
    RightFooter,
    MobileHeader,
    agile: VueAgile,
    SlideModal,
  },
};
</script>

<style lang="scss" scoped>
.title {
  position: relative;
  font-size: 2rem;
  word-break: keep-all;
  @include md-width() {
    font-size: 3rem;
  }
}
.pg-intro {
  position: relative;
  width: 100%;
  min-height: 100%;
  margin: auto;

  .pg-intro-container {
    text-align: left;
    font-size: 14px;
    line-height: 1.5rem;
    min-height: 100%;
    //手機板 title
    .title {
      font-size: 60px;
      line-height: 60px;
      display: none;
      @include md-width() {
        display: block;
      }
    }
  }
  p {
    line-height: 1.5rem;
  }
}

.pg-block {
  line-height: 28px;
  font-size: 16px;
  margin: auto;
  padding: 0 40px;
  &__text {
    position: relative;
    @include md-width() {
      @include flex(1);
    }
  }
  .sub-title {
    font-size: 48px;
  }

  &:nth-child(even) {
    div:first-child {
      order: 1;
      // float: right;
      // width: 100%;
    }
  }
  //從第二個開始，每隔兩個的子層
  &:nth-child(2n + 2) {
    .sub-title {
      writing-mode: vertical-rl;
    }
  }
}

.cover {
  align-items: center;
  & > div:first-child {
    @include md-width() {
      text-align: center;
      padding: 3rem 0 1rem 0;
    }
  }
  &__team {
    font-size: 24px;
    line-height: 24px;
    margin: 10px 0;
    font-weight: bold;
  }
  &__poster {
    width: 100%;
    @include md-width() {
      width: 70%;
    }
  }
}

.intro {
  @include md-width() {
    padding-top: 5rem;
    & > div:first-child {
      order: 1; //flex的元件排列順序
      margin: 0;
      padding-left: 1.5rem;
    }
  }
}

.video,
.slideShow {
  width: 100%;
  @include md-width() {
    width: 70%;
  }
  &__box {
    position: relative;
    //16:9
    padding-bottom: 56.25%;
    width: 100%;
    height: 0;
    iframe {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
    }
  }
}

.work {
  @include md-width() {
    padding-top: 5rem;
    & > div:first-child {
      margin: 0;
      padding-right: 1.5rem;
    }
  }
  .img-grid {
    margin: 0 auto;
    position: relative;
    font-size: 0px;
    line-height: 0;
  }
  .img-grid__group {
    margin-left: -3px;
    margin-right: -3px;
  }
  .preview-img {
    display: inline-block;
    width: 50%;
    overflow: hidden;
    position: relative;
    padding: 3px;
    @include md-width {
      width: calc(100% / 2) !important;
    }
    @include lg-width {
      width: calc(100% / 3) !important;
    }
    &:nth-child(3n + 1) {
      width: 100%;
    }

    img {
      display: block;
      cursor: pointer;
    }
  }
}

.team {
  @include md-width() {
    padding-top: 5rem;
  }
  &__logo {
    margin: auto;
    @include md-width() {
      background: #333;
      width: 150px;
      height: 150px;
      position: absolute;
      bottom: 0;
      right: 0;
      // right: calc((100% - 80px) / 2);
    }
  }
}

.memberGroup {
  margin-left: -1rem;
  margin-right: -1rem;
  padding: 0 40px;
  .member {
    width: 50%;
    overflow: hidden;
    position: relative;
    padding: 1rem;
    text-align: center;
    min-height: 250px;

    @include md-width() {
      width: 100%;
      text-align: left;
      min-height: 150px;
    }
    &__pic {
      width: 100%;
      @include md-width() {
        width: 150px;
        margin: 0 25px 0 0;
      }
    }
    &__text {
      @include flex(1);
      padding: 10px;
    }
    &__name {
      margin-bottom: 5px;
      font-size: 20px;
      font-weight: bold;
    }
    &__saying {
      font-size: 16px;
      margin-top: 15px;
    }
  }
}

.sub-title {
  font-size: 24px;
  font-weight: bold;
  writing-mode: vertical-lr;

  @include md-width() {
    margin-bottom: 3rem;
    width: 100%;
  }
}
.intro-web {
  display: none;
  @include md-width() {
    display: block;
    text-align: left;
    letter-spacing: 1.5px;
    line-height: 16px;
    font-size: 16px;
    margin: auto;
    width: 100%;
  }
}
.intro-mobile {
  width: 80%;
  margin: 1.5rem auto;
  @include md-width() {
    display: none;
  }
}

.slide-show {
  background-color: pink;
  min-height: 200px;
  width: 100%;
  max-width: 650px; /* Also helpful. Optional. */
  margin-right: 25px;
}

.logo__mobile {
  width: 20%;
  margin-right: 20px;
}

.agile {
  // v-deep 往組件裡找 class
  ::v-deep .agile__actions {
    position: absolute;
    top: 0;
    bottom: 0;
    left: -40px;
    right: -40px;
    .agile__nav-button {
      width: 25px;
      border: none;
      background-color: transparent;
    }
  }
}

//粉字
.subTitle__pink {
  .title {
    color: $exhibition-mainColor;
  }
  .sub-title {
    color: $exhibition-mainColor;
  }
  .member__name {
    @include md-width() {
      color: $exhibition-mainColor;
    }
  }
}

//藍字
.subTitle__blue {
  .title {
    color: $organizeTeam-mainColor;
    writing-mode: vertical-rl;
  }
  .sub-title {
    color: $organizeTeam-mainColor;
  }
  .member__name {
    @include md-width() {
      color: $organizeTeam-mainColor;
    }
  }
}
</style>

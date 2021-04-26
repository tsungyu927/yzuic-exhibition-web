<template>
  <div class="pg-intro col-md-9 px-0">
    <!-- 網頁版 上一頁 -->
    <img
      class="pre-arrow"
      src="../assets/icons/web-arrow_pink.svg"
      @click="previous"
    />
    <MobileHeader :title="'展覽作品'" />
    <div class="pg-intro-container">
      <!-- 封面 -->
      <div class="pg-block p-0 cover d-md-flex flex-md-column">
        <div>
          <div class="title">{{ work.title }}</div>
          <div class="cover__team">{{ work.team }}</div>
        </div>
        <!-- <img class="cover__poster" :src="work.poster.vertical" /> -->
      </div>
      <!-- 介紹 -->
      <div class="pg-block intro d-md-flex flex-md-row">
        <div class="px-xs-5 pg-block__text">
          <div class="sub-title">介紹</div>
          <!-- intro-mobile -->
          <div class="intro-mobile">{{ work.projectIntro }}</div>
          <!-- intro-web -->
          <div class="intro-web ">
            <p>{{ work.projectIntro | readMoreFun }}</p>
            <b-button v-b-modal="'concept-modal'">more</b-button>
          </div>
          <ConceptModal
            :content="work.projectIntro"
            :modalId="'concept-modal'"
          />
        </div>

        <div class="video">
          <div class="video__box">
            <iframe
              frameborder="0"
              src="https://www.youtube.com/embed/SORD03t7nlo"
              allowFullScreen="true"
            >
            </iframe>
          </div>
        </div>
      </div>
      <!-- 作品 -->
      <div class="pg-block work d-md-flex flex-md-row">
        <div class="px-xs-5">
          <div class="sub-title">作品</div>
          <!-- intro-mobile -->
          <div class="intro-mobile">{{ work.projectShortIntro }}</div>
          <!-- intro-web -->
          <div class="intro-web ">
            <p>{{ work.projectIntro | readMoreFun }}</p>
            <b-button v-b-modal="'work-modal'">more</b-button>
          </div>
          <ConceptModal
            :content="work.projectShortIntro"
            :modalId="'work-modal'"
          />
        </div>
        <div class="img-grid col-md-9 col-xs-12">
          <div class="img-grid__group">
            <div
              class="preview-img"
              v-for="(image, index) in work.previewImg"
              :key="index"
            >
              <img class="img-fluid" :src="image" />
            </div>
          </div>
        </div>
      </div>
      <!-- 團隊 -->
      <div class="team pg-block d-md-flex flex-md-row px-xs-5">
        <div class="px-xs-5 pg-block__text">
          <div class="sub-title">團隊</div>
          <!-- mobile -->
          <div class="intro-mobile d-md-none">{{ work.team }}</div>
          <!-- web -->
          <div class="d-none d-md-block team__logo">
            <img class="img-fluid" :src="getLogoUrl(work.logo)" />
          </div>
        </div>
        <div class="slideShow">
          <!-- 這裡要放 SlideShow 組件 -->
          <!-- <div class="slideShow__box">
            <iframe
              frameborder="0"
              src="https://www.youtube.com/embed/SORD03t7nlo"
              allowFullScreen="true"
            >
            </iframe>
          </div> -->
          <SlideModal
            :index="1"
            :image="[
              'https://lh4.googleusercontent.com/proxy/la_whlWnRyQlgYtu_F8S-Cs25yzCZedtOFViVfGNWO_x_TFyf9CUFoxpQA6Q79Tp40ozqPQ6ydJbH-PzbePTAyMlikL3WZDZHABmpQdH4tB9ab9Ea2vVWWkwPJ2xqy1pDYz_Rj7y=s0-d',
              'https://images.pexels.com/photos/90270/pexels-photo-90270.jpeg?cs=srgb&dl=pexels-vibez-dzn-90270.jpg&fm=jpg',
              'https://yoyotours.com.tw/wp-content/uploads/2011/06/Paris-Wallpaper-Free-Download.jpg',
              'http://i.imgur.com/lX2so.jpg',
            ]"
          />
        </div>

        <!-- mobile版 logo + team intro -->
        <div class="my-3 d-flex">
          <div class="d-md-none">{{ work.teamIntro }}</div>
          <div class="team__logo col-4 d-md-none">
            <img class="img-fluid" :src="work.logo" />
          </div>
        </div>
      </div>
      <div class="pg-block my-3 d-none d-md-block">
        {{ work.teamIntro }}
      </div>
      <!-- 組員介紹區 -->
      <div class="d-flex px-5">
        <div class="memberGroup d-flex flex-wrap">
          <div
            class="member d-inline-flex flex-column flex-md-row"
            :key="index"
            v-for="(member, index) in work.members"
          >
            <div class="member__pic">
              <!-- <img class="img-fluid" :src="member.pic" /> -->
            </div>
            <div class="member__text">
              <div class="d-md-flex ">
                <div class="member__name">{{ member.name }}</div>
                <div class="member__assignment">{{ member.assignment }}</div>
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
import SlideModal from '../modal/SlideModal.vue';
import ConceptModal from '../modal/ConceptModal.vue';
import LeftBar from '../components/LeftBar';
import RightBar from '../components/RightBar';
import RightFooter from '../components/RightFooter';
import MobileHeader from '../components/MobileHeader';

export default {
  name: 'Introduction',
  data() {
    return {
      //json檔
      work: {},
      //read more
      readMore: false,
      readMore2: false,
      //video
      videoId: '',
    };
  },
  mounted() {
    // console.log(this.$route.query.id);
    let $that = this;
    //讀本地端json
    this.$ajax.get('/data.json').then(
      (res) => {
        const works = res.data.works;
        $that.work = works.filter(function(item) {
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
    getLogoUrl(fileName) {
      return `${process.env.VUE_APP_CONTEXT_PATH}${process.env.VUE_APP_IMG}/logo/${fileName}.jpg`;
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
    SlideModal,
    ConceptModal,
    LeftBar,
    RightBar,
    RightFooter,
    MobileHeader,
  },
};
</script>

<style lang="scss" scoped>
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
  margin: auto;
  padding: 0 40px;
  &__text {
    position: relative;
    @include md-width() {
      @include flex(1);
    }
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
    display: none;
    @include md-width() {
      display: block;
      text-align: center;
      padding: 3rem 0 1rem 0;
    }
  }
  &__team {
    margin-top: 25px;
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
      width: 80px;
      height: 80px;
      position: absolute;
      bottom: 0;
      right: calc((100% - 80px) / 2);
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
      height: 3rem;
      background-color: gray;
      @include md-width() {
        height: 60px;
        background-color: gray;
        width: 180px;
        margin: 0 25px 0 0;
      }
    }
    &__text {
      @include flex(1);
      padding: 10px;
    }
    &__name {
      font-size: 20px;
      font-weight: bold;
      @include md-width() {
        color: $exhibition-mainColor;
      }
    }
    &__assignment {
      margin-bottom: 5px;
      @include md-width() {
        color: $exhibition-mainColor;
        font-size: 20px;
        font-weight: bold;
        order: -1;
        margin: 0;
        &::after {
          content: '\00A0:\00A0';
        }
      }
    }
  }
}

.sub-title {
  font-size: 24px;
  color: $exhibition-mainColor;
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
    line-height: 16px;
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
</style>

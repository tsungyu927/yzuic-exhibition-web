<template>
  <div class="pg-intro col-md-9 px-0" v-if="work.title">
    <!-- 網頁版 上一頁 -->
    <img
      class="pre-arrow"
      src="../assets/icons/web-arrow_pink.svg"
      @click="previous"
    />

    <!-- 手機板 header -->
    <div class="pg-header d-flex d-md-none">
      <div class="header__icon previous">
        <img
          class="img-fluid"
          src="../assets/icons/phone-arrow_pink.svg"
          @click="previous"
        />
      </div>
      <div class="title">Mirror xd</div>
      <div class="header__icon menu">
        <img class="img-fluid" src="../assets/icons/phone-menu_white.svg" />
      </div>
    </div>

    <div class="pg-intro-container">
      <!-- 封面 -->
      <div class="pg-block p-0 cover d-md-flex flex-md-column">
        <div>
          <div class="title">{{ work.title }}</div>
          <div class="cover__team">{{ work.team }}</div>
        </div>
        <img class="cover__poster" :src="work.poster.vertical" />
      </div>
      <!-- 介紹 -->
      <div class="pg-block intro d-md-flex flex-md-row">
        <div class="px-xs-5">
          <div class="sub-title">介紹</div>
          <!-- intro-mobile -->
          <div class="intro-mobile">{{ work.gameIntro }}</div>
          <!-- intro-web -->
          <div class="intro-web">
            <input type="checkbox" class="read-more-state" id="post-1" />
            <p class="read-more-wrap ">
              {{ work.gameIntro | readMoreFun }}
              <span class="read-more-target">{{ work.gameIntro }}</span>
            </p>
            <label for="post-1" class="read-more-trigger"></label>
          </div>
        </div>
        <div class="video-container">
          <youtube video-id="IbQlBGniUQQ" :resize="true" :fitParent="true" />
          <!--<iframe
            width="500"
            height="315"
            :src="work.video"
            frameborder="0"
            allowfullscreen
          ></iframe>-->
        </div>
      </div>
      <!-- 作品 -->
      <div class="pg-block work d-md-flex flex-md-row">
        <div class="px-xs-5">
          <div class="sub-title">作品</div>
          <!-- intro-mobile -->
          <div class="intro-mobile">{{ work.gameIntro }}</div>
          <!-- intro-web -->
          <div class="intro-web">
            <input type="checkbox" class="read-more-state" id="post-1" />
            <p class="read-more-wrap ">
              {{ work.gameIntro | readMoreFun }}
              <span class="read-more-target">{{ work.gameIntro }}</span>
            </p>
            <label for="post-2" class="read-more-trigger"></label>
          </div>
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
      <div class="team pg-block d d-md-flex flex-md-row px-xs-5">
        <div class="px-xs-5 ">
          <div class="sub-title">團隊</div>
          <!-- mobile -->
          <div class="intro-mobile d-md-none">{{ work.team }}</div>
          <!-- web -->
          <div class="d-none d-md-block team__logo">
            <img class="img-fluid" :src="work.logo" />
          </div>
        </div>
        <div class="slide-show col-md-9">
          <!-- 這裡要放 SlideShow 組件 -->
        </div>

        <!-- mobile版 logo + team intro -->
        <div class="my-3 d-flex">
          <div class="team__intro d-md-none">{{ work.teamIntro }}</div>
          <div class="team__logo col-4 d-md-none">
            <img class="img-fluid" :src="work.logo" />
          </div>
        </div>
      </div>
      <div class="team__intro pg-block d-none d-md-block">
        {{ work.teamIntro }}
      </div>
      <!-- 組員介紹區 -->
      <div class="memberGroup col-md-10 col-xs-12">
        <div
          class="member"
          :key="index"
          v-for="(member, index) in work.members"
        >
          <div class="d-md-flex">
            <div class="member__pic">
              <!-- <img class="img-fluid" :src="member.pic" /> -->
            </div>
            <div>
              <div class="d-md-flex">
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
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
// import axios from 'axios';

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
  created() {
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
  },
  filters: {
    readMoreFun(str) {
      // console.log(typeof str);
      return str.substring(0, 60) + '..';
    },
  },
  computed: {},
  components: { Footer },
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
  &:nth-child(even) {
    div:first-child {
      order: 1;
      // float: right;
      // width: 100%;
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

.video-container {
  iframe {
    width: 100%;
    max-width: 650px; /* Also helpful. Optional. */
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
  }
  &__intro {
    flex: 1;
    margin-left: 15px;
    @include md-width() {
      margin: 25px 0;
    }
  }
}

.memberGroup {
  margin: auto;
  .member {
    display: inline-block;
    width: 50%;
    overflow: hidden;
    position: relative;
    padding: 1rem;
    text-align: center;
    &__pic {
      height: 3rem;
      background-color: gray;
      max-width: 220px;
      margin: auto;
      @include md-width() {
        height: 60px;
        background-color: gray;
        width: 180px;
        margin: 0 25px 0 0;
      }
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
    @include md-width() {
      width: 100%;
      text-align: left;
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

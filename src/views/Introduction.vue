<template>
  <div class="pg-intro" v-if="work.title">
    <!-- 網頁版 上一頁 -->
    <img
      class="pre-arrow"
      src="../assets/icons/web-arrow_pink.svg"
      @click="previous"
    />

    <!-- 手機板 header -->
    <div class="pg-intro-header d-flex d-md-none">
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

    <div class="pg-intro-container container-grid">
      <!-- 作品-1 -->
      <div class="pg-block a work-1">
        <div>
          <div class="title">{{ work.title }}</div>
          <div class="team">{{ work.tag }}</div>
        </div>
        <!-- <img class="poster" :src="work.poster.vertical" /> -->
      </div>
      <!-- 作品-2 -->
      <div class="pg-block b d-md-flex flex-md-row">
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
      <!-- 作品-3 -->
      <div class="pg-block c d-md-flex flex-md-row">
        <div class="col-md-3 col-xs-12">
          <div class="sub-title">作品</div>
          <!-- intro-mobile -->
          <div class="intro-mobile">{{ work.gameIntro }}</div>
          <!-- intro-web -->
          <div class="intro-web">
            <input type="checkbox" class="read-more-state" id="post-2" />
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
      <div class="pg-block d d-md-flex flex-md-row px-xs-5">
        <!-- sub-title + logo -->
        <div class="col-md-3">
          <div class="sub-title col-md-12 col-xs-8">團隊</div>
          <img class="logo col-md-12 col-xs-4" :src="work.logo" />
        </div>
        <div class="slide-show col-md-9">
          <!-- 這裡要放 SlideShow 組件 -->
        </div>
      </div>
      <!-- logo + intro -->
      <div class="pg-block e">
        <img class="logo d-md-none col-xs-4" :src="work.logo" />
        <div class="team-intro col-xs-8">{{ work.teamIntro }}</div>
      </div>

      <!-- 組員介紹區 -->
      <div class="member-group d-none">
        <!-- 這裡要放 MemberCard 組件 -->
        <div
          class="member d-none"
          :key="index"
          v-for="(member, index) in work.members"
        >
          <!--<img class="member-pic" :src="member.pic" />-->
          <div class="member-assignment">{{ member.assignment }}</div>
          <div class="member-name">{{ member.name }}</div>
          <div class="member-saying">{{ member.saying }}</div>
        </div>
      </div>
      <!-- 聯絡我們 -->
      <div class="contact"></div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';

export default {
  name: 'Introduction',
  data() {
    return {
      //json檔
      work: {
        // id: '',
        // title: '',
        // team: '',
        // tag: [],
        // type: '',
        // gameIntro: '',
        // teamIntro: '',
        // instructor: '',
        // members: [
        //   {
        //     pic: '',
        //     name: '',
        //     assignment: '',
        //     saying: '',
        //   },
        // ],
        // logo: '',
        // poster: {
        //   vertical: '',
        //   horizontal: '',
        // },
        // previewImg: [],
        // teamImg: [],
        // video: '',
      },
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
  components: {},
};
</script>

<style lang="scss" scoped>
.pg-intro {
  position: relative;
  width: 100%;
  min-height: 100%;

  .pg-intro-header {
    width: 100%;
    background-color: #fff;
    padding: 0.8rem;
    .header__icon {
      width: 25px;
    }
    .title {
      flex: 1;
      font-size: 24px;
    }
  }

  .pg-intro-container {
    min-height: 100%;
    //手機板 title
    .title {
      display: none;
      @include md-width() {
        display: block;
      }
    }
  }
}
.container-grid {
  .b,
  .c,
  .d,
  .e {
    border: 1px solid black;
  }
}

.pg-block {
  &:nth-child(even) {
    div:first-child {
      order: 1;
    }
  }
}

.a {
  & > div:first-child {
    display: none;
    @include md-width() {
      display: block;
      //網頁版 title
      .title {
        margin-bottom: 0.5rem;
      }
      padding: 3rem 0 2rem 0;
    }
  }
  .poster {
    width: 100%;
    @include md-width() {
      width: 70%;
    }
  }
}

.b {
  padding-top: 2rem;
  & > div:first-child {
    border: 1px solid pink;
  }
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

.c {
  padding-top: 2rem;
  @include md-width() {
    padding-top: 5rem;
    & > div:first-child {
      margin: 0;
      padding-right: 1.5rem;
    }
  }
  .img-grid {
    border: 1px solid blue;
    margin: 0 auto;
    position: relative;
    font-size: 0px;
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
      //   position: absolute;
      //   left: 0;
      //   top: 50%;
      //   transform: translateY(-50%);
    }
  }
}

.d {
  padding-top: 2rem;
  & > div:first-child {
    border: 1px solid pink;
    .logo {
      display: none;
    }
  }
  @include md-width() {
    padding-top: 5rem;
    & > div:first-child {
      padding-left: 1.5rem;
      .logo {
        display: block;
      }
    }
  }
}

.e {
  display: flex;
  flex-direction: row;
  padding-top: 2rem;
  .team-intro {
    font-size: 12px;
    line-height: 16px;
  }
  div {
    border: 1px solid pink;
    padding-left: 1.5rem;
  }
  @include md-width() {
    padding-top: 5rem;
    div {
      padding-left: 0;
    }
  }
}

.logo {
  width: 100px;
  height: 100px;
}

.sub-title {
  font-size: 24px;
  color: $exhibition-mainColor;
  font-weight: bold;
  writing-mode: vertical-lr;

  margin-bottom: 1.5rem;
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
  text-align: left;
  font-size: 12px;
  line-height: 16px;
  width: 80%;
  margin: auto;
  @include md-width() {
    display: none;
  }
}

.slide-show {
  background-color: pink;
  min-height: 300px;
}
</style>

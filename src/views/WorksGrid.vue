<template>
  <div class="works-grid">
    <!-- 網頁版 上一頁 -->
    <img
      class="pre-arrow"
      src="../assets/icons/web-arrow_pink.svg"
      @click="previous"
    />
    <!-- 手機板 header -->
    <div class="works-grid-header">
      <img
        class="previous"
        src="../assets/icons/phone-arrow_pink.svg"
        @click="previous"
      />
      <div class="title">遊戲</div>
      <img class="menu" src="../assets/icons/phone-menu_white.svg" />
    </div>

    <div class="works-grid-container">
      <div class="type-box">
        <img src="../assets/icons/typeBox-bg_pink.svg" />
      </div>
      <div class="cards-group">
        <div class="card" @click="toIntroduction">
          <div class="card-img"></div>
          <div class="card-text">
            <div class="title">
              <p>Mirror xd</p>
              <p>無情浣熊工作室</p>
            </div>
            <div class="tag">＃2D#解謎＃惡搞的東西哈哈哈</div>
            <div class="intro">
              眼睛的瞳孔縮放是什麼意思？當沈浸在自己所愛之事時，情緒在激動、興奮的狀態下，瞳孔會隨之放大，相反地，遇到挫。嗚嗚嗚....
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-img"></div>
          <div class="card-text">
            <div class="title">
              <p>Mirror xd</p>
              <p>無情浣熊工作室</p>
            </div>
            <div class="tag">＃2D#解謎＃惡搞的東西哈哈哈</div>
            <div class="intro">
              眼睛的瞳孔縮放是什麼意思？當沈浸在自己所愛之事時，情緒在激動、興奮的狀態下，瞳孔會隨之放大，相反地，遇到挫。嗚嗚嗚....
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-img"></div>
          <div class="card-text">
            <div class="title">
              <p>Mirror xd</p>
              <p>無情浣熊工作室</p>
            </div>
            <div class="tag">＃2D#解謎＃惡搞的東西哈哈哈</div>
            <div class="intro">
              眼睛的瞳孔縮放是什麼意思？當沈浸在自己所愛之事時，情緒在激動、興奮的狀態下，瞳孔會隨之放大，相反地，遇到挫。嗚嗚嗚....
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-img"></div>
          <div class="card-text">
            <div class="title">
              <p>Mirror xd</p>
              <p>無情浣熊工作室</p>
            </div>
            <div class="tag">＃2D#解謎＃惡搞的東西哈哈哈</div>
            <div class="intro">
              眼睛的瞳孔縮放是什麼意思？當沈浸在自己所愛之事時，情緒在激動、興奮的狀態下，瞳孔會隨之放大，相反地，遇到挫。嗚嗚嗚....
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-img"></div>
          <div class="card-text">
            <div class="title">
              <p>Mirror xd</p>
              <p>無情浣熊工作室</p>
            </div>
            <div class="tag">＃2D#解謎＃惡搞的東西哈哈哈</div>
            <div class="intro">
              眼睛的瞳孔縮放是什麼意思？當沈浸在自己所愛之事時，情緒在激動、興奮的狀態下，瞳孔會隨之放大，相反地，遇到挫。嗚嗚嗚....
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-img"></div>
          <div class="card-text">
            <div class="title">
              <p>Mirror xd</p>
              <p>無情浣熊工作室</p>
            </div>
            <div class="tag">＃2D#解謎＃惡搞的東西哈哈哈</div>
            <div class="intro">
              眼睛的瞳孔縮放是什麼意思？當沈浸在自己所愛之事時，情緒在激動、興奮的狀態下，瞳孔會隨之放大，相反地，遇到挫。嗚嗚嗚....
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorksGrid',
  data() {
    return {};
  },
  methods: {
    previous() {
      // console.log('click');
      return this.$router.push('Exhibition');
    },
    toIntroduction() {
      return this.$router.push('Introduction');
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped>
@import '../scss/all.scss';
.works-grid {
  position: relative;
  width: 100%;
  height: 100%;
  &-header {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 4fr 1fr;
    background-color: white;
    height: fit-content;
    padding: 0.8rem 0;
    align-items: center;
    @include md-width() {
      display: none;
    }
  }
  &-container {
    height: 100%;
    padding: 0 1rem;
    @include md-width() {
      display: grid;
      grid-template-columns: 1fr 3fr;
      grid-gap: 2rem;
      height: 100%;
      padding: 5rem 3rem 0 3rem;
    }
    @include lg-width() {
      grid-gap: 0;
      padding: 5rem 5rem 0 3rem;
    }
  }
}

.type-box {
  display: none;
  @include md-width() {
    position: relative;
    display: flex;
    img {
      width: 100%;
      height: 100%;
    }
    color: white;
    background-size: contain;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 19rem;
    &::before {
      position: absolute;
      content: '遊戲';
      writing-mode: vertical-rl;
      margin-bottom: 1rem;
      top: 24%;
      right: 38%;
      // font-weight: bold;
      font-size: 3.2rem;
      @include lg-width() {
        right: 42%;
        top: 20%;
        font-size: 3.5rem;
      }
    }
    &::after {
      position: absolute;
      content: 'Game';
      font-size: 1.8rem;
      right: 29%;
      bottom: 25%;
      @include lg-width() {
        right: 35%;
        font-size: 2rem;
      }
    }
  }
}

.cards-group {
  width: 100%;
  height: 100%;
  display: grid;
  grid-gap: 1rem;
  @include md-width() {
    grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
  }
  @include xl-width() {
    grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
  }
}

.card {
  display: flex;
  flex-direction: row;
  height: fit-content;
  background-color: #eaebeb;
  flex-direction: column;
  cursor: pointer;
  height: 100%;
  @include md-width() {
    border-bottom: $exhibition-mainColor 1px solid;
    background-color: white;
    display: flex;
    border-radius: 0;
  }
  //預覽作品圖
  &-img {
    width: 100%;
    background: url(/img/TeamPoster7.59df26f9.jpg) center center no-repeat;
    background-size: cover;
    height: 220px;
    @include md-width() {
      width: 100%;
      height: 200px;
    }
  }
  &-text {
    margin: 1.2rem;
    text-align: left;
    .title {
      color: $exhibition-mainColor;
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      p:last-child {
        font-size: 0.8rem;
      }

      @include md-width() {
        flex-direction: column;
        align-items: flex-start;
        p:last-child {
          font-size: 1rem;
          margin-top: 1rem;
          @include md-width() {
            font-size: 0.8rem;
          }
        }
      }
    }
    .tag {
      font-size: 0.8rem;
      margin-bottom: 1rem;
      @include md-width() {
        font-size: 1rem;
      }
    }
    .intro {
      font-size: 1rem;
      line-height: 1.2rem;
      @include md-width() {
        font-size: 0.8rem;
      }
    }
  }
}
</style>

<template>
  <div class="works-grid">
    <p>{{ $route.query.type }}</p>
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
      <div class="title">{{ getTypeState.chName }}</div>
      <img class="menu" src="../assets/icons/phone-menu_white.svg" />
    </div>

    <div class="works-grid-container">
      <div class="typeBox">
        <div class="typeBox__ch">{{ getTypeState.chName }}</div>
        <div class="typeBox__en">{{ getTypeState.enName }}</div>
      </div>
      <!-- key 要換成workID -->
      <div class="cards-group" v-for="item in worksGroup" :key="item.id">
        <div class="card" @click="toIntroduction(item.id)">
          <div class="card-img">
            <img :src="item.poster.vertical" />
          </div>
          <div class="card-text">
            <div class="title">
              <p>{{ item.title }}</p>
              <p>{{ item.team }}</p>
            </div>
            <div class="tag">{{ item.tag }}</div>
            <div class="intro">
              {{ item.gameIntro }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { typeBox } from '@data/utilis.js';
export default {
  name: 'WorksGrid',
  data() {
    return {
      worksGroup: {},
    };
  },
  mounted() {
    let $that = this;
    // console.log(this.$route.query.type);
    //讀本地端json
    this.$ajax.get('/data.json').then(
      (res) => {
        const works = res.data.works;
        $that.worksGroup = works.filter(function(item) {
          return item.type == $that.$route.query.type;
        });
      },
      (res) => {
        console.log('error');
      }
    );
  },
  methods: {
    previous() {
      this.$router.go(-1);
    },
    toIntroduction(id) {
      this.$router.push({
        path: 'Introduction/',
        query: { id: id.toLowerCase() },
      });
    },
  },
  computed: {
    ...mapGetters(['GetTypeBox']),
    getTypeState() {
      return typeBox[this.$route.query.type];
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped>
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

.typeBox {
  display: none;
  @include md-width() {
    display: flex;
    color: white;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 19rem;
    background-color: $exhibition-mainColor;
    border-radius: 161px;
    // &::before {
    //   position: absolute;
    //   content: '遊戲';
    //   writing-mode: vertical-rl;
    //   margin-bottom: 1rem;
    //   top: 24%;
    //   right: 38%;
    //   // font-weight: bold;
    //   font-size: 3.2rem;
    //   @include lg-width() {
    //     right: 42%;
    //     top: 20%;
    //     font-size: 3.5rem;
    //   }
    // }
    // &::after {
    //   position: absolute;
    //   content: 'Game';
    //   font-size: 1.8rem;
    //   right: 29%;
    //   bottom: 25%;
    //   @include lg-width() {
    //     right: 35%;
    //     font-size: 2rem;
    //   }
    // }
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

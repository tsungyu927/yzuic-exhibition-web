<template>
  <div class="worksGrid m-auto">
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
      <div class="title">{{ getTypeState.chName }}</div>
      <div class="header__icon menu">
        <img class="img-fluid" src="../assets/icons/phone-menu_white.svg" />
      </div>
    </div>

    <div class="workGrid-container d-md-flex">
      <div class="workGrid__left d-none d-md-block">
        <div class="typeBox d-flex">
          <div class="typeBox__text m-auto">
            <div class="typeBox__ch">{{ getTypeState.chName }}</div>
            <div class="typeBox__en">{{ getTypeState.enName }}</div>
          </div>
        </div>
      </div>
      <!-- key 是 workID -->
      <div class="workGroup col-md-10">
        <div
          class="work"
          v-for="work in worksGroup"
          :key="work.id"
          @click="toIntroduction(work.id)"
        >
          <div class="work__img">
            <img class="img-fluid" :src="work.poster.vertical" />
          </div>
          <div class="work__text">
            <div
              class="d-flex justify-content-between align-items-center d-md-block"
            >
              <div class="work__title">{{ work.title }}</div>
              <div class="work__team">{{ work.team }}</div>
            </div>
            <div class="work__tag">{{ work.tag }}</div>
            <div class="work__intro">
              {{ work.projectShortIntro }}
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
        // console.log($that.worksGroup);
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
        path: 'introduction/',
        query: { id: id },
      });
    },
  },
  filters: {
    readMoreFun(str) {
      return str.substring(0, 45) + '...';
    },
  },
  computed: {
    getTypeState() {
      return typeBox[this.$route.query.type];
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.worksGrid {
  position: relative;
  width: 100%;
  height: 100%;
  &__left {
    flex: 1;
  }
  @include md-width() {
    padding: 80px;
  }
}

.typeBox {
  color: white;
  background-color: $exhibition-mainColor;
  border-radius: 161px;
  width: 200px;
  height: 280px;
  &__ch {
    writing-mode: vertical-lr;
    font-size: 50px;
    line-height: 50px;
    margin: auto;
  }
  &__en {
    font-size: 24px;
    margin-top: 20px;
  }
}

.workGroup {
  margin: auto;
  cursor: pointer;
  .work {
    display: inline-block;
    width: 100%;
    text-align: left;
    margin-bottom: 25px;
    @include md-width() {
      width: calc((100% / 2) - 25px);
      height: 350px;
      background-color: #ffff;
      border-bottom: $exhibition-mainColor 1px solid;
      background-color: white;
      border-radius: 0;
      margin-left: 25px;
      float: left;
    }
    @include lg-width() {
      width: calc((100% / 3) - 25px);
      height: 360px;
    }
    &__text {
      background-color: #eaebeb;
      padding: 30px;
      @include md-width() {
        background-color: #ffff;
        padding: 20px;
      }
    }
    &__title {
      color: $exhibition-mainColor;
      font-size: 24px;
      line-height: 24px;
      font-weight: bold;
      position: relative;
      padding-left: 20px;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 13px;
        height: 24px;
        background-color: $exhibition-mainColor;
      }
    }
    &__team {
      color: $exhibition-mainColor;
      font-size: 16px;
      font-weight: bold;
      @include md-width() {
        font-size: 14px;
        margin: 1rem 0 0 0;
      }
    }
    &__tag {
      font-size: 14px;
      margin: 0.5rem 0 1rem 0;
      font-weight: bold;
      @include md-width() {
        font-size: 14px;
        margin: 0 0 1rem 0;
      }
    }
    &__intro {
      font-size: 16px;
      line-height: 1.5rem;
      @include md-width() {
        font-size: 0.8rem;
      }
    }
  }
}
</style>

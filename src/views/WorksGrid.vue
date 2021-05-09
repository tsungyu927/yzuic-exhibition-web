<template>
  <div class="worksGrid m-auto">
    <!-- 網頁版 上一頁 -->
    <img
      class="pre-arrow"
      src="../assets/icons/web-arrow_pink.svg"
      @click="previous"
    />

    <MenuBtn :main-color="'#ff1a83'" />
    <!-- 手機板 header -->
    <MobileHeader :title="getTypeState.chName" />

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
            <img class="img-fluid" :src="getPosterUrl(work.poster)" />
          </div>
          <div class="work__text">
            <div
              class="d-flex justify-content-between align-items-center d-md-block"
            >
              <div class="work__title">{{ work.title }}</div>
              <div class="work__team">{{ work.team }}</div>
            </div>
            <div class="work__tag">{{ work.tag }}</div>
            <div class="work__intro" v-if="work.projectShortIntro">
              {{ work.projectShortIntro | readMoreFun }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <LeftBar />
    <RightBar />
    <RightFooter />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { typeBox } from '@data/utilis.js';
import MenuBtn from '../components/MenuBtn';
import MobileHeader from '../components/MobileHeader';
import LeftBar from '../components/LeftBar';
import RightBar from '../components/RightBar';
import RightFooter from '../components/RightFooter';

export default {
  name: 'WorksGrid',
  data() {
    return {
      worksGroup: {},
      work: {},
    };
  },
  mounted() {
    let $that = this;
    // console.log(this.$route.query.type);
    //讀本地端json
    this.$ajax.get('/data.json').then(
      (res) => {
        const works = res.data.works;
        if($that.$route.query.type==='all') {
          $that.worksGroup = works.filter(function(item){
            return item.id != 0;
          });
        }
        else {
          $that.worksGroup = works.filter(function(item) {
            return item.type == $that.$route.query.type;
          });
        }
        
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
      //傳作品資料(object)給下一頁
      let $that = this;
      $that.work = $that.worksGroup.filter(function(item) {
        return item.id == id;
      })[0];

      //路由到下一頁
      this.$router.push({
        path: 'exhibitionIntro/',
        query: { id: id, name: 'works' },
      });
    },
    getPosterUrl(fileName) {
      return `${process.env.VUE_APP_CONTEXT_PATH}${process.env.VUE_APP_IMG}/poster/${fileName}.jpg`;
    },
  },
  filters: {
    readMoreFun(str) {
      return str.substring(0, 35) + '...';
    },
  },
  computed: {
    getTypeState() {
      return typeBox[this.$route.query.type];
    },
  },
  components: { MenuBtn, MobileHeader, LeftBar, RightBar, RightFooter },
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
    overflow: hidden;
    @include md-width() {
      width: calc((100% / 2) - 25px);
      max-height: 350px;
      background-color: #ffff;
      border-bottom: $exhibition-mainColor 1px solid;
      background-color: white;
      border-radius: 0;
      margin-left: 25px;
      float: left;
    }
    @include lg-width() {
      width: calc((100% / 3) - 25px);
      height: 400px;
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
      height: 40px;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
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

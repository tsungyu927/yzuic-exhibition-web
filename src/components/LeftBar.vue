<template>
    <div class="left-bar"> 
      <!--<router-link to="/">Home</router-link> | -->
      <div class="square">
        <router-link to="/exhibition">展覽作品</router-link>
      </div>
      <div class="square">
        <router-link to="/organizeTeam">策展團隊</router-link>
      </div>
      <div class="circle">
        <router-link to="/organizeTeam">FB</router-link>
      </div>
      <div class="circle">
        <router-link to="/organizeTeam">IG</router-link>
      </div>
       <div class="circle">
        <router-link to="/organizeTeam">YT</router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: 'LeftBar',
}

</script>

<style lang="scss">
    @import "../scss/all.scss";
  
    .left-bar {
        display: grid;
        align-items: center;
        height: 100%;
        width: 100%;
        align-items: center;
        grid-template-rows: 4fr 4fr 1fr 1fr 1fr;
        grid-gap: 0.4rem;
        a {
            font-weight: bold;
            color: $exhibition-mainColor;
            &:hover {
                color: $exhibition-mainColor;
            }
        }
    }

    .square {
        border: 1px solid $exhibition-mainColor;
        // padding: 1rem 0;
        height:100%;
        width: 100%;
        a {
            writing-mode: vertical-lr;
            margin-top: calc(100%/2);
        }
    }

    .circle {
        border: 1px solid $exhibition-mainColor;
        border-radius: 50%;
        width: 100%;
        a {
            line-height: 1.5rem;
            font-size: 0.3rem;
        }
    }

    .square, .circle {
      &:hover {
        background-color: $exhibition-mainColor;
        a {
          color: white;
        }
      }
    }
</style>
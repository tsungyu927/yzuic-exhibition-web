<template>
  <div class="gallery-container">
    <full-page ref="fullpage" :options="options">
      <div class="section">
        <img class="background" src="../assets/back.jpg" />
      </div>
      <div class="section">
        <WaterFall />
      </div>
    </full-page>
  </div>
</template>

<script>
import WaterFall from '../components/WaterFall'

export default {
  name: 'Exhibition',
  data(){
    return {
      options: {
        afterLoad: this.afterLoad,

      }
    }
  },
  methods: {
    afterLoad(origin, destination){
      if(destination.isLast){
        this.$refs.fullpage.api.setAllowScrolling(false, 'up')
        // 滑到最後一頁了
        console.log('After load end')
      }
    }
  },
  components: {
    WaterFall
  },
}
</script>

<style scoped>

.gallery-container, .background{
  width: 100%;
  height: 100%;
}
.scetion{
  width: 100%;
  height: 100%;
}

</style>
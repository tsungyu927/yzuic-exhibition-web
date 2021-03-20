<template>
  <div class="page-loader" v-if="!isloaded">
    <div class="loader-cube"></div>
    <div class="loader-text">Loading ...</div>
  </div> 
</template>

<script>
  export default {
    name: 'Loader',
    data: () => {
      return {
        isloaded: false
      }
    },
    mounted() {
      document.onreadystatechange = () => {
        if (document.readyState == "complete") { 
          this.isloaded = true;
        } 
      }
    },
  }
</script>

<style scoped>
.page-loader{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #333;
  z-index: 999;
}
.loader-cube{
  width: 50px;
  height: 50px;
  background-color: #F5AA39;
  animation: rotate 2s infinite ;
}
.loader-text{
  margin-top: 30px;
  color: #fff;
  font-size: 30px;
  font-weight: bold;
}
@keyframes rotate {
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
}
</style>
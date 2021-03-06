<template>
  <div class="concept-modal">
    <div class="container">
      <div class="title">
        <button type="button" @click="handleClose()">
          <img src="../assets/logo/closeBtn_pink.svg" />
        </button>
      </div>
      <div class="content">
        {{content}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConceptModal',
  props: {
    content: {
      type: String,
      require: true,
    }
  },
  methods: {
    handleClose: () => {
      console.log('close modal')
    }
  }
}
</script>

<style scoped>
.concept-modal{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(89,89,89,0.5);
}
.concept-modal .container{
  padding: 0;
  margin: 0;
  width: 80vw;
  height: 60vh;
  background-color: #fff;
  border-radius: 3em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
/* title */
.concept-modal .title{
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.concept-modal .title button{
  padding: 0;
  border: none;
  background-color: transparent;
  margin-right: 2%;
}
/* content */
.concept-modal .content{
  width: 80%;
  height: 80%;
  font-size: 20px;
  line-height: 48px;
  color: #595757;
}
</style>
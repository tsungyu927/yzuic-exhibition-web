<template>
  <!-- concept-modal 介紹 -->
  <div class="conceptModal">
    <b-modal
      :ref="modalId"
      :id="modalId"
      centered
      hide-header
      hide-footer
      size="lg"
    >
      <div class="conceptModal__title">
        <button type="button" @click="hideModal()">
          <img src="../assets/logo/closeBtn_pink.svg" />
        </button>
      </div>
      <p class="my-4 mx-auto conceptModal__content">
        {{ content }}
      </p>
    </b-modal>
  </div>
</template>

<script>
// example of component
// <ConceptModal content="在自己所愛之事時，情緒在激動、興奮的狀態下，瞳孔會隨之放大，相反地，遇到挫。嗚嗚嗚眼睛的瞳孔縮放是什麼意思.....？眼睛的瞳孔縮放是什麼意思？當沈浸在自己所愛之事時，情緒在激動、興奮的狀態下，瞳孔會隨之放大，相反地，遇到挫。嗚嗚嗚眼睛的瞳孔縮放是什麼意思.....？眼睛的瞳孔縮放是什麼意思？當沈浸在自己所愛之事時，情緒在激動、興奮的狀態下，瞳孔會隨之放大，相反地，遇到挫。嗚嗚嗚眼睛的瞳孔縮放是什麼意思.....？眼睛的瞳孔縮放是什麼意思？當沈浸在自己所愛之事時，情緒在激動、興奮的狀態下，瞳孔會隨之放大，相反地，遇到挫。嗚嗚嗚眼睛的瞳孔縮放是什麼意思.....？" />

export default {
  name: 'ConceptModal',
  props: ['content', 'modalId'],
  methods: {
    // using ref attribute and then call the show(), hide()
    hideModal() {
      document.querySelector('body').style.overflowY = 'scroll';
      this.$refs[this.modalId].hide();
    },
  },
};
</script>

<style scoped>
.concept-modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}
.concept-modal .container {
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
.concept-modal .title {
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.concept-modal .title button {
  padding: 0;
  border: none;
  background-color: transparent;
  margin-right: 2%;
}
/* content */
.concept-modal .content {
  width: 80%;
  height: 80%;
  font-size: 20px;
  line-height: 48px;
  color: #595757;
}
</style>

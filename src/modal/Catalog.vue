<template>
  <div class="catalog">
    <div class="catalog-left">
      <img class="catalog-logo" src="../assets/logo/vertical-logo.png" />
    </div>
    <div class="catalog-right">
      <div class="catalog-right-bar">
        <div class="catalog-btn">
          <div class="catalog-content">
            主頁
          </div>        
        </div>
        <div class="catalog-btn">
          <div class="catalog-content">
            展覽<br>資訊
          </div>        
        </div>
        <div class="catalog-btn">
          <div class="catalog-content">
            展覽<br>作品
          </div>        
        </div>
      </div>
      <div class="catalog-right-bar">
        <div class="catalog-btn">
          <div class="catalog-content">
            策展<br>概念
          </div>        
        </div>
        <div class="catalog-btn">
          <div class="catalog-content">
            策展<br>團隊
          </div>        
        </div>
        <div class="catalog-btn">
          <div class="catalog-content">
            聯絡<br>我們
          </div>        
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Catalog',
}
</script>

<style lang="scss" scoped>
.catalog{
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background-color: #FF1B82;
  animation:  0.3s linear openAnim;
  display: flex;

  $catalog-font-color: #fff;
  // left
  &-left{
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &-logo{
    margin-left: 2em;
    width: auto;
    height: 80%;
  }

  // right
  &-right{
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  &-right-bar{
    width: 80%;
    height: 30%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
  &-btn{
    cursor: pointer;
    position: relative;
    width: 20%;
  }
  &-btn:after{
    content: "";
    display: block;
    padding-bottom: 100%;
    border: 3px solid #fff;
    border-radius: 50%;
  }
  &-btn:hover{
    background-color: #fff;
    border-radius: 50%;
    & > div{
      color: #FF1B82;
    }
  }
  &-content{
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 1.5em;
    font-weight: bold;
    line-height: 1.3em;
  }
}

@keyframes openAnim{
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}
</style>
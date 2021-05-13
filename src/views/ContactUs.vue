<template>
  <div class="contact-container">
    <MenuBtn :main-color="'#ff1a83'" :toWhite="true" />
    <div class="background">
      <MobileHeader :title="''" class="p-absolute " />
      <!-- <img class="background" src="../assets/fluid.png" /> -->

      <div class="contact">
        <a class="contact-btn" :href="'https://www.facebook.com/yzuic24th'" target="_blank">
          <div class="contact-content">
            FB
          </div>        
        </a>
        <a class="contact-btn" :href="'https://www.instagram.com/yzuic_24/'" target="_blank">
          <div class="contact-content">
            IG
          </div>        
        </a>
      </div>


      <PageTitle :ch-name="'聯絡我們'" :en-name="'Contact Us'" />
      <LeftBar :toWhite="true"/>
      <RightBar :toWhite="true"/>
      <RightFooter :isShow="true"/>
    </div>
  </div>
</template>

<script>
import LeftBar from '../components/LeftBar';
import RightBar from '../components/RightBar';
import RightFooter from '../components/RightFooter';
import PageTitle from '../components/PageTitle';
import MenuBtn from '../components/MenuBtn';
import MobileHeader from '../components/MobileHeader';

export default {
  name: 'Contactus',
  components: {
    LeftBar,
    RightBar,
    RightFooter,
    PageTitle,
    MenuBtn,
    MobileHeader,
  }
};
</script>

<style lang="scss" scoped>
.contact-container{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #ff1a83;
}
.background{
  position: relative;
  width: 100%;
  height: 100%;
}
.contact{
  position: absolute;
  bottom: 10%;
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  @include md-width() {
    top: 0;
    right: 0;
    width: 80%;
    height: 100%;
    align-items: center;
  }

  &-btn{
    margin: 0 2em;
    cursor: pointer;
    position: relative;
    width: 20%;
    
    @include md-width() {
      width: 15%;
    }
  }
  &-btn:after{
    content: "";
    display: block;
    padding-bottom: 90%;
    border: 3px solid #fff;
    border-radius: 50%;

    @include md-width() {
      padding-bottom: 100%;
    }
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
</style>
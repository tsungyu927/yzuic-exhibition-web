<template>
  <div class="contact-container">
    <MenuBtn :main-color="'#ff1a83'" :toWhite="true" />
    <div>
      <!-- [Section1] 液態金屬 -->
      <div data-anchor="cover" class="background">
        <MobileHeader :title="''" class="p-absolute " />
        <!-- <img class="background" src="../assets/fluid.png" /> -->

        

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
  width: 100%;
  height: 100%;
}
</style>
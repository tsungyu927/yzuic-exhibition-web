<template>
  <div class="homeIntro">
    <img class="QQLine" :src="require('../assets/home/modal/QQ.svg')" />
    <div class="homeIntro-left">
      <img @click="handleClose" class="backIcon" :src="require('../assets/home/modal/返回icon.svg')" />
      <div class="homeIntro-text">
        <div class="homeIntro-title">為甚麼要叫「此刻變態」？</div>
        <div class="homeIntro-con">
          通常大家聽到變態，會聯想到的是：<br>一個人可能不太正常的樣子，或是某些動物發育至成體的過程中，必須經過的變化。<br>而今年，我們自己定義了「變態」<br>一是型態轉變的「變態」<br>二則痴狂於某件事物的「變態」<br>「此刻」，每一次、每一刻都可以是一種變態，每一個當下都會是一個轉變的時間點，每個時間點都在進行「變態」。<br>
        </div>
        <div class="homeIntro-title">為甚麼是眼睛瞳孔？而為甚麼瞳孔內會有金屬元素？why？</div>
        <div class="homeIntro-con">
          眼睛是靈魂之窗，人的眼神夾雜著很多種情緒<br>透過瞳孔，我們可以在這之中看出一個人內心的感受。<br>透過眼神，我們可以看到如金屬一邊堅毅地凝視著所愛事物。
        </div>
        <div class="homeIntro-title">眼睛的瞳孔縮放、虹膜的變化，其中有著怎麼樣的故事？</div>
        <div class="homeIntro-con">
          當情緒有所波動及起伏時，瞳孔、虹膜隨之縮放與變色<br>這樣的過程，即為一種成長、一種型態的轉化。<br>象徵著我們會不斷的挑戰，內心也會因此不斷的「變態」。        
        </div>
      </div>
    </div>
    <div class="homeIntro-right">
      <img :src="require('../assets/home/海報/poster.png')" />
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import '../scss/home/IntroModal.css'

export default {
  name: 'HomeIntro',
  methods: {
    handleClose() {
      gsap.to('.homeIntro',{
        opacity: 0,
        duration: 0.2
      }).then(()=>{
        this.$emit('handleCloseModal')
      })
    }
  }
}
</script>
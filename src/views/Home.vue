<template>
  <div class="con">
    <div class="home-top">
      <img alt="home-top" src="../assets/home/home_top.png" />
    </div>
    <div class="home-container">
      <img class="home-text00 home-text00-1" src="../assets/home/每一刻的.svg" />
      <img class="home-text00 home-text00-2" src="../assets/home/努力追求.svg"/>
      <img class="home-blueback" src="../assets/home/blue-back.svg" />
      <img class="home-text01-outline" src="../assets/home/text01_outline.svg" />
      <img class="home-text01" src="../assets/home/text01.svg" alt="大膽狂放" />
      <!-- 堆積了此刻的變態 -->
      <img class="home-text home-text02-1" src="../assets/home/text/堆.svg" alt="堆" :style="{top: '120vh', right: '10vw', width: '11vw', height: 'auto'}" />
      <img class="home-text home-text02-2" src="../assets/home/text/積.svg" alt="積" :style="{top: '132vh', right: '19vw', width: '11vw', height: 'auto'}" />
      <img class="home-text home-text02-3" src="../assets/home/text/了.svg" alt="了" :style="{top: '140vh', right: '27vw', width: '8vw', height: 'auto'}" />
      <img class="home-text home-text02-4" src="../assets/home/text/此.svg" alt="此" :style="{top: '150vh', right: '37vw', width: '7vw', height: 'auto'}" />
      <img class="home-text home-text02-5" src="../assets/home/text/刻.svg" alt="刻" :style="{top: '159vh', right: '46vw', width: '7vw', height: 'auto'}" />
      <img class="home-text home-text02-6" src="../assets/home/text/的.svg" alt="的" :style="{top: '167vh', right: '54vw', width: '7vw', height: 'auto'}" />
      <img class="home-text home-text02-7" src="../assets/home/text/變.svg" alt="變" :style="{top: '173vh', right: '63vw', width: '11vw', height: 'auto'}" />
      <img class="home-text home-text02-8" src="../assets/home/text/態.svg" alt="態" :style="{top: '186vh', right: '72vw', width: '11vw', height: 'auto'}" />
      <!-- 一圈一圈的圓 -->
      <div class="home-circle home-circle0"></div>
      <div class="home-circle home-circle1"></div>
      <div class="home-circle home-circle2" :style="{top: '200vh', left: '23vw', width: '40vw', height: '13vw'}"></div>
      <div class="home-circle home-circle3" :style="{top: '182vh', left: '15vw', width: '50vw', height: '16vw'}"></div>
      <div class="home-circle home-circle4" :style="{top: '157vh', left: '7vw', width: '60vw', height: '19vw'}"></div>
      <!-- 用力生活 -->
      <img class="home-text03-1" src="../assets/home/text/每一次的.svg" alt="每一次的" />
      <img class="home-text03-2" src="../assets/home/text/用力生活.svg" alt="用力生活" />
      <img class="home-text03-3" src="../assets/home/text/用力生活框.svg" alt="用力生活框1" :style="{opacity: 1, top: '250vh'}" />
      <img class="home-text03-4" src="../assets/home/text/用力生活框.svg" alt="用力生活框2" :style="{opacity: 0.6, top: '255vh'}" />
      <img class="home-text03-5" src="../assets/home/text/用力生活框.svg" alt="用力生活框3" :style="{opacity: 0.3, top: '260vh'}" />
      <!-- 造就了型態的轉變 -->
      <img class="home-pink-circle" src="../assets/home/text-white/pink-circle.svg" />
      <img class="home-text04 home-text04-1" src="../assets/home/text-white/造.svg" alt="造" :style="{top: '290vh', left: '19vw'}"/>
      <img class="home-text04 home-text04-2" src="../assets/home/text-white/就.svg" alt="就" :style="{top: '293vh', left: '27vw'}"/>
      <img class="home-text04 home-text04-3" src="../assets/home/text-white/了.svg" alt="了" :style="{top: '296vh', left: '35vw'}"/>
      <img class="home-text04 home-text04-4" src="../assets/home/text-white/型.svg" alt="型" :style="{top: '299vh', left: '43vw'}"/>
      <img class="home-text04 home-text04-5" src="../assets/home/text-white/態.svg" alt="態" :style="{top: '302vh', left: '51vw'}"/>
      <img class="home-text04 home-text04-6" src="../assets/home/text-white/的.svg" alt="的" :style="{top: '305vh', left: '59vw'}"/>
      <img class="home-text04 home-text04-7" src="../assets/home/text-white/轉.svg" alt="轉" :style="{top: '308vh', left: '67vw'}"/>
      <img class="home-text04 home-text04-8" src="../assets/home/text-white/變.svg" alt="變" :style="{top: '311vh', left: '75vw'}"/>
      <!-- 粉紅區域 執著執著 痴狂痴狂 -->
      <img class="pink-back" src="../assets/home/pink-back/pink-back.png" alt="粉紅背框" />
   </div>
  </div>
</template>

<script>
// @ is an alias to /src
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default {
  name: 'Home',
  data() {
    return {

    };
  },
  mounted() {
    console.log('%c拜託不要搞我們(●’ω`●）',"color:#FF1A83; font-size: 35px; background-color: #fff;")
    gsap.registerPlugin(ScrollTrigger)
    // 每一刻的 & 努力追求
    gsap.from('.home-text00',{
      scrollTrigger: {
        trigger: '.home-text00-1',
        scrub: true,
        start: 'top 70%',
        end: 'top 35%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      duration: 1,
    })
    // 大膽狂放文字
    gsap.to('.home-text01',{
      scrollTrigger: {
        trigger: '.home-blueback',
        scrub: true,
        start: 'top 60%',
        end: 'top 35%',
        toggleActions: 'play none none none',
      },
      scale: 1,
      duration: 1,
    })
    // 大膽狂放文字邊框
    gsap.to('.home-text01-outline',{
      scrollTrigger: {
        trigger: '.home-blueback',
        scrub: true,
        start: '100 50%',
        end: '+=200',
        toggleActions: 'play none none none',
      },
      opacity: 1,
      duration: 1,
    })
    // ==============================================================
    // 堆積了此刻的變態
    const timeLine0 = gsap.timeline({
      scrollTrigger: {
        trigger: '.home-text',
        start: 'top 50%',
        end: '+=300',
        toggleActions: 'play none complete reverse',
      }
    })
    timeLine0.to('.home-text02-1', {opacity: 1, duration: 0.3})
    timeLine0.to('.home-text02-2', {opacity: 1, duration: 0.3})
    timeLine0.to('.home-text02-3', {opacity: 1, duration: 0.3})
    timeLine0.to('.home-text02-4', {opacity: 1, duration: 0.3})
    timeLine0.to('.home-text02-5', {opacity: 1, duration: 0.3})
    timeLine0.to('.home-text02-6', {opacity: 1, duration: 0.3})
    timeLine0.to('.home-text02-7', {opacity: 1, duration: 0.3})
    timeLine0.to('.home-text02-8', {opacity: 1, duration: 0.3})
    // ==============================================================
    // 一圈圈的圓
    const timeLine1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.home-text02-7',
        start: 'top 60%',
        end: '+=300',
        toggleActions: 'play none complete reverse',
      }
    })
    timeLine1.to('.home-circle0', {opacity: 1, duration: 0.5})
    timeLine1.to('.home-circle1', {top: '200vh', left: '23vw', width: '40vw', height: '13vw', opacity: 1, duration: 0.5})
    timeLine1.to('.home-circle2', {top: '182vh', left: '15vw', width: '50vw', height: '16vw', opacity: 1, duration: 0.5})
    timeLine1.to('.home-circle3', {top: '157vh', left: '7vw', width: '60vw', height: '19vw', opacity: 1, duration: 0.5})
    timeLine1.to('.home-circle4', {top: '135vh', left: '-5vw', width: '75vw', height: '22vw', opacity: 1, duration: 0.5})
    // ==============================================================
    // 用力生活
    gsap.from('.home-text03-3',{
      scrollTrigger: {
        trigger: '.home-text03-2',
        scrub: true,
        start: 'top 50%',
        end: '+=100',
        toggleActions: 'play none none none',
      },
      top: '245vh',
      opacity: 0,
      duration: 1,
    })
    gsap.from('.home-text03-4',{
      scrollTrigger: {
        trigger: '.home-text03-2',
        scrub: true,
        start: 'center 50%',
        end: '+=100',
        toggleActions: 'play none none none',
      },
      top: '245vh',
      opacity: 0,
      duration: 1,
    })
    gsap.from('.home-text03-5',{
      scrollTrigger: {
        trigger: '.home-text03-2',
        scrub: true,
        start: 'bottom 50%',
        end: '+=100',
        toggleActions: 'play none none none',
      },
      top: '240vh',
      opacity: 0,
      duration: 1,
    })
    // ==============================================================
    // 造就了形態的轉變
    const timeLine2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.home-text04-1',
        markers: true,
        start: 'top 50%',
        end: '+=200',
        toggleActions: 'play none complete reverse',
      }
    })
    timeLine2.from('.home-text04-1',{top: '288vh', opacity: 0, duration: 0.15})
    timeLine2.from('.home-text04-2',{top: '291vh', opacity: 0, duration: 0.15})
    timeLine2.from('.home-text04-3',{top: '294vh', opacity: 0, duration: 0.15})
    timeLine2.from('.home-text04-4',{top: '297vh', opacity: 0, duration: 0.15, delay: 0.3})
    timeLine2.from('.home-text04-5',{top: '300vh', opacity: 0, duration: 0.15})
    timeLine2.from('.home-text04-6',{top: '303vh', opacity: 0, duration: 0.15})
    timeLine2.from('.home-text04-7',{top: '306vh', opacity: 0, duration: 0.15, delay: 0.3})
    timeLine2.from('.home-text04-8',{top: '309vh', opacity: 0, duration: 0.15})
  },
  methods: {

  }
}
</script>

<style>
@import url('../scss/home/home.css');

</style>

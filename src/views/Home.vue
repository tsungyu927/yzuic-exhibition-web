<template>
  <div class="con">
    <HomeIntro v-if="openIntro" v-on:handleCloseModal="handleCloseModal" />
    <div class="content">
      <div class="home-top">
        <img class="title-back" alt="home-top" src="../assets/home/home_top.png" />
        <img class="title-img1" alt="此" src="../assets/home/title/封面-此.png" />
        <img class="title-img2" alt="刻" src="../assets/home/title/封面-刻.png" />
        <img class="title-img3" alt="變" src="../assets/home/title/封面-變.png" />
        <img class="title-img4" alt="態" src="../assets/home/title/封面-態.png" />
      </div>
      <div class="home-container">
        <div class="home-con">
          <img class="home-text00 home-text00-1" src="../assets/home/大膽狂放/每一刻的.svg" />
          <img class="home-text00 home-text00-2" src="../assets/home/大膽狂放/努力追求.svg"/>
          <img class="home-blueback" src="../assets/home/blue-back.svg" />
          <img class="home-text01-outline" src="../assets/home/大膽狂放/狂放border.svg" />
          <img class="home-text01" src="../assets/home/大膽狂放/大膽狂放.svg" alt="大膽狂放" />
        </div>
        <div class="home-con">
          <!-- 堆積了此刻的變態border -->
          <img class="home-text home-text02-border1" v-lazy="require('../assets/home/堆積了此刻的變態/堆border.svg')" alt="堆" :style="{top: '20%', right: '8%', width: '13%', height: 'auto'}" />
          <img class="home-text home-text02-border2" v-lazy="require('../assets/home/堆積了此刻的變態/積border.svg')" alt="積" :style="{top: '32%', right: '18%', width: '13%', height: 'auto'}" />
          <img class="home-text home-text02-border3" v-lazy="require('../assets/home/堆積了此刻的變態/了border.svg')" alt="了" :style="{top: '38%', right: '25%', width: '11%', height: 'auto'}" />
          <img class="home-text home-text02-border4" v-lazy="require('../assets/home/堆積了此刻的變態/此border.svg')" alt="此" :style="{top: '47%', right: '34.5%', width: '11%', height: 'auto'}" />
          <img class="home-text home-text02-border5" v-lazy="require('../assets/home/堆積了此刻的變態/刻border.svg')" alt="刻" :style="{top: '56%', right: '43.5%', width: '11%', height: 'auto'}" />
          <img class="home-text home-text02-border6" v-lazy="require('../assets/home/堆積了此刻的變態/的border.svg')" alt="的" :style="{top: '64%', right: '51.5%', width: '11%', height: 'auto'}" />
          <img class="home-text home-text02-border7" v-lazy="require('../assets/home/堆積了此刻的變態/變border.svg')" alt="變" :style="{top: '71%', right: '61%', width: '14%', height: 'auto'}" />
          <img class="home-text home-text02-border8" v-lazy="require('../assets/home/堆積了此刻的變態/態border.svg')" alt="態" :style="{top: '84.5%', right: '70%', width: '14%', height: 'auto'}" />
          <!-- 堆積了此刻的變態 -->
          <img class="home-text home-text02-1" v-lazy="require('../assets/home/堆積了此刻的變態/堆.svg')" alt="堆" :style="{top: '20%', right: '10%', width: '11%', height: 'auto'}" />
          <img class="home-text home-text02-2" v-lazy="require('../assets/home/堆積了此刻的變態/積.svg')" alt="積" :style="{top: '32%', right: '19%', width: '11%', height: 'auto'}" />
          <img class="home-text home-text02-3" v-lazy="require('../assets/home/堆積了此刻的變態/了.svg')" alt="了" :style="{top: '40%', right: '27%', width: '8%', height: 'auto'}" />
          <img class="home-text home-text02-4" v-lazy="require('../assets/home/堆積了此刻的變態/此.svg')" alt="此" :style="{top: '50%', right: '37%', width: '7%', height: 'auto'}" />
          <img class="home-text home-text02-5" v-lazy="require('../assets/home/堆積了此刻的變態/刻.svg')" alt="刻" :style="{top: '59%', right: '46%', width: '7%', height: 'auto'}" />
          <img class="home-text home-text02-6" v-lazy="require('../assets/home/堆積了此刻的變態/的.svg')" alt="的" :style="{top: '67%', right: '54%', width: '7%', height: 'auto'}" />
          <img class="home-text home-text02-7" v-lazy="require('../assets/home/堆積了此刻的變態/變.svg')" alt="變" :style="{top: '73%', right: '63%', width: '11%', height: 'auto'}" />
          <img class="home-text home-text02-8" v-lazy="require('../assets/home/堆積了此刻的變態/態.svg')" alt="態" :style="{top: '86%', right: '72%', width: '11%', height: 'auto'}" />
          <!-- 一圈一圈的圓 -->
          <div class="home-circle home-circle0"></div>
          <div class="home-circle home-circle1"></div>
          <div class="home-circle home-circle2" :style="{top: '85%', left: '23%', width: '40%', height: '20%'}"></div>
          <div class="home-circle home-circle3" :style="{top: '70%', left: '16%', width: '50%', height: '25%'}"></div>
          <div class="home-circle home-circle4" :style="{top: '53%', left: '8%', width: '60%', height: '30%'}"></div>
        </div>
        <div class="home-con">
          <!-- 用力生活 -->
          <img class="home-text03-1" v-lazy="require('../assets/home/堆積了此刻的變態/每一次的.svg')" alt="每一次的" />
          <img class="home-text03-2" v-lazy="require('../assets/home/堆積了此刻的變態/用力生活.svg')" alt="用力生活" />
          <img class="home-text03-3" v-lazy="require('../assets/home/堆積了此刻的變態/用力生活框.svg')" alt="用力生活框1" :style="{opacity: 1, top: '50%'}" />
          <img class="home-text03-4" v-lazy="require('../assets/home/堆積了此刻的變態/用力生活框.svg')" alt="用力生活框2" :style="{opacity: 0.6, top: '55%'}" />
          <img class="home-text03-5" v-lazy="require('../assets/home/堆積了此刻的變態/用力生活框.svg')" alt="用力生活框3" :style="{opacity: 0.3, top: '60%'}" />
        </div>
        <div class="home-con">
          <!-- 造就了型態的轉變 -->
          <img class="home-pink-circle" v-lazy="require('../assets/home/造就了型態的轉變/pink-circle.svg')" />
          <img class="home-text04 home-text04-1" v-lazy="require('../assets/home/造就了型態的轉變/造.svg')" alt="造" :style="{top: '-10%', left: '19%'}"/>
          <img class="home-text04 home-text04-2" v-lazy="require('../assets/home/造就了型態的轉變/就.svg')" alt="就" :style="{top: '-7%', left: '27%'}"/>
          <img class="home-text04 home-text04-3" v-lazy="require('../assets/home/造就了型態的轉變/了.svg')" alt="了" :style="{top: '-4%', left: '35%'}"/>
          <img class="home-text04 home-text04-4" v-lazy="require('../assets/home/造就了型態的轉變/型.svg')" alt="型" :style="{top: '-1%', left: '43%'}"/>
          <img class="home-text04 home-text04-5" v-lazy="require('../assets/home/造就了型態的轉變/態.svg')" alt="態" :style="{top: '2%', left: '51%'}"/>
          <img class="home-text04 home-text04-6" v-lazy="require('../assets/home/造就了型態的轉變/的.svg')" alt="的" :style="{top: '5%', left: '59%'}"/>
          <img class="home-text04 home-text04-7" v-lazy="require('../assets/home/造就了型態的轉變/轉.svg')" alt="轉" :style="{top: '8%', left: '67%'}"/>
          <img class="home-text04 home-text04-8" v-lazy="require('../assets/home/造就了型態的轉變/變.svg')" alt="變" :style="{top: '11%', left: '75%'}"/>
          <!-- 意念堅持 -->
          <img class="qq-line" v-lazy="require('../assets/home/意念堅持/QQ線.svg')" alt="QQ線"/>
          <img class="home-text05" v-lazy="require('../assets/home/意念堅持/意念堅持.svg')" alt="意念堅持" />
        </div>
        <div class="home-con">
          <!-- 粉紅區域 執著執著 痴狂痴狂 -->
          <img class="pink-back" v-lazy="require('../assets/home/pink-back1/pink-back.png')" alt="粉紅背框" />
          <img class="home-text06" v-lazy="require('../assets/home/pink-back1/執著top.svg')" alt="執著back" :style="{opacity: 0.15}" />
          <img class="home-text06 home-text06-top" v-lazy="require('../assets/home/pink-back1/執著back.svg')" alt="執著top" :style="{top: '18%', left: '14%', width: '45%'}" />
          <img class="home-text07-border" v-lazy="require('../assets/home/pink-back1/痴狂border.png')" alt="痴狂border" />
          <img class="home-text07" v-lazy="require('../assets/home/pink-back1/痴狂.png')" alt="痴狂" />
          <div class="home-text07-line1" />
          <div class="home-text07-line2" />
          <div class="home-text07-line3" />
        </div>
        <div class="home-con">
          <!-- 無所畏懼 ＆ QQ線 -->
          <img class="home-text08 home-text08-border" v-lazy="require('../assets/home/無所畏懼/無所畏懼border.svg')" alt="無所畏懼border" />
          <img class="home-text08" v-lazy="require('../assets/home/無所畏懼/無所畏懼.svg')" alt="無所畏懼" />
          <img class="qq-line-2" v-lazy="require('../assets/home/無所畏懼/QQ線2.png')" alt="QQ線2" />
          <img class="home-text09" v-lazy="require('../assets/home/無所畏懼/此刻就是.svg')" alt="此刻就是" />
          <img class="home-text10" v-lazy="require('../assets/home/無所畏懼/變態線框.svg')" alt="變態線框" />
          <img class="home-text10-1" v-lazy="require('../assets/home/堆積了此刻的變態/變border.svg')" />
          <img class="home-text10-2" v-lazy="require('../assets/home/堆積了此刻的變態/態border.svg')" />
        </div>
        <div class="home-con"></div>
        <div class="home-con">
          <!-- 海報的地方 -->
          <img class="pink-back1" v-lazy="require('../assets/home/海報/pink-back2.png')" alt="pink-back2"/>
          <img class="pink-poster pink-poster-back" v-lazy="require('../assets/home/海報/poster.png')" alt="poster" :style="{opacity: 0.5}" :class="shakePos ? 'shake-poster': ''" />
          <img class="pink-poster" v-lazy="require('../assets/home/海報/poster.png')" alt="poster" @click="handleOpenModal" @mouseenter="shakePos = true" @mouseout="shakePos = false" :class="shakePos ? 'shake-poster': ''" />
        </div>
        <div class="home-con" :style="{height: '59.4vh'}"></div>
        <!-- 很彩的背景 -->
        <img class="color-back" v-lazy="require('../assets/home/colorback.png')" alt="color back" />
        <div class="home-con">
          <!-- 策展資訊 -->
          <img class="home-text11" v-lazy="require('../assets/home/策展資訊/策展資訊.svg')" alt="策展資訊" />
          <img class="home-text11-date1" v-lazy="require('../assets/home/策展資訊/514五.svg')" alt="5/14" />
          <img class="home-text11-date2" v-lazy="require('../assets/home/策展資訊/日期中間.svg')" alt="~" />
          <img class="home-text11-date3" v-lazy="require('../assets/home/策展資訊/517一.svg')" alt="5/17" />
          <img class="home-text11-place1" v-lazy="require('../assets/home/策展資訊/松山文創園區.svg')" alt="松山文創園區" />
          <img class="home-text11-place2" v-lazy="require('../assets/home/策展資訊/三號.png')" alt="三號" />
          <img class="home-text11-place3" v-lazy="require('../assets/home/策展資訊/倉庫.png')" alt="倉庫" />
        </div>
        <div class="home-con">
          <!-- 交通方式 -->
          <img class="home-text12" v-lazy="require('../assets/home/交通方式/交通方式.svg')" alt="交通方式" />
          <img class="home-map1" v-lazy="require('../assets/home/交通方式/地圖一.svg')" alt="園區地圖" />
        </div>
        <div class="home-con">
          <img class="home-map2" v-lazy="require('../assets/home/交通方式/地圖二.svg')" alt="展區平面圖" />
        </div>
        <div class="home-con">
          <!-- 粉紅背景2 -->
          <img class="pink-back2" v-lazy="require('../assets/home/粉紅背景2/粉紅背景2.png')" alt="粉紅背景2" />
          <img class="pink-back-back" v-lazy="require('../assets/home/粉紅背景2/後方圖層.png')" alt="後方圖層" />
          <div class="home-light">
            <img class="home-light-img" v-lazy="require('../assets/home/粉紅背景2/亮光.png')" alt="light1" />
          </div>
          <img class="home-text13-1" v-lazy="require('../assets/home/粉紅背景2/衝擊.svg')" alt="衝擊" />
          <img class="home-text13-2" v-lazy="require('../assets/home/粉紅背景2/夢想框架.svg')" alt="夢想框架" />
          <img class="home-text13-3" v-lazy="require('../assets/home/粉紅背景2/拒絕自我設限.svg')" alt="拒絕自我設限" />
          <img class="home-text13-4" v-lazy="require('../assets/home/粉紅背景2/堅守初心.svg')" alt="堅守初心" />
          <img class="home-text13-5" v-lazy="require('../assets/home/粉紅背景2/盈眶.svg')" alt="盈眶" />
          <img class="home-text13-6" v-lazy="require('../assets/home/粉紅背景2/而出.svg')" alt="而出" />
        </div>
        <div class="home-con">
          <img class="home-text13-7" v-lazy="require('../assets/home/粉紅背景2/成就變態.svg')" alt="成就變態" />
        </div>
        <div class="home-con">
          <!-- 注意事項 -->
          <img class="home-text14-title" v-lazy="require('../assets/home/注意事項/注意事項.svg')" />
          <img class="home-text14 home-text14-1" v-lazy="require('../assets/home/注意事項/注意事項1.png')" :style="{top: '40%'}" />
          <img class="home-text14 home-text14-2" v-lazy="require('../assets/home/注意事項/注意事項2.png')" :style="{top: '55%'}" />
          <img class="home-text14 home-text14-3" v-lazy="require('../assets/home/注意事項/注意事項3.png')" :style="{top: '70%'}" />
          <img class="home-text14 home-text14-4" v-lazy="require('../assets/home/注意事項/注意事項4.png')" :style="{top: '80%'}" />
          <img class="home-text14 home-text14-5" v-lazy="require('../assets/home/注意事項/注意事項5.png')" :style="{top: '102%'}" />
        </div>
        <div class="home-con">
          <!-- 亂亂的 -->
          <img class="home-text15-1" v-lazy="require('../assets/home/亂亂的/執著藍.svg')" alt="執著藍" />
          <img class="home-text15-2" v-lazy="require('../assets/home/亂亂的/無所畏懼紅.svg')" alt="無所畏懼紅" />
        </div>
        <div class="home-con">
          <!-- 亂亂的 -->
          <img class="home-text15-3" v-lazy="require('../assets/home/亂亂的/癡狂紅.svg')" alt="癡狂紅" />
          <img class="home-text15-4" v-lazy="require('../assets/home/亂亂的/執著粉.svg')" alt="執著粉" />
          <img class="home-text15-5" v-lazy="require('../assets/home/亂亂的/癡狂藍.svg')" alt="癡狂藍" />
          <img class="home-text15-6" v-lazy="require('../assets/home/亂亂的/無所畏懼紫.svg')" alt="無所畏懼紫" />
          <img class="home-text15-9 home-text15-right1" v-lazy="require('../assets/home/亂亂的/懼.svg')" alt="懼" :style="{top: '25%'}" />
          <img class="home-text15-9 home-text15-right2" v-lazy="require('../assets/home/亂亂的/畏.svg')" alt="畏" :style="{top: '75%'}" />
        </div>
        <div class="home-con">
          <!-- 亂亂的 -->
          <img class="home-text15-7" v-lazy="require('../assets/home/亂亂的/癡狂紅.svg')" alt="癡狂紅" />
          <img class="home-text15-8" v-lazy="require('../assets/home/亂亂的/執著紅.svg')" alt="執著紅" />
          <img class="home-text15-9 home-text15-right3" v-lazy="require('../assets/home/亂亂的/所.svg')" alt="所" :style="{top: '25%'}" />
          <img class="home-text15-9 home-text15-right4" v-lazy="require('../assets/home/亂亂的/無.svg')" alt="無" :style="{top: '75%'}" />
        </div>
        <div class="home-con"></div>
        <div class="home-con"></div>
        <div class="home-con">
          <!-- 結語 -->
          <img class="home-text16-1" v-lazy="require('../assets/home/結語/此刻.svg')" alt="此刻我們都在變態成為" />
          <img class="home-text16-2" v-lazy="require('../assets/home/結語/變態_1.svg')" alt="變態透" />
          <img class="home-text16-3" v-lazy="require('../assets/home/結語/變態_1.svg')" alt="變態" />
          <img class="home-text16-4" v-lazy="require('../assets/home/結語/一種.svg')" alt="一種" />
          <img class="home-text16-5" v-lazy="require('../assets/home/結語/執著瘋狂於.svg')" alt="執著瘋狂於" />
          <img class="home-text16-6" v-lazy="require('../assets/home/結語/所愛之物.svg')" alt="所愛之物" />
          <img class="home-text16-7" v-lazy="require('../assets/home/結語/的變態.svg')" alt="的變態" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /v-lazy
import HomeIntro from '../modal/HomeIntro';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default {
  name: 'Home',
  data() {
      return {
        shakePos: false,
        openIntro: false
      }
    },
  components: {
    HomeIntro,
  },
  mounted() {
    console.log('%c拜託不要搞我們(●’ω`●）',"color:#FF1A83; font-size: 35px; background-color: #fff;")
    gsap.registerPlugin(ScrollTrigger)
    const titleSeq = gsap.timeline({
      scrollTrigger: {
        trigger: '.title-back',
        start: 'top 50%',
        end: 'bottom 50%',
        markers: true,
        toggleActions: 'play reverse play none'
      }
    })
    titleSeq.from('.title-img1',{opacity: 0, duration: 0.5})
    titleSeq.from('.title-img2',{opacity: 0, duration: 0.3})
    titleSeq.from('.title-img3',{opacity: 0, duration: 0.5, delay: 0.5})
    titleSeq.from('.title-img4',{opacity: 0, duration: 0.3})
    // 每一刻的 & 努力追求
    gsap.from('.home-text00', {
      scrollTrigger: {
        trigger: '.home-text00-1',
        scrub: true,
        start: 'top 70%',
        end: 'top 35%',
      },
      opacity: 0,
    });
    // ==============================================================
    // 大膽狂放文字
    gsap.to('.home-text01', {
      scrollTrigger: {
        trigger: '.home-blueback',
        scrub: true,
        start: 'top 60%',
        end: 'top 35%',
      },
      scale: 1,
      duration: 1,
    });
    // 大膽狂放文字邊框
    gsap.to('.home-text01-outline', {
      scrollTrigger: {
        trigger: '.home-blueback',
        scrub: true,
        start: '100 50%',
        end: '+=200',
      },
      opacity: 1,
      duration: 1,
    });
    // ==============================================================
    // 堆積了此刻的變態
    var shakeTween = function(item, repeatCount, top, right) {
      // var max = 1
      // var min = -1
      gsap.to(item, {
        repeat: repeatCount - 1,
        right: `${Math.floor(right + Math.random() + 1)}%`,
        duration: 0.1,
      });
      gsap.to(item, { top: `${top}%`, right: `${right}%` });
    };

    const timeLine0 = gsap.timeline({
      scrollTrigger: {
        trigger: '.home-text',
        start: 'top 50%',
        end: '+=300',
        toggleActions: 'play none complete reverse',
      },
    });

    timeLine0.to(['.home-text02-1', '.home-text02-border1'], {
      opacity: 1,
      duration: 0.3,
      onComplete: shakeTween,
      onCompleteParams: ['.home-text02-border1', 10, 20, 8],
    });
    timeLine0.to(['.home-text02-2', '.home-text02-border2'], {
      opacity: 1,
      duration: 0.3,
      onComplete: shakeTween,
      onCompleteParams: ['.home-text02-border2', 10, 32, 18],
    });
    timeLine0.to(['.home-text02-3', '.home-text02-border3'], {
      opacity: 1,
      duration: 0.3,
      onComplete: shakeTween,
      onCompleteParams: ['.home-text02-border3', 10, 38, 25],
    });
    timeLine0.to(['.home-text02-4', '.home-text02-border4'], {
      opacity: 1,
      duration: 0.3,
      onComplete: shakeTween,
      onCompleteParams: ['.home-text02-border4', 10, 47, 34.5],
    });
    timeLine0.to(['.home-text02-5', '.home-text02-border5'], {
      opacity: 1,
      duration: 0.3,
      onComplete: shakeTween,
      onCompleteParams: ['.home-text02-border5', 10, 56, 43.5],
    });
    timeLine0.to(['.home-text02-6', '.home-text02-border6'], {
      opacity: 1,
      duration: 0.3,
      onComplete: shakeTween,
      onCompleteParams: ['.home-text02-border6', 10, 64, 51.5],
    });
    timeLine0.to(['.home-text02-7', '.home-text02-border7'], {
      opacity: 1,
      duration: 0.3,
      onComplete: shakeTween,
      onCompleteParams: ['.home-text02-border7', 10, 71, 61],
    });
    timeLine0.to(['.home-text02-8', '.home-text02-border8'], {
      opacity: 1,
      duration: 0.3,
      onComplete: shakeTween,
      onCompleteParams: ['.home-text02-border8', 10, 84.5, 70],
    });
    // ==============================================================
    // 一圈圈的圓
    const timeLine1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.home-text02-1',
        start: 'top 20%',
        end: '+=300',
        toggleActions: 'play none complete reverse',
      },
    });
    timeLine1.to('.home-circle0', { opacity: 1, duration: 0.5 });
    timeLine1.to('.home-circle1', {
      top: '85%',
      left: '23%',
      width: '40%',
      height: '20%',
      opacity: 1,
      duration: 0.5,
    });
    timeLine1.to('.home-circle2', {
      top: '70%',
      left: '16%',
      width: '50%',
      height: '25%',
      opacity: 1,
      duration: 0.5,
    });
    timeLine1.to('.home-circle3', {
      top: '53%',
      left: '8%',
      width: '60%',
      height: '30%',
      opacity: 1,
      duration: 0.5,
    });
    timeLine1.to('.home-circle4', {
      top: '35%',
      left: '0%',
      width: '70%',
      height: '35%',
      opacity: 1,
      duration: 0.5,
    });
    // ==============================================================
    // 用力生活
    gsap.from('.home-text03-3', {
      scrollTrigger: {
        trigger: '.home-text03-2',
        scrub: true,
        start: 'top 60%',
        end: '+=100',
      },
      top: '45%',
      opacity: 0,
      duration: 1,
    });
    gsap.from('.home-text03-4', {
      scrollTrigger: {
        trigger: '.home-text03-2',
        scrub: true,
        start: '30% 60%',
        end: '+=100',
      },
      top: '45%',
      opacity: 0,
      duration: 1,
    });
    gsap.from('.home-text03-5', {
      scrollTrigger: {
        trigger: '.home-text03-2',
        scrub: true,
        start: '60% 60%',
        end: '+=100',
      },
      top: '40%',
      opacity: 0,
      duration: 1,
    });
    // ==============================================================
    // 造就了形態的轉變
    const timeLine2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.home-text04-1',
        start: 'top 60%',
        end: '+=200',
        toggleActions: 'play none complete reverse',
      },
    });
    timeLine2.from('.home-text04-1', {
      top: '-12%',
      opacity: 0,
      duration: 0.15,
    });
    timeLine2.from('.home-text04-2', {
      top: '-9%',
      opacity: 0,
      duration: 0.15,
    });
    timeLine2.from('.home-text04-3', {
      top: '-6%',
      opacity: 0,
      duration: 0.15,
    });
    timeLine2.from('.home-text04-4', {
      top: '-3%',
      opacity: 0,
      duration: 0.15,
      delay: 0.3,
    });
    timeLine2.from('.home-text04-5', { top: '0%', opacity: 0, duration: 0.15 });
    timeLine2.from('.home-text04-6', { top: '3%', opacity: 0, duration: 0.15 });
    timeLine2.from('.home-text04-7', {
      top: '6%',
      opacity: 0,
      duration: 0.15,
      delay: 0.3,
    });
    timeLine2.from('.home-text04-8', { top: '9%', opacity: 0, duration: 0.15 });
    // ==============================================================
    // 意念堅持
    gsap.from('.home-text05', {
      scrollTrigger: {
        trigger: '.home-text05',
        scrub: true,
        start: 'top 90%',
        end: 'bottom 70%',
      },
      opacity: 0,
    });
    // ==============================================================
    // 執著執著
    gsap.to('.home-text06-top', {
      scrollTrigger: {
        trigger: '.home-text06-top',
        start: 'top 50%',
        end: '+=150',
        toggleActions: 'play none complete reverse',
      },
      left: '7%',
      opacity: 0.9,
      duration: 0.5,
    });
    // ==============================================================
    // 痴狂
    const timeLineN1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.home-text07',
        start: 'top 85%',
        end: '+=150',
        toggleActions: 'play none complete reverse',
      },
    });
    timeLineN1.from('.home-text07-border', {
      transform: 'scale(0.5)',
      duration: 0.5,
    });
    timeLineN1.from(
      ['.home-text07-line1', '.home-text07-line2', '.home-text07-line3'],
      { transform: 'scale(0)', duration: 1 }
    );
    // ==============================================================
    // 無所畏懼 變態
    gsap.to(['.home-text10-1', '.home-text10-2'], {
      scrollTrigger: {
        trigger: '.home-text10-1',
        start: 'top 50%',
        end: '+=150',
        toggleActions: 'play none complete reverse',
      },
      yoyo: true,
      repeat: 15,
      rotateZ: `${Math.floor(10 + Math.random() + 1)}`,
      duration: 0.1,
      onComplete: () => {
        gsap.to(['.home-text10-1', '.home-text10-2'], { rotateZ: 0 });
      },
    });
    // ==============================================================
    // 策展資訊
    gsap.from('.home-text11', {
      scrollTrigger: {
        trigger: '.home-text11',
        scrub: true,
        start: 'top 50%',
        end: '+=80 50%',
      },
      opacity: 0,
    });
    const timeLine3 = gsap.timeline({
      scrollTrigger: {
        trigger: '.home-text11-date1',
        start: 'top 50%',
        end: '+=300 50%',
        toggleActions: 'play none none reverse',
      },
    });
    timeLine3.from('.home-text11-date1', {
      left: '30%',
      opacity: 0,
      duration: 0.3,
    });
    timeLine3.from('.home-text11-date2', { opacity: 0, duration: 0.3 });
    timeLine3.from('.home-text11-date3', {
      left: '44%',
      opacity: 0,
      duration: 0.3,
    });
    timeLine3.from('.home-text11-place1', { opacity: 0, duration: 0.3 });
    timeLine3.from('.home-text11-place2', { opacity: 0, duration: 0.3 });
    timeLine3.from('.home-text11-place3', {
      opacity: 0,
      rotateY: 180,
      duration: 0.5,
    });
    // ==============================================================
    // 交通方式
    gsap.from('.home-text12', {
      scrollTrigger: {
        trigger: '.home-text12',
        scrub: true,
        start: 'top 50%',
        end: '+=80 50%',
      },
      opacity: 0,
    });
    gsap.from('.home-map1', {
      scrollTrigger: {
        trigger: '.home-map1',
        start: '20% 50%',
        end: '45% 50%',
        toggleActions: 'play none none reverse',
      },
      transform: 'scale(1.2)',
      opacity: 0,
      duration: 0.7,
    });
    gsap.from('.home-map2', {
      scrollTrigger: {
        trigger: '.home-map2',
        start: 'top 60%',
        end: 'bottom 50%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      left: '100%',
      ease: 'bounce',
      duration: 0.8,
    });
    // ==============================================================
    // 粉紅背景2
    const timeLine4 = gsap.timeline({
      scrollTrigger: {
        trigger: '.pink-back2',
        start: 'top 70%',
        end: '50% 50%',
        toggleActions: 'play none none reset',
      },
    });
    timeLine4.from('.pink-back2', { left: '-100%', duration: 0.5 });
    timeLine4.from('.pink-back-back', { opacity: 0, duration: 0.3 });
    timeLine4.from('.home-text13-1', {
      transform: 'scale(0)',
      opacity: 0,
      duration: 0.3,
    });
    timeLine4.from('.home-light-img', {
      transform: 'scale(5)',
      opacity: 0,
      duration: 0.3,
    });
    timeLine4.from('.home-text13-2', { opacity: 0, duration: 0.3 });
    timeLine4.from('.home-text13-3', { right: '-50%', duration: 0.3 });
    timeLine4.from('.home-text13-4', { opacity: 0, duration: 0.3 });
    timeLine4.from(['.home-text13-5', '.home-text13-6'], {
      opacity: 0,
      duration: 0.3,
    });
    timeLine4.to('.home-text13-6', { top: '100%', duration: 0.3 });
    timeLine4.to(['.home-text13-5', '.home-text13-6'], {
      transform: 'rotate(0deg)',
      duration: 0.3,
      delay: 0.3,
    });
    timeLine4.from('.home-text13-7', { scale: 0, opacity: 0, duration: 0.5 });
    // ==============================================================
    // 注意事項
    gsap.from('.home-text14-title', {
      scrollTrigger: {
        trigger: '.home-text14-title',
        scrub: true,
        start: 'top 50%',
        end: '+=80 50%',
      },
      opacity: 0,
    });
    const timeLine5 = gsap.timeline({
      scrollTrigger: {
        trigger: '.home-text14-1',
        start: 'top 40%',
        end: '+=400 50%',
        toggleActions: 'play none none reset',
      },
    });
    timeLine5.from('.home-text14-1', {
      left: '40%',
      opacity: 0,
      duration: 0.3,
    });
    timeLine5.from('.home-text14-2', {
      left: '40%',
      opacity: 0,
      duration: 0.3,
    });
    timeLine5.from('.home-text14-3', {
      left: '40%',
      opacity: 0,
      duration: 0.3,
    });
    timeLine5.from('.home-text14-4', {
      left: '40%',
      opacity: 0,
      duration: 0.3,
    });
    timeLine5.from('.home-text14-5', {
      left: '40%',
      opacity: 0,
      duration: 0.3,
    });
    // ==============================================================
    // 亂亂的
    gsap.from('.home-text15-1', {
      scrollTrigger: {
        trigger: '.home-text15-1',
        start: '60% 60%',
        end: 'bottom 50%',
        toggleActions: 'play none none reset'
      },
      rotateZ: 90,
      top: '40%',
      right: '-10%',
      duration: 1,
    })
    gsap.from('.home-text15-2',{
      scrollTrigger: {
        trigger: '.home-text15-2',
        start: 'top 80%',
        end: '50% 50%',
        toggleActions: 'play none none reverse'
      },
      left: '-90%',
      opacity: 0,
      duration: 1
    })
    gsap.from('.home-text15-3',{
      scrollTrigger: {
        trigger: '.home-text15-3',
        start: 'top 80%',
        end: '50% 70%',
        toggleActions: 'play none none reverse'
      },
      right: '-70%',
      opacity: 0,
      duration: 1,
    })
    gsap.from('.home-text15-4',{
      scrollTrigger: {
        trigger: '.home-text15-4',
        start: 'top 70%',
        end: 'bottom 70%',
        toggleActions: 'play none none reverse'
      },
      transform: 'rotateY(180deg)',
      opacity: 0,
      duration: 1,
    })
    gsap.from('.home-text15-5',{
      scrollTrigger: {
        trigger: '.home-text15-5',
        start: 'top 50%',
        end: '+=100 50%',
        toggleActions: 'play none none reverse'
      },
      top: '50%',
      left: '46%',
      opacity: 0,
      duration: 1
    })
    gsap.from('.home-text15-6',{
      scrollTrigger: {
        trigger: '.home-text15-6',
        start: 'top 70%',
        end: 'bottom 70%',
        toggleActions: 'play none none reverse'
      },
      left: '-90%',
      opacity: 0,
      duration: 1
    })
    gsap.from('.home-text15-7',{
      scrollTrigger: {
        trigger: '.home-text15-7',
        start: 'top 70%',
        end: '50% 50%',
        toggleActions: 'play none none reverse'
      },
      left: '-13%',
      opacity: 0,
      duration: 1
    })
    gsap.from('.home-text15-8',{
      scrollTrigger: {
        trigger: '.home-text15-8',
        start: 'top 90%',
        end: 'bottom 40%',
        toggleActions: 'play none none reverse'
      },
      scale: 0,
      opacity: 0,
      duration: 1
    })
    function Text15FromRight(trigger){
      gsap.from(trigger,{
        scrollTrigger: {
          trigger: trigger,
          start: 'top 60%',
          end: '50% 50%',
          toggleActions: 'play none none none',
        },
        right: '-10vw',
        duration: 0.3,
      });
    }
    Text15FromRight('.home-text15-right1');
    Text15FromRight('.home-text15-right2');
    Text15FromRight('.home-text15-right3');
    Text15FromRight('.home-text15-right4');
    // ==============================================================
    // 結語
    const timeLine6 = gsap.timeline({
      scrollTrigger: {
        trigger: '.home-text16-3',
        start: 'top 50%',
        end: 'bottom 50%',
        toggleActions: 'play none none none',
      },
    });
    timeLine6.from(['.home-text16-2', '.home-text16-3'], {
      scale: 0,
      opacity: 0,
      duration: 0.5,
    });
    timeLine6.from('.home-text16-6', { scale: 0, opacity: 0, duration: 0.5 });
    timeLine6.from('.home-text16-1', {
      left: '0%',
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
    });
    timeLine6.from('.home-text16-4', { left: '0%', opacity: 0, duration: 0.5 });
    timeLine6.from('.home-text16-5', { left: '0%', opacity: 0, duration: 0.5 });
    timeLine6.from('.home-text16-7', {
      left: '54%',
      opacity: 0,
      duration: 0.5,
    });
  },
  methods: {
    handleOpenModal: function(){
      // 停止滑動body
      document.querySelector('body').style.overflowY = 'hidden'
      this.openIntro = true
    },
    handleCloseModal: function(){
      // 可以滑動body
      document.querySelector('body').style.overflowY = 'scroll'
      this.openIntro = false
    }
  }
}
</script>

<style>
@import url('../scss/home/home.css');
</style>

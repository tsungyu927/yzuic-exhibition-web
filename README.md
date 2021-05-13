# 元智大學資訊傳播學系24th畢業展覽網站

![](https://github.com/tsungyu927/yzuic-exhibition-web/blob/master/src/assets/logo/horizontal-logo.png)

>## **Warning**
目前畢業專刊上的QR Code為轉跳[**連結**](https://exhibitionweb-45da9.web.app/)，之後將會轉跳到這個網站部屬的地方（目前將轉跳到粉專）

>## **預計完成的功能**

- [x] 動態更改左右fixed bar的顏色 ~~(透過Vuex)~~
- [x] 左右fixed bar蓋到中間內容
- [x] 目錄(**連結還沒加上**)
- [ ] 照片瀑布底部平整
- [x] ~~圖片壓小（不考慮webp）~~ **用lazyload代替**
- [x] 分類按鈕點擊放大動畫＆~~上一頁的縮小動畫~~
- [x] 策展團隊(**公關組的文字不見**)
- [x] 所有圖片更換
- [x] 展覽作品往上的按鈕（因為fullpage下滑鎖住了）
- [ ] 手機版右上角MenuBtn沒有效果

>## **使用的dependencies**
```
"bootstrap-vue": "^2.21.2",
"gsap": "^3.6.0",
"lodash": "^4.17.21",
"vue-fullpage.js": "^0.1.7",
"vue-lazyload": "^1.3.3",
"vue-masonry": "^0.12.0",
```

>## **How To Use**
#### Project setup
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

#### Compiles and minifies for production
```
npm run build
```

#### Lints and fixes files
```
npm run lint
```

const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);

//覆寫Webpack的設定
module.exports = {
  publicPath: process.env.VUE_APP_CONTEXT_PATH,
  outputDir: 'dist/' + process.env.VUE_APP_MODENAME,
  lintOnSave: true,
  //別名
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@img', resolve('src/assets/img'))
      .set('@scss', resolve('src/scss'))
      .set('@utilis', resolve('src/scss/utilis'))
      .set('@data', resolve('src/data'));
  },
  //拆分檔案(不要讓 boostrapVue 包在 js 裡)
  configureWebpack: (config) => {
    config.optimization = {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          // bootstrap: {
          //   name: 'bootstrap',
          //   test: /[\\/]node_modules[\\/]bootstrap[\\/]/,
          //   priority: 10
          // },
          bootstrapVue: {
            name: 'bootstrap-vue',
            test: /[\\/]node_modules[\\/]bootstrap-vue[\\/]/,
            priority: 10,
          },
        },
      },
    };
  },

  css: {
    // extract: {
    //   // filename: 'css/[name].css',
    //   chunkFilename: 'css/[name].css'
    // },
    sourceMap: IS_PROD,
    loaderOptions: {
      // 在打包之前，把 Variable 跟 mixin 加到其他 SCSS 檔之前
      scss: {
        additionalData: `
          @import "~@utilis/_variable.scss";
          @import "~@utilis/_mixin.scss";
        `,
      },
    },
  },
  // devServer: {
  //   port: 8080,
  //   proxy: {
  //     '/oto/cdm': {
  //       target: process.env.VUE_APP_API_URL,
  //       changOrigin: true
  //     }
  //   }
  // },
  productionSourceMap: false,
};

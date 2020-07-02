module.exports = {
  productionSourceMap: process.env.NODE_ENV == 'production' ? false : true,
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: './src/sw.js',
      swDest: 'service-worker.js',
    },
    name: 'covidnepal',
    short_name: "covidnepal",
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#000a22',
    themeColor: '#000a22',
    msTileColor: '#000a22',
    iconPaths: {
      msTileImage: 'img/icons/mstile-150x150.png',
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon.png',
      maskIcon: 'img/icons/safari-pinned-tab.svg',
    }
  }
};

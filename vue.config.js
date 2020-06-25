module.exports = {
  productionSourceMap: process.env.NODE_ENV == 'production' ? false : true,
  pwa: {
    themeColor: '#000a22',
    msTileColor: '#000a22',
    iconPaths: {
      msTileImage: 'img/icons/mstile-150x150.png'
    }
  }
};

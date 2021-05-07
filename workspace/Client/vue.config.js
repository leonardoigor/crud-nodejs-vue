module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    hot: true,
    liveReload: true,
    compress: true,
    disableHostCheck: true,
    watchOptions: {
      poll: true,
    },
    proxy: 'https://leonardoigor.github.io/',
    publicPath: '/'

  }
}

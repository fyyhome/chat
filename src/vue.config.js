module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://120.27.137.151:9976',
        ws: true,
        changeOrigin: true
      }
    }
  }
}

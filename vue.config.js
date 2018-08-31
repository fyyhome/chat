module.exports = {
  devServer: {
    proxy: {
      '/api': {
        // target: 'http://localhost:8000',
        target: 'http://120.27.137.151:9976',
        ws: true,
        changeOrigin: true
      }
    }
    // proxy: 'http://localhost:4000'
  }
}

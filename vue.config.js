module.exports = {
  devServer: {
    proxy: {
      '/user': {
        target: "http://localhost:5001",
      },
      '/character': {
        target: "http://localhost:5002"
      }
    }
  }
}

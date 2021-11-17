module.exports = {
  devServer: {
    proxy: {
      '/blog': {
        target: `http://127.0.0.1:8000/blog`,
        changeOrigin: true,
        pathRewrite: {
          '^/blog': ''
        }
      }
    }
  }
};

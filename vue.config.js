const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/_colors.scss";
          @import "@/assets/scss/_variables.scss";
          @import "@/assets/scss/fonts.scss";
        `
      }
    }
  }
})

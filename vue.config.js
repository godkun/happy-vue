const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {

  productionSourceMap: true,

  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('.'))
      .set('@src', resolve('src'))
      .set('@components', resolve('src/components'))
      .set('@assets', resolve('.src/assets'))
      .set('@design', resolve('.src/design/index.scss'))
  }
}

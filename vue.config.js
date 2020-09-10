const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    devServer: {
        overlay: {
            errors: false
        }
    },
    lintOnSave: false,
    configureWebpack:{
        devtool: 'source-map',
        resolve: {
            extensions: ['.js', '.vue'],
            alias: {
              '@': resolve('src')
            }
          }
    }
}

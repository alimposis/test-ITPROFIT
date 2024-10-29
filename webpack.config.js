const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry:{
    filename:path.resolve(__dirname,'src/index.js')
  },

  output:{
    path:path.resolve(__dirname,'dist'),
    filename: '[name][contenthash].js',
    clean:true
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
},
  devServer:{
    port:3000,
    compress:true,
    hot:true,
    static:{
      directory:path.join(__dirname,'dist')
    }
  },
  resolve: {
    alias: {
        '~': path.resolve(__dirname, 'src'),
        Lib: path.resolve(__dirname, '../../lib/node/src'),
        ROOT: path.resolve(__dirname, '../../')
    },
  },
  module:{
    rules:[
      {
        test: /\.scss$/,
        use: [
            'style-loader', 
            'css-loader', 
            'sass-loader' 
        ]
      }
    ]
  },
  plugins:[
    new htmlWebpackPlugin({
      title: 'Test',
      filename:'index.html',
      template:'src/index.html'
    })
  ]
}
const path = require('path');

module.exprots = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path:path.resolve(__dirname, 'dist')
  }
}
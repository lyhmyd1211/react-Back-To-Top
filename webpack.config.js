var path = require("path");

module.exports = {
  mode:'development',
  entry: path.join(__dirname, "example", "src", "index.jsx"),
  output: {
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        include: [path.join(__dirname, "example")]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }, {
        test: /\.(jpe?g|png|gif|svg|ico)/i,
        loader: 'file-loader?name=img/img_[hash:8].[ext]',
      }, {
        test: /\.(ttf|eot|svg|woff|woff2)/,
        loader: 'file-loader',
      }, {
        test: /\.(pdf)/,
        loader: 'file-loader',
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "example")
  }
};

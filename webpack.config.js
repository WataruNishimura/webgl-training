const Fiber = require('fibers');
const path = require('path');

module.exports = {
  entry: {
    app: path.join(__dirname, '/src/index.js'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'output.js',
  },
  module: {
    rules: [
      {
        test: /\.scss/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: ['autoprefixer'],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                fiber: Fiber,
              },
            },
          },
        ],
      },
      {
        test: /\.(glsl|cs|fs|vert|frag)$/,
        exclude: /node_modules/,
        use: ['raw-loader', 'glslify-loader'],
      },
    ],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, '/dist/'),
    host: 'localhost',
    port: 8080,
    hot: true,
  },
};

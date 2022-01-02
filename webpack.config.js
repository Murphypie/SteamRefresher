const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  // Webpack is reading index.tsx in client folder and compiling it into output object.
  entry: './client/index.tsx',
  // Compiled index.tsx is saved in the location specified output.
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
        },
      },
      {
        test: /\.tsx?$/,
        use: 
            {
                loader: 'ts-loader',
            },
        exclude: /node_modules/,
    },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Steam Refresher',
      template: './index.html',
      inject: 'body',
    }),
  ],
  devServer: {
    hot: true,
    static:{
        // Tell the server where to serve content from.
        directory: path.resolve(__dirname, './client/'),

    /*The bundled files will be available in the browser under this path. 
    publicPath says that any request made to '/' will be served the development version of our bundle via localhost:8080. publicPath should match where we have index.html
    */
        publicPath: '/build',
        watch:true
    },
    historyApiFallback: true,
    // Proxy says taht any request made to '/api' will be routed to our server on localhost:3000
    // proxy should match whatever is going to match your fetch request on your frontend.
    proxy: {
      '/': {
        target: 'http://localhost:3000/',
        secure: false,
      },
      '/login': {
        target: 'http://localhost:3000/login',
        secure: false,
      },
    },
  },
};
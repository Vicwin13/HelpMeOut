const path = require('path');

module.exports = {
  mode: 'production',
  entry: '/src/components/Popup.jsx', // Path to your JSX file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'popup'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
           {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/', // You can customize the output path
            },
          },
        ],
      },
    ],
  },
};

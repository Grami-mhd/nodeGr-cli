module.exports = () => {
  return `import { Configuration }       from 'webpack';
import * as nodeExternals      from 'webpack-node-externals';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';

const config: Configuration = {
  mode: 'development',
  entry: './bin/www.ts',
  output: {
    path: __dirname + '/dist/back',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
    plugins: [
      new TsconfigPathsPlugin({})
    ]
  },
  module: {
    rules: [
      {
        test: /\\.tsx?$/,
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.json'
        }
      }
    ]
  },
  target: 'node',
  externals: [nodeExternals()]
};

export default config;
`
}

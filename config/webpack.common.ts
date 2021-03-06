import * as path from 'path';
import * as webpack from 'webpack';

export const webpackCommon = {
  entry: {
    vendors: Object.keys(require(path.resolve('package.json')).dependencies),
    app: ['./src/client/index.tsx'],
  },

  output: {
    path: path.resolve(__dirname, '../dist'),
  },

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['app', 'vendors'],
      minChunks: Infinity,
    }),
    new webpack.EnvironmentPlugin(['NODE_ENV']),
  ],
  externals: [],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    should: 'empty',
    'sinon-restore': 'empty',
    child_process: 'empty',
  },
};

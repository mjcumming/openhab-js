const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './index.js',
  mode: 'production',
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          keep_classnames: true,
          keep_fnames: true
        }
      })
    ]
  },
  externals: [
    {
      '@runtime': {
        root: '@runtime',
        commonjs: '@runtime',
        commonjs2: '@runtime',
        amd: '@runtime'
      },
      '@runtime/cache': {
        root: '@runtime/cache',
        commonjs: '@runtime/cache',
        commonjs2: '@runtime/cache',
        amd: '@runtime/cache'
      },
      '@runtime/Defaults': {
        root: '@runtime/Defaults',
        commonjs: '@runtime/Defaults',
        commonjs2: '@runtime/Defaults',
        amd: '@runtime/Defaults'
      },
      '@runtime/provider': {
        root: '@runtime/provider',
        commonjs: '@runtime/provider',
        commonjs2: '@runtime/provider',
        amd: '@runtime/provider'
      },
      '@runtime/RuleSupport': {
        root: '@runtime/RuleSupport',
        commonjs: '@runtime/RuleSupport',
        commonjs2: '@runtime/RuleSupport',
        amd: '@runtime/RuleSupport'
      },
      '@runtime/osgi': {
        root: '@runtime/osgi',
        commonjs: '@runtime/osgi',
        commonjs2: '@runtime/osgi',
        amd: '@runtime/osgi'
      }
    }
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'openhab.js',
    library: {
      name: 'openhab',
      type: 'umd'
    },
    globalObject: 'this'
  }
};

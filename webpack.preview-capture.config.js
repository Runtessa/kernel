const path = require('node:path');
const fs = require('node:fs');
const webpack = require('webpack');

// Build the renderer as a same-origin Runtime asset, separate from the app bundle.
const libraryRoot = path.dirname(require.resolve('html-to-image/package.json'));
module.exports = {
  mode: 'production',
  entry: require.resolve('html-to-image'),
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'preview-capture-renderer.js',
    library: { name: 'RuntessaCapture', type: 'window' },
    clean: false,
  },
  plugins: [new webpack.BannerPlugin(fs.readFileSync(path.join(libraryRoot, 'LICENSE'), 'utf8'))],
};

const minify = require('@node-minify/core');
const gcc = require('@node-minify/google-closure-compiler');
const uglifyjs = require('@node-minify/uglify-js');

minify({
  compressor: uglifyjs,
  input: 'index.js',
  output: 'compressed.js',
  callback: function(err, min) {}
});

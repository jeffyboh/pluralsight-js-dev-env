// this file is not transpiled

// register babel
require('babel-register')();

// disable weboack features that mocha does not understand
require.extensions['.css'] = function() {};

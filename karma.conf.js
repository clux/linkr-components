// Karma configuration
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['browserify', 'polymer', 'tap'],
    files: [
      // need to watch for polymer.html, webcomponents.js and polymer deps
      {
        pattern: 'bower_components/**',
        // and serve them if requested in nested includes
        included: false, served: true, watched: true
      },

      // include main test files
      'tests/*.js',
    ],

    // run browserify on test files before including them to get require
    preprocessors: {
      'tests/*.js': [ 'browserify' ]
    },

    // use the karma-polymer module to link import polymer + component
    polymer: {
      platform: 'bower_components/webcomponentsjs/webcomponents-lite.js',
      src: [
        'bower_components/polymer/polymer.html',
        'linkr.html'
      ]
    },

    reporters: ['tap'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO, // config.LOG_DEBUG
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true
  });
};

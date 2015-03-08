// Karma configuration
// Generated on Sun Mar 08 2015 13:53:21 GMT+0000 (GMT)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['tap', 'browserify'],
    files: [
      'tests/*.js'
    ],
    preprocessors: {
      'tests/*.js': [ 'browserify' ]
    },
    reporters: ['tap', 'html'],
    htmlReporter: {
      outputDir: 'output/karma',
    },
    tapReporter: {
      outputFile: 'output/karma.tap'
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true
  });
};

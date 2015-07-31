/* global require, module */

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

module.exports = function() {
  const app = new EmberApp({
    'ember-cli-foundation-sass': {
      'modernizr': true,
      'fastclick': true,
      'foundationJs': 'all'
    },
    fingerprint: {
      enabled: false,
      exclude: ['img/logo-white.jpg']
    }
  });

  app.import(app.bowerDirectory + '/particles.js/particles.js');
  app.import(app.bowerDirectory + '/jquery-timeago/jquery.timeago.js');
  app.import(app.bowerDirectory + '/async/dist/async.min.js');

  // PhotoSwipe
  app.import(app.bowerDirectory + '/photoswipe/dist/photoswipe.min.js');
  app.import(app.bowerDirectory + '/photoswipe/dist/photoswipe-ui-default.min.js');
  app.import(app.bowerDirectory + '/photoswipe/dist/photoswipe.css');
  app.import(app.bowerDirectory + '/photoswipe/dist/default-skin/default-skin.css');
  app.import(app.bowerDirectory + '/photoswipe/dist/default-skin/default-skin.png', {
    destDir: 'assets'
  });

  // Metro
  //app.import(app.bowerDirectory + '/metro/build/css/metro.min.css');

  return app.toTree();
};

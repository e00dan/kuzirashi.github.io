/* jshint node:true */
/* global require, module */

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function() {
  const app = new EmberApp({
    'ember-cli-foundation-sass': {
      'modernizr': true,
      'fastclick': false,
      'foundationJs': false
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

  return app.toTree();
};

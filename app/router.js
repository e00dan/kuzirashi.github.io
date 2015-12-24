import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('apps', function() {
    this.route('view', { path: '/:app_slug' });
  });

  this.route('home', { path: '/' });
  this.route('contact');
  this.route('about', function() {
    this.route('general');
    this.route('experience', function() {
      this.route('view');
    });
  });

});

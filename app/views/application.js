import Ember from 'ember';

export default Ember.View.extend({
  initFoundation: Ember.on('didInsertElement', function() {
    this.$(document).foundation();
  })
});

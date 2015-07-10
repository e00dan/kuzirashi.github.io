import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    showVideo() {
      this.set('showVideo', true);
    }
  }
});

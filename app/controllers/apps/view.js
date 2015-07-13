import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    showVideo() {
      this.set('showVideo', true);
    },
    showImages() {
      this.get('psGallery').init();
    }
  }
});

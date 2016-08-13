import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const store = this.get('store');

    return new Ember.RSVP.Promise(resolve => {
      store.findAll('tag').then(() => {
        resolve(store.findAll('experience'));
      });
    });
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    this.store.findAll('app');
    this.store.findAll('tag');
    this.store.findAll('video');
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    this.store.findAll('tag');
    return this.store.findAll('experience');
  }
});

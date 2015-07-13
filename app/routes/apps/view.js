import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return new Promise((resolve) => {
      this.store.findAll('app').then(() => {
        resolve(this.store.findRecord('app', params.app_slug));
      });
    });
  },
  afterModel() {
    Ember.run.next(this, () => {
      this.render('background-gallery', {
        into: 'application',
        outlet: 'body-child'
      });
    });
  }
});

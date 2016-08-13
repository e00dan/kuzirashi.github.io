import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      tags: new Ember.RSVP.Promise((resolve) => {
        this.store.findAll('tag').then((tags) => {
          this.store.findAll('app').then(() => {
            let sorted = tags.toArray().sort((a, b) => {
              return (a.get('apps.length') < b.get('apps.length')) ? 1 : -1;
            });
            resolve(sorted);
          });
        });
      }),
      applications: new Ember.RSVP.Promise((resolve) => {
        this.store.findAll('app').then((apps) => {
          resolve(apps.toArray().sort((a, b) => {
            return (a.get('added') > b.get('added')) ? -1 : 1;
          }));
        });
      })
    });
  }
});

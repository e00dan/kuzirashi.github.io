import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      tags: new Ember.RSVP.Promise((resolve) => {
        this.store.findAll('tag').then((tags) => {
          this.store.findAll('app').then(() => { // (applications) =>
            let sorted = tags.toArray().sort((a, b) => {
              // console.log(typeof(a.get('applications.length')));
              // Ember.debug(`a[${a.get('name')}] vs b[${b.get('name')}] : ${a.get('applications.length')} > ${b.get('applications.length')}`);
              return (a.get('apps.length') < b.get('apps.length')) ? 1 : -1;
            });
            // console.log(sorted);
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

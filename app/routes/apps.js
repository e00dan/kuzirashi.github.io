import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      tags: new Promise((resolve) => {
        this.store.findAll('tag').then((tags) => {
          this.store.findAll('application').then((applications) => {
            let sorted = tags.toArray().sort((a, b) => {
              // console.log(typeof(a.get('applications.length')));
              Ember.debug(`a[${a.get('name')}] vs b[${b.get('name')}] : ${a.get('applications.length')} > ${b.get('applications.length')}`);
              return (a.get('applications.length') < b.get('applications.length')) ? 1 : -1;
            });
            console.log(sorted);
            resolve(sorted);
          });
        });
      }),
      applications: new Promise((resolve) => {
        this.store.findAll('application').then((apps) => {
          resolve(apps.toArray().sort((a, b) => {
            return (a.get('id') > b.get('id')) ? -1 : 1;
          }));
        });
      })
    });
  }
});

import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['searchName'],
  filteredApps: Ember.computed('searchName', function() {
    const applications = this.get('model.applications'),
        searchName = this.get('searchName');

    if (!searchName) {
      return applications;
    }

    return applications.filter((app) => {
      return app.get('id').toLowerCase().indexOf(searchName) !== -1;
    });
  }).readOnly()
});

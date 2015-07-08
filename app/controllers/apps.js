import Ember from 'ember';

export default Ember.Controller.extend({
  filteredApps: Ember.computed('searchName', function() {
    const applications = this.get('model.applications'),
        searchName = this.get('searchName');

    if (!searchName) {
      return applications;
    }

    /*
    return local.filter((function(_this) {
        return function(track) {
          return (track.get('title') + track.get('album.artist.name')).toLowerCase().indexOf(_this.get('searchName').toLowerCase()) !== -1;
        };
      })(this));
    */

    return applications.filter((app) => {
      return app.get('name').toLowerCase().indexOf(searchName) !== -1;
    });
  }).readOnly()
});

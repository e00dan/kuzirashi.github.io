import Ember from 'ember';

const { async } = window;

export default Ember.Controller.extend({
  queryParams: ['search', 'tags'],
  tags: [],
  filteredApps: Ember.computed('search', 'tags.[]', {
    get() {
      const applications = this.get('model.applications'),
            searchName = this.get('search'),
            tags = this.get('tags'),
            tagsIsEmpty = tags.get('length') === 0;

      if (!searchName && tagsIsEmpty) {
        return applications;
      }

      let lowercasedSearchName;
      if (searchName) {
        lowercasedSearchName = searchName.toLowerCase();
      }

      if (searchName && tagsIsEmpty) {
        return applications.filter((app) => {
          return app.get('name').toLowerCase().indexOf(lowercasedSearchName) !== -1;
        });
      }

      if (!searchName && !tagsIsEmpty) {
        return async.filter(applications.toArray(), (app, callback) => {
          let hasAllTags = true;
          app.get('tags').then((resolvedTags) => {
            const appTags = resolvedTags.mapBy('id');
            tags.forEach((predefTag) => {
              if (hasAllTags) {
                hasAllTags = appTags.includes(predefTag);
              }
            });
            callback(hasAllTags);
          });
        }, (results) => {
          this.set('filteredApps', results);
        });
      }

      if (searchName && !tagsIsEmpty) {
        return async.filter(applications.toArray(), (app, callback) => {
          if (app.get('name').toLowerCase().indexOf(lowercasedSearchName) === -1) {
            return callback(false);
          }

          let hasAllTags = true;
          app.get('tags').then((resolvedTags) => {
            const appTags = resolvedTags.mapBy('id');
            tags.forEach((predefTag) => {
              if (hasAllTags) {
                hasAllTags = appTags.includes(predefTag);
              }
            });
            callback(hasAllTags);
          });
        }, (results) => {
          this.set('filteredApps', results);
        });
      }
    },
    set(key, value) {
      return value;
    }
  }),
  highlightTags: Ember.on('init', function() {
    Ember.run.next(this, () => {
      const selectedTags = this.get('tags');

      if (!selectedTags || Ember.get(selectedTags, 'length') === 0) {
        return;
      }

      this.store.findAll('tag').then((tags) => {
        tags.forEach((tag) => {
          tag.set('active', selectedTags.includes(tag.get('id')));
        });
      });
    });
  }),
  actions: {
    selectTag(tagRecord) {
      const tagId = tagRecord.get('id'),
            tags  = this.get('tags');

      this.store.findRecord('tag', tagId).then((tag) => {
        if (tags.indexOf(tagId) === -1) {
          tag.set('active', true);
          return tags.pushObject(tagId);
        }

        tag.set('active', false);
        tags.removeObject(tagId);
      });
    }
  }
});

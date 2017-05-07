import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  fullDescription: DS.attr('string'),
  smallImage: DS.attr('string'),
  tags: DS.hasMany('tags', { async: true }),
  latest: DS.attr('boolean'),
  link: DS.attr('string'),
  added: DS.attr('date'),
  video: DS.belongsTo('video', { async: true }),
  images: DS.hasMany('image', { async: true }),

  mainImage: Ember.computed('images[]', {
    get() {
      return this.get('images.firstObject');
    }
  }).readOnly(),

  videoOrImages: Ember.computed('video', 'images', {
    get() {
      this.get('images').then((images) => {
        this.get('video').then((video) => {
          this.set('videoOrImages', video || images.get('length') > 0);
        });

      });
    },
    set(key, value) {
      return value;
    }
  }),

  first4Images: Ember.computed('images', {
    get() {
      this.get('images').then((images) => {
        if (images.get('length') === 0) {
          return;
        }

        this.set('first4Images', images.slice(0, 4));
      });
    },
    set(key, value) {
      return value;
    }
  }),

  idSort: ['id'],
  tagsSorted: Ember.computed.sort('tags', 'idSort')
});

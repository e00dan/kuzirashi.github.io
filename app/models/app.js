import DS from 'ember-data';

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

  videoOrImages: Ember.computed.or('video', 'images').readOnly(),

  idSort: ['id'],
  tagsSorted: Ember.computed.sort('tags', 'idSort')
});

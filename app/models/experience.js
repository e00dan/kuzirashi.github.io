import DS from 'ember-data';

export default DS.Model.extend({
  slug: DS.attr('string'),
  dateString: DS.attr('string'),
  title: DS.attr('string'),
  description: DS.attr('string'),
  tags: DS.hasMany('tags'),
  link: DS.attr('string'),
  coverImage: DS.attr('string'),

  idSort: ['id'],
  tagsSorted: Ember.computed.sort('tags', 'idSort')
});

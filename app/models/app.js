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

  idSort: ['id'],
  tagsSorted: Ember.computed.sort('tags', 'idSort')
});

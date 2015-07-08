import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  smallImage: DS.attr('string'),
  tags: DS.hasMany('tags'),
  latest: DS.attr('boolean'),
  link: DS.attr('string')
});

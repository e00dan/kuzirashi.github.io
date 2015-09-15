import DS from 'ember-data';

export default DS.Model.extend({
  path: DS.attr('string'),
  width: DS.attr('number'),
  height: DS.attr('number'),
  caption: DS.attr('string'),

  app: DS.belongsTo('app', { async: true })
});

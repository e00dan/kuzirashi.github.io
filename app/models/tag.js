import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  apps: DS.hasMany('app', { async: true })
});

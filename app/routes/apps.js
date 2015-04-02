import Ember from 'ember';

export default Ember.Route.extend({
  alertOnInit: Ember.on('init', function() {
    let a = 'tysiąc';
    let b = `${a} sześćset`;
    {
      Ember.debug(b);
    }
    Ember.debug(a);

  })
});

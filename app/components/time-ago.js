import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'time',
  attributeBindings: ['href', 'datetime', 'title'],
  classNames: ['timeago'],

  datetime: Ember.computed('time', {
    get() {
      let time = this.get('time');
      if (time && time.toISOString) {
        return time.toISOString();
      }
    }
  }).readOnly(),

  didInsertElement() {
    this.$().timeago();
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  showTime: true,
  classNames: ['animated-caption'],
  didInsertElement() {
    const element = this.get('element');
    element.addEventListener('transitionend', () => {
      if (element.clientHeight === 158) {
        this.set('showTime', false);
        return this.set('showTemplate', true);
      }

      this.set('showTemplate', false);
      this.set('showTime', true);
    }, false);
  }
});

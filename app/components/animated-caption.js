import Ember from 'ember';

export default Ember.Component.extend({
  showTime: true,
  classNames: ['animated-caption'],
  didInsertElement() {
    const element = this.get('element');
    element.addEventListener('transitionend', () => {
      if (element.clientHeight === 158) {
        return Ember.run(() => {
          this.set('showTime', false);
          this.set('showTemplate', true);
        });
      }

      Ember.run(() => {
        this.set('showTemplate', false);
        this.set('showTime', true);
      });
    }, false);
  }
});

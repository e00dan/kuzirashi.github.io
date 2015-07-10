import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'p',
  expanded: false,
  short: null,
  classNameBindings: ['expanded'],
  defaultDots: '...',
  dotsDisplay: Ember.computed.or('customDots', 'defaultDots'),
  shortened: Ember.computed('maxLength', 'short', {
    get() {
      let maxLength = this.get('maxLength');
      if (!maxLength) {
        return;
      }

      let short = this.get('short');
      if (!short) {
        return;
      }

      let additional = this.get('additional');

      if (additional) {
        let length = short.length + additional.length;
        if (length > maxLength) {
          this.set('dots', true);
          return short.slice(0, maxLength - additional.length);
        } else {
          return short;
        }
      }

      if (short.length > maxLength) {
        this.set('dots', true);
        return short.slice(0, maxLength - this.get('dotsDisplay.length'));
      } else {
        this.set('dots', false);
        return short;
      }
    }
  }).readOnly(),
  mouseEnter() {
    const disableExpand = this.get('disableExpand');
    if (disableExpand) {
      return;
    }

    let delay = this.get('delay');
    if (delay) {
      let timer = setTimeout(() => {
        this.set('expanded', true);
      }, delay);
      return this.set('timer', timer);
    }

    this.set('expanded', true);
  },
  mouseLeave() {
    const disableExpand = this.get('disableExpand');
    if (disableExpand) {
      return;
    }
    
    this.set('expanded', false);
    let timer = this.get('timer');
    if (timer) {
      clearTimeout(timer);
    }
  }
});

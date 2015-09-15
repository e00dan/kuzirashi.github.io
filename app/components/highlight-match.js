import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  display: Ember.computed('bold', 'first', 'second', function() {
    let base = this.get('first');
    if (!base) {
      return;
    }

    const bold = this.get('bold');
    if (!bold) {
      return base;
    }

    if (this.get('second')) {
      base += ' ' + this.get('second');
    }

    return base.replace(new RegExp('(^|)(' + this.get('bold').trim().replace(' ', '|') + ')(|$)', 'ig'), '$1<b>$2</b>$3');
  }),
  secondaryDisplay: Ember.computed('bold', 'third', function() {
    let third = this.get('third');
    if (third) {
      return third.replace(new RegExp('(^|)(' + this.get('bold').trim().replace(' ', '|') + ')(|$)', 'ig'), '$1<b>$2</b>$3');
    }
  })
});

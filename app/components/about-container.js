import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['about-container'],
  _attachEvent() {
    this.$().mousemove((e) => {
      const arrow  = Ember.$('.arrow'),
            center = [ arrow.offset().left + arrow.width() / 2,
                       arrow.offset().top + arrow.height() / 2 ],
            angle = Math.atan2(e.pageX - center[0], - (e.pageY - center[1]) ) * (180 / Math.PI);

      arrow.css('transform', `rotate(${ angle }deg)`);
    });
  },
  didInsertElement() {
    this._attachEvent();
  }
});

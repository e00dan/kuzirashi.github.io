import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    didTransition() {
      Ember.run.next(this, () => {
        $('.about-container').mousemove((e) => {
          const arrow  = $('.arrow'),
                center = [ arrow.offset().left + arrow.width() / 2,
                           arrow.offset().top + arrow.height() / 2 ],
                angle = Math.atan2(e.pageX - center[0], - (e.pageY - center[1]) ) * (180 / Math.PI);

          arrow.css('transform', `rotate(${ angle }deg)`);
        });
      });
    }
  }
});

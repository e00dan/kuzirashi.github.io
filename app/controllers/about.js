import Ember from 'ember';

export default Ember.Controller.extend({
  setupEvent: Ember.on('init', function() {
    $(document).mousemove((e) => {
      const arrow = $('.arrow'),
            center = [ arrow.offset().left + arrow.width() / 2,
                       arrow.offset().top + arrow.height() / 2 ];

      const angle = Math.atan2(e.pageX- center[0], - (e.pageY- center[1]) )*(180/Math.PI);

      arrow.css('transform', `rotate(${ angle }deg)`);
    });
  })
});

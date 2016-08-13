import Ember from 'ember';

const { particlesJS } = window;

export default Ember.Route.extend({
  actions: {
    didTransition() {
      Ember.run.scheduleOnce('afterRender', this, 'initParticles');
    }
  },
  initParticles() {
    let ammount = (window.matchMedia('(max-width: 456px)').matches) ? 40 : 100;
    particlesJS('particles-js', {
      particles: {
        color: '#fff',
        color_random: false,
        shape: 'circle', // "circle", "edge" or "triangle"
        opacity: {
          opacity: 1,
          anim: {
            enable: true,
            speed: 5,
            opacity_min: 0,
            sync: false
          }
        },
        size: 2.5,
        size_random: true,
        nb: ammount,
        line_linked: {
          enable_auto: false,
          distance: 140,
          color: '#fff',
          opacity: 0.3,
          width: 1,
          condensed_mode: {
            enable: false,
            rotateX: 600,
            rotateY: 60
          }
        },
        anim: {
          enable: true,
          speed: 1
        }
      },
      // Retina Display Support //
      retina_detect: true
    });
  }
});

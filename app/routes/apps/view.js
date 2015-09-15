import Ember from 'ember';

export default Ember.Route.extend({
  _showImages(providedElement) {
    const pswpElement = providedElement || document.querySelectorAll('.pswp')[0],
          items = [],
          model = this.get('controller.model');

    if (!model) {
      return;
    }

    const images = model.get('images');

    images.forEach((image) => {
      items.push({
        src: image.get('id'),
        w: image.get('width'),
        h: image.get('height'),
        title: image.get('caption')
      });
    });

    // define options (if needed)
    const options = {
        // optionName: 'option value'
        // for example:
        index: 0, // start at first slide
        history: false
    };

    // Initializes and opens PhotoSwipe
    const gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  },
  model(params) {
    return new Promise(resolve => {
      this.store.findAll('app').then(() => resolve(this.store.findRecord('app', params.app_slug)));
    });
  },
  actions: {
    showImages() {
      const pswpElement = document.querySelectorAll('.pswp')[0];

      if (!pswpElement) {
        this.render('pswp', {
          into: 'application',
          outlet: 'body-direct'
        });

        return Ember.run.scheduleOnce('afterRender', this, '_showImages');
      }

      this._showImages(pswpElement);
    }
  }
});

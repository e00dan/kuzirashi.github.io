import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    showVideo() {
      this.set('showVideo', true);
    },
    showImages() {
      const pswpElement = document.querySelectorAll('.pswp')[0],
            items = [],
            model = this.get('model');

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
          index: 0 // start at first slide
      };

      // Initializes and opens PhotoSwipe
      const gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
      gallery.init();
    }
  }
});

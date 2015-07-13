/* global PhotoSwipe */
/* global PhotoSwipeUI_Default */

import Ember from 'ember';

const run = Ember.run;

export default Ember.Component.extend({

  onInsert: Ember.on('didInsertElement', function() {
    this.set('pswpEl', Ember.$('.pswp')[0]);
    this.set('pswpTheme', PhotoSwipeUI_Default);

    this._buildOptions();

    // when passing an array of items, we don't need a block
    if (this.get('items')) {
      return this._initItemGallery();
    }

    return this._calculateItems();
  }),

  _buildOptions(getThumbBoundsFn) {
    const reqOpts = {
      history: false
    };

    if (Ember.isPresent(getThumbBoundsFn)) {
      reqOpts.getThumbBoundsFn = getThumbBoundsFn;
    }

    const options = Ember.merge(reqOpts, this.get('options') || {});
    this.set('options', options);
  },

  _initItemGallery() {
    this.set('gallery', new PhotoSwipe(
      this.get('pswpEl'),
      this.get('pswpTheme'),
      this.get('items'),
      this.get('options')
    ));
    this._reInitOnClose();
  },

  _reInitOnClose() {
    this.get('gallery').listen('close', () => {
      run.next(() => {
        this._initItemGallery();
      });
    });
  },

  click(evt) {
    const aElement = this.$(evt.target).parent();
    const index    = this.$("a.photo-item").index( aElement );

    if (Ember.isEmpty(this.get('template')) || !aElement.is('a')) { return; }

    evt.preventDefault();

    // setup options, such as index for index
    this._buildOptions(this._getBounds.bind(this));
    this.set('options.index', index);

    const pSwipe = new PhotoSwipe(
      this.get('pswpEl'),
      this.get('pswpTheme'),
      this.get('calculatedItems'),
      this.get('options')
    );

    this.set('gallery', pSwipe);
    this.get('gallery').init();
  },

  _getBounds(i) {
    const img      = this.$('img').get(i),
          position = this.$(img).position(),
          width    = this.$(img).width();

    return { x: position.left, y: position.top, w: width };
  },

  _calculateItems() {
    const items           = this.$().find('a');
    const calculatedItems = Ember.A(items).map((i, item) => {
      return {
        src:   Ember.$(item).attr('href'),
        w:     Ember.$(item).data('width'),
        h:     Ember.$(item).data('height'),
        msrc:  Ember.$(item).children('img').attr('src'),
        title: Ember.$(item).children('img').attr('alt')
      };
    });
    this.set('calculatedItems', calculatedItems);
  }
});

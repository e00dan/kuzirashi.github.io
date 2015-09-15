import Ember from 'ember';

export default Ember.Component.extend({
  muteVideo: Ember.observer('model', 'model.id', function() {
    Ember.debug('component.muteVideo fired');
    //alert('loadVideo');
    const tag = document.createElement('script');
    tag.src = "//www.youtube.com/iframe_api";

    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    let player;

    function onPlayerReady() {
      Ember.debug('onPlayerReady()');
      //console.log(player);

      player.playVideo();
      // Mute!
      player.mute();
    }

    if (window.YT === undefined) {
      return window.onYouTubeIframeAPIReady = () => {
        Ember.debug('onYouTubeIframeAPIReady');
        player = new window.YT.Player(`ytplayer-${ this.get('model.id') }`, {
          events: {
            'onReady': onPlayerReady
          }
        });
      };
    }

    Ember.debug('window.YT !== undefined');

    player = new window.YT.Player(`ytplayer-${ this.get('model.id') }`, {
      events: {
        'onReady': onPlayerReady
      }
    });
  }).on('didInsertElement')
});

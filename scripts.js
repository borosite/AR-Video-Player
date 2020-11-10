AFRAME.registerComponent('play-on-window-click', {
    init: function () {
      this.onClick = this.onClick.bind(this);
    },
    play: function () {
      window.addEventListener('click', this.onClick);
    },
    pause: function () {
      window.removeEventListener('click', this.onClick);
    },
    onClick: function (evt) {
      var video = document.getElementById('video');
      if (!video) { return; }
      if(video.paused) {
        var image = document.getElementById('playImage');
        video.play();
        image.src = "pause.png";
      }
      else {
        var image = document.getElementById('playImage');
        video.pause();
        image.src = "play.png";
      }
      // video.paused ? video.play() : video.pause();
    }
  });
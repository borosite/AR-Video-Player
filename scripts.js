import adapter from 'webrtc-adapter';

AFRAME.registerComponent('foo',{
    init:function(){
      var vid = document.getElementById('video');
      setTimeout(function(){
    
      document.querySelector('#video').pause();
      console.log('pause');
      },5000);
      setTimeout(function(){
       vid.play();
       console.log('play');
      },10000);
    }
    })
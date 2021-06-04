function splitScroll(){
  const controller = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({
    duration: '300%',
    triggerElement: '.left-content',
    triggerHook:0
  })
  .setPin('.left-content')
  .addTo(controller)

  if (window.innerWidth < 880) {
    scene.duration(1);
  }
}
splitScroll();



window.addEventListener('resize', function () { 
  "use strict";
  setTimeout(function(){
    window.location.reload();
  });
});
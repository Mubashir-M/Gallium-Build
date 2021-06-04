function splitScroll(){
  const controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    duration: '300%',
    triggerElement: '.left-content',
    triggerHook:0
  })
  .setPin('.left-content')
  .addTo(controller)
}

splitScroll();
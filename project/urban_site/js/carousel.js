$(document).ready(function() {
    var owl = $('.partnerships_box');

    owl.owlCarousel({
      margin: 10,
      loop: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 2500,
      autoplaySpeed: 1000,
      smartSpeed: 1000,
      autoplayHoverPause: true,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 6.5 }
      }
    })
});
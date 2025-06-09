$(document).ready(function() {
    var owl = $('.conservation_contents');

    owl.owlCarousel({
      center: true,
      margin: 24,
      loop: true,
      dots: true,
      nav: true,
      navText:["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
      responsive: {
        0: { items: 1.5 }
      }
    })
});
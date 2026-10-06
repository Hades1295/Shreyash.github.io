// Particle background (see js/jquery.particleground.js for options)
document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#5a3a42',
    lineColor: '#5a3a42'
  });

  document.getElementById('year').textContent = new Date().getFullYear();

  // Fade cards in as they scroll into view
  var cards = document.querySelectorAll('main .card, #about p, dl');
  if (!('IntersectionObserver' in window)) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('shown'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  cards.forEach(function (c) { c.classList.add('reveal'); io.observe(c); });
});

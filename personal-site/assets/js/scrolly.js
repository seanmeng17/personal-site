document.addEventListener('DOMContentLoaded', function () {
  var steps = document.querySelectorAll('.scrolly-step');
  var dots = document.querySelectorAll('.scrolly-dot');
  if (!steps.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var index = entry.target.getAttribute('data-index');
      var dot = document.querySelector('.scrolly-dot[data-index="' + index + '"]');

      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        if (dot) {
          dots.forEach(function (d) { d.classList.remove('is-active'); });
          dot.classList.add('is-active');
        }
      }
    });
  }, {
    threshold: 0.35,
    rootMargin: '-10% 0px -10% 0px'
  });

  steps.forEach(function (step) { observer.observe(step); });

  // Clicking a rail dot scrolls to the matching step
  dots.forEach(function (dot) {
    dot.addEventListener('click', function () {
      var index = dot.getAttribute('data-index');
      var target = document.querySelector('.scrolly-step[data-index="' + index + '"]');
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
    dot.style.cursor = 'pointer';
  });
});

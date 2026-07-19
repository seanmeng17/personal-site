document.addEventListener('DOMContentLoaded', function () {
  var container = document.querySelector('.page-content');
  if (!container) return;

  var children = Array.prototype.slice.call(container.children);
  if (!children.length) return;

  children.forEach(function (el) { el.classList.add('reveal-item'); });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -10% 0px'
  });

  children.forEach(function (el) { observer.observe(el); });
});

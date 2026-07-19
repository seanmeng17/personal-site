// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var list = document.querySelector('.nav-list');
  if (toggle && list) {
    toggle.addEventListener('click', function () {
      var isOpen = list.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });
  }

  // Writing page: filter tabs
  var tabs = document.querySelectorAll('.tab-btn');
  var items = document.querySelectorAll('.writing-list-item');
  if (tabs.length && items.length) {
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');
        var filter = tab.getAttribute('data-filter');
        items.forEach(function (item) {
          var show = filter === 'all' || item.getAttribute('data-type') === filter;
          item.style.display = show ? '' : 'none';
        });
      });
    });
  }
});

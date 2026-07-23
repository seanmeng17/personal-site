const savedTheme = localStorage.getItem('sean-site-theme');

if (savedTheme === 'dark') {
  document.body.classList.add('dark');
}

const themeToggle = document.querySelector('.toggle');

if (themeToggle) {
  const syncThemeLabel = () => {
    themeToggle.textContent = document.body.classList.contains('dark') ? 'Light' : 'Dark';
  };

  syncThemeLabel();
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem(
      'sean-site-theme',
      document.body.classList.contains('dark') ? 'dark' : 'light'
    );
    syncThemeLabel();
  });
}

document.querySelectorAll('a[href^="http://"], a[href^="https://"]').forEach((link) => {
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});

document.querySelectorAll('.filters').forEach((filterGroup) => {
  const filters = filterGroup.querySelectorAll('.filter');
  const list = filterGroup.nextElementSibling;

  filters.forEach((filter) => {
    filter.addEventListener('click', () => {
      const category = filter.dataset.filter;

      filters.forEach((item) => item.classList.remove('active'));
      filter.classList.add('active');

      list.querySelectorAll('.filter-item').forEach((item) => {
        item.dataset.hidden = String(category !== 'all' && item.dataset.category !== category);
      });
    });
  });
});

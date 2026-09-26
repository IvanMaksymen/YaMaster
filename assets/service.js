const button = document.querySelector('.menu-button');
const menu = document.querySelector('.nav-links');

document.getElementById('year').textContent = new Date().getFullYear();

button.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  document.body.classList.toggle('menu-open', open);
  button.setAttribute('aria-expanded', String(open));
  button.textContent = open ? 'Закрити' : 'Меню';
});

menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('open');
  document.body.classList.remove('menu-open');
  button.setAttribute('aria-expanded', 'false');
  button.textContent = 'Меню';
}));

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add('in');
    observer.unobserve(entry.target);
  }
}), { threshold: .1 });

document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

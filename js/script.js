// Mobile menu
const burger = document.getElementById('burger'), nav = document.getElementById('nav');
const setMenu = open => { nav.classList.toggle('open', open); burger.setAttribute('aria-expanded', open); };
burger.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
nav.addEventListener('click', e => { if (e.target.tagName === 'A') setMenu(false); });

// Highlight current section in the nav
const links = [...nav.querySelectorAll('a')];
const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('main section[id]').forEach(s => io.observe(s));



// Certificate viewer (works for any .cert-card you add later)
const lb = document.getElementById('lb'), lbImg = lb.querySelector('img');
document.querySelector('.certs').addEventListener('click', e => {
  const img = e.target.closest('.cert-card')?.querySelector('img');
  if (img && !img.classList.contains('missing')) { lbImg.src = img.src; lbImg.alt = img.alt; lb.showModal(); }
});
document.getElementById('lbx').addEventListener('click', () => lb.close());
lb.addEventListener('click', e => { if (e.target === lb) lb.close(); });

// Contact form opens the visitor's email app
document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  const f = new FormData(e.target);
  location.href = 'mailto:samarthweb4@gmail.com?subject=' + encodeURIComponent('Message from ' + f.get('name')) + '&body=' + encodeURIComponent(f.get('msg'));
});

document.getElementById('yr').textContent = new Date().getFullYear();

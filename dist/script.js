'use strict';
// Preencher quando os canais oficiais forem definidos. Valores vazios não geram links.
const CONTACT = { email: '', whatsapp: '', linkedin: '' };
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
function closeMenu() { menu.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.setAttribute('aria-label', 'Abrir menu'); }
menuToggle.addEventListener('click', () => { const open = menu.classList.toggle('open'); menuToggle.setAttribute('aria-expanded', String(open)); menuToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu'); });
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.classList.contains('open')) { closeMenu(); menuToggle.focus(); } });
const video = document.querySelector('#demo-video');
const demos = {
  lock: { label: 'sem EPI: máquina bloqueada', caption: 'Teste em bancada · Condição sem EPI: acionamento bloqueado.' },
  safe: { label: 'com EPI: máquina liberada', caption: 'Teste em bancada · Condição com EPI: acionamento liberado.' }
};
document.querySelectorAll('.demo-tab').forEach(button => button.addEventListener('click', () => {
  if (button.getAttribute('aria-pressed') === 'true') return;
  const key = button.dataset.demo;
  video.pause();
  video.src = `assets/demonstracao-${key}.mp4`;
  video.poster = `assets/demonstracao-${key}.png`;
  video.setAttribute('aria-label', `Demonstração do protótipo ${demos[key].label}`);
  video.querySelector('a').href = video.src;
  video.load();
  document.querySelector('#demo-caption').textContent = demos[key].caption;
  document.querySelectorAll('.demo-tab').forEach(tab => { const selected = tab === button; tab.classList.toggle('active', selected); tab.setAttribute('aria-pressed', String(selected)); });
}));
let availableContacts = 0;
for (const [key, rawValue] of Object.entries(CONTACT)) {
  const value = rawValue.trim();
  if (!value) continue;
  const cell = document.querySelector(`[data-contact="${key}"]`);
  const link = document.createElement('a');
  if (key === 'email') { link.href = `mailto:${value}`; link.textContent = value; }
  if (key === 'whatsapp') { const digits = value.replace(/\D/g, ''); if (digits.length < 10) continue; link.href = `https://wa.me/${digits}`; link.textContent = value; }
  if (key === 'linkedin') { try { const url = new URL(value); if (url.protocol !== 'https:' || !/(^|\.)linkedin\.com$/.test(url.hostname)) continue; link.href = url.href; } catch { continue; } link.textContent = 'Conheça nosso perfil ↗'; }
  if (key !== 'email') { link.target = '_blank'; link.rel = 'noopener noreferrer'; }
  cell.replaceChildren(link); cell.removeAttribute('aria-label'); availableContacts++;
}
if (availableContacts) document.querySelector('.contact-pending').hidden = true;

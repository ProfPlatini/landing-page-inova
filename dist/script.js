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
  '1': { label: 'sem capacete', caption: 'Sem capacete · Teste com sinalização de bloqueio no painel.' },
  '2': { label: 'com capacete', caption: 'Com capacete · Teste com sinalização de liberação no painel.' },
  '3': { label: 'integração em bancada', caption: 'Integração em bancada · Câmera, aplicação, placa de controle e máquina.' },
  '4': { label: 'detecção de EPI', caption: 'Detecção de EPI · Registro da verificação durante o teste.' }
};
document.querySelectorAll('.demo-tab').forEach(button => button.addEventListener('click', () => {
  if (button.getAttribute('aria-pressed') === 'true') return;
  const key = button.dataset.demo;
  video.pause();
  video.src = `assets/demo-${key}.mp4`;
  video.poster = `assets/demo-${key}.jpg`;
  video.setAttribute('aria-label', `Demonstração ${demos[key].label}`);
  video.querySelector('a').href = video.src;
  video.load();
  document.querySelector('#demo-count').textContent = `0${key} / 04`;
  document.querySelector('#demo-caption').textContent = demos[key].caption;
  document.querySelectorAll('.demo-tab').forEach(tab => { const selected = tab === button; tab.classList.toggle('active', selected); tab.setAttribute('aria-pressed', String(selected)); });
}));
// Evita áudio simultâneo entre a demonstração real e o vídeo de personalização.
document.querySelectorAll('video').forEach(player => player.addEventListener('play', () => {
  document.querySelectorAll('video').forEach(other => { if (other !== player) other.pause(); });
}));
const track = document.querySelector('#tech-track');
const duplicate = track.querySelector('.tech-group').cloneNode(true);
duplicate.setAttribute('aria-hidden', 'true');
duplicate.setAttribute('inert', '');
duplicate.querySelectorAll('a').forEach(link => link.tabIndex = -1);
track.append(duplicate);
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const pauseButton = document.querySelector('.marquee-toggle');
let manuallyPaused = false;
function updateMotion() {
  const paused = manuallyPaused || motionPreference.matches;
  track.classList.toggle('paused', paused);
  pauseButton.setAttribute('aria-pressed', String(paused));
  pauseButton.textContent = motionPreference.matches ? 'Movimento reduzido' : paused ? 'Retomar animação ▶' : 'Pausar animação Ⅱ';
  pauseButton.disabled = motionPreference.matches;
}
pauseButton.addEventListener('click', () => { manuallyPaused = !manuallyPaused; updateMotion(); });
motionPreference.addEventListener('change', updateMotion);
updateMotion();
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

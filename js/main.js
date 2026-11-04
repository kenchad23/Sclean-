// Navigation and header behavior
const header = document.getElementById('top');
const menuButton = document.querySelector('.burger');
const menu = document.getElementById('menu');
const updateHeader = () => header.classList.toggle('solid', window.scrollY > 40);
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();
let previousFocus = null;
function setMenu(open) {
  menu.classList.toggle('open', open);
  menu.setAttribute('aria-hidden', String(!open));
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
  document.body.style.overflow = open ? 'hidden' : '';
  if (open) { previousFocus = document.activeElement; menu.querySelector('a')?.focus(); }
  else if (previousFocus && menu.contains(document.activeElement)) { menuButton.focus(); }
}
menu.setAttribute('aria-hidden', 'true');
menuButton.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
window.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.classList.contains('open')) setMenu(false);
  if (event.key === 'Tab' && menu.classList.contains('open')) {
    const links = [...menu.querySelectorAll('a')];
    if (event.shiftKey && document.activeElement === links[0]) { event.preventDefault(); links.at(-1).focus(); }
    else if (!event.shiftKey && document.activeElement === links.at(-1)) { event.preventDefault(); links[0].focus(); }
  }
});


/* ===================================
   SCLEAN LOGO INTRO ANIMATION
=================================== */

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (!preloader) return;

  setTimeout(() => {
    preloader.classList.add("is-hidden");

    setTimeout(() => {
      preloader.remove();
    }, 800);
  }, 2000);
});


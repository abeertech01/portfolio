//////// Show Menu /////////////
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const navMenu = document.getElementById(navId);

  if (toggle && navMenu) {
    toggle.addEventListener('click', () => {
      navMenu.classList.toggle('show')
    })
  }
}
showMenu('menuToggler', 'navMenu');

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.header__nav-link');

function linkAction() {
  // Active Link
  navLink.forEach(n => n.classList.remove('active'));

  // Remove menu mobile
  const navMenu = document.getElementById('navMenu');
  navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/////////// Closing Nav Menu When Click Outside///////////
const sections = document.querySelectorAll('.out-menu');

sections.forEach(s => {
  s.addEventListener('click', () => {
    // Remove menu mobile
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.remove('show');
  })
})
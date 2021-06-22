// Show Menu
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
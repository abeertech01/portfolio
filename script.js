//////// ADDING DARK MODE ////////
const headerMode = document.querySelector('.header__mode');
let isDark = true;

//=== Global
const body = document.getElementById('body');
const a = document.querySelectorAll('a');//tx
const a_visited = document.querySelectorAll('a:visited');//tx
const a_hover = document.querySelectorAll('a:hover');//tx

//=== header
const header = document.querySelector('.header');//bg color
const menubarSpan = document.querySelectorAll('.menubar-span');//bg
const headerNavMenu = document.querySelector('.header__nav-menu');//bg, border
const headerNavLink = document.querySelectorAll('.header__nav-link');//bg

//=== home
const name2 = document.querySelector('.name-2');//tx

//=== about
const about = document.querySelector('.about');//bg

//=== skills
const skillsBox = document.querySelector('.skills__box');//border
const skillsBoxNextDiv = document.querySelectorAll('.skills__box >div:not(:last-child)');//bg
const skillsExBtn = document.querySelector('.skills__explanation button');//tx, bg, border

/* ===== Header Special ===== */
header.classList.add('h-dark-bg');
/* ===== End of Header Special ===== */

//=== default adding dark mode
const addModeClasses = (blackBg, mBlackBg, mBlackLBg, grayBg, grayTx, lGrayTx, grayBorder) => {
  // global
  body.classList.add(grayTx, mBlackBg);
  a.forEach(el => el.classList.add(grayTx));
  a_visited.forEach(el => el.classList.add(grayTx));
  a_hover.forEach(el => el.classList.add(grayTx));
  // header
  menubarSpan.forEach(el => el.classList.add(grayBg));
  headerNavMenu.classList.add(blackBg, grayBorder);
  headerNavLink.forEach(el => el.addEventListener('mouseover', function () {
    headerNavLink.forEach(ele => ele.classList.remove(mBlackLBg))
    this.classList.add(mBlackLBg);
    this.addEventListener('mouseout', () => { this.classList.remove(mBlackLBg) })
  }));
  // home
  name2.classList.add(lGrayTx);
  // about
  about.classList.add(mBlackLBg);
  // skills
  skillsBox.classList.add(grayBorder);
  skillsBoxNextDiv.forEach(el => el.classList.add(mBlackLBg));
  skillsExBtn.classList.add(grayTx, blackBg, grayBorder);
}
addModeClasses('black-bg', 'matteBlack-bg', 'matteBlack-l-bg', 'gray-bg', 'gray-tx', 'lightGray-tx', 'gray-border');

//== Remove dark mode function
const removeModeClasses = (blackBg, mBlackBg, mBlackLBg, grayBg, grayTx, lGrayTx, grayBorder) => {
  // global
  body.classList.remove(grayTx, mBlackBg);
  a.forEach(el => el.classList.remove(grayTx));
  a_visited.forEach(el => el.classList.remove(grayTx));
  a_hover.forEach(el => el.classList.remove(grayTx));
  // header
  menubarSpan.forEach(el => el.classList.remove(grayBg));
  headerNavMenu.classList.remove(blackBg, grayBorder);
  // home
  name2.classList.remove(lGrayTx);
  // about
  about.classList.remove(mBlackLBg)
  // skills
  skillsBox.classList.remove(grayBorder);
  skillsBoxNextDiv.forEach(el => el.classList.remove(mBlackLBg));
  skillsExBtn.classList.remove(grayTx, blackBg, grayBorder);
}

//=== change mode
const changeMode = function () {
  isDark = !isDark;

  if (isDark) {
    // Header Special
    // Remove day mode
    header.classList.remove('h-day-bg');
    // Add dark mode
    header.classList.add('h-dark-bg');

    // Removing day mode classes
    removeModeClasses('white-bg', 'matteWhite-bg', 'matteWhite-l-bg', 'ash-bg', 'ash-tx', 'lightAsh-tx', 'ash-border');
    // Adding dark mode classes
    addModeClasses('black-bg', 'matteBlack-bg', 'matteBlack-l-bg', 'gray-bg', 'gray-tx', 'lightGray-tx', 'gray-border');
  } else {
    // Header Special
    // Remove dark mode
    header.classList.remove('h-dark-bg');
    // Add day mode
    header.classList.add('h-day-bg');

    // Removing dark mode classes
    removeModeClasses('black-bg', 'matteBlack-bg', 'matteBlack-l-bg', 'gray-bg', 'gray-tx', 'lightGray-tx', 'gray-border');
    // Adding day mode classes
    addModeClasses('white-bg', 'matteWhite-bg', 'matteWhite-l-bg', 'ash-bg', 'ash-tx', 'lightAsh-tx', 'ash-border');
  }
}
headerMode.addEventListener('click', changeMode);

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
function linkAction() {
  // Active Link
  headerNavLink.forEach(n => n.classList.remove('active-dark'));
  this.classList.add('active-dark');

  // Remove menu mobile
  headerNavMenu.classList.remove('show');
}
headerNavLink.forEach(n => n.addEventListener('click', linkAction));

/////////// Closing Nav Menu When Click Outside///////////
const sections = document.querySelectorAll('.out-menu');

sections.forEach(s => {
  s.addEventListener('click', () => {
    // Remove menu mobile
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.remove('show');
  })
})
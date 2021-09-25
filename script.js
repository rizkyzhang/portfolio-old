const header = document.querySelector('.header');
const themeToggleButton = document.querySelector('.nav__theme');
const themeIcon = document.querySelector('.theme-icon');
const scrollTop = document.querySelector('.scroll-top');

/* Theme toggle */

function setTheme(theme) {
  document.documentElement.setAttribute('theme', theme);
  localStorage.setItem('theme', theme);

  if (theme == 'light') {
    themeIcon.classList.replace('fa-sun', 'fa-moon');
  } else {
    themeIcon.classList.replace('fa-moon', 'fa-sun');
  }
}

const toggleTheme = () =>
  localStorage.getItem('theme') === 'dark'
    ? setTheme('light')
    : setTheme('dark');

(() =>
  localStorage.getItem('theme') === 'dark'
    ? setTheme('dark')
    : setTheme('light'))(); // IIFE (Immediately Invoked Function Expression) to set the theme on initial load by checking the localStorage

themeToggleButton.addEventListener('click', toggleTheme);

/* Sticky header & scroll to top button */

function scrollHandler() {
  if (window.pageYOffset > 0) {
    header.classList.add('drop-shadow');
    scrollTop.style.display = 'flex';
  } else {
    header.classList.remove('drop-shadow');
    scrollTop.style.display = 'none';
  }
}

window.addEventListener('scroll', scrollHandler);

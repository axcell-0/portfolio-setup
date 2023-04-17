const mobileIcon = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.header-d');
const navLinks = document.querySelectorAll('.header-d a');

mobileIcon.addEventListener('click', () => {
  mobileIcon.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    mobileIcon.classList.remove('active');
  });
});

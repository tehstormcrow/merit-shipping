import './style.css'

console.log('JavaScript is running');

document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu a')

  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      console.log('hello world')
      mobileMenu.classList.add('hidden')
    })
  })
});
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

function updateActiveLink() {
  // Get all sections that have an ID
  const sections = document.querySelectorAll('section[id]');
  // Get all navigation links
  const navLinks = document.querySelectorAll('.navigation--link');

  // Get current scroll position
  const scrollPosition = window.scrollY;

  // Loop through sections to find the one in view
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 250; // Offset by 200px to trigger earlier
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      // Remove active class from all links
      navLinks.forEach(link => link.classList.remove('active'));

      // Add active class to corresponding nav item
      const correspondingLink = document.querySelector(`.navigation--link[href="#${sectionId}"]`);
      if (correspondingLink) {
        correspondingLink.classList.add('active');
      }
    }
  });
}

window.addEventListener('scroll', updateActiveLink);

// Run once on page load to set initial state
updateActiveLink();
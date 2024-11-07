// Get all sections and sidebar items
const sections = document.querySelectorAll('section, header, div[id^="about"], div[id^="projects"], div[id^="contact"]');
const navLinks = document.querySelectorAll('.w3-sidebar a, #myNavbar a');

// Options for Intersection Observer
const options = {
  root: null, // use the viewport as the root
  threshold: 0.5 // 50% of the section needs to be visible to be considered active
};

// Intersection Observer callback function
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // Check if the section is in the viewport
    if (entry.isIntersecting) {
      // Get the id of the currently intersecting section
      const sectionId = entry.target.id;

      // Remove 'active' class from all nav items
      navLinks.forEach(link => link.classList.remove('active'));

      // Add 'active' class to the corresponding link in sidebar or navbar
      const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
}, options);

// Observe each section
sections.forEach(section => {
  observer.observe(section);
});

// Smooth scroll behavior for nav links
document.querySelectorAll('.w3-sidebar a, #myNavbar a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    // Get the target section id from the href attribute
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    // Scroll to the section smoothly
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

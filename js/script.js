/* js/script.js */
document.addEventListener('DOMContentLoaded', function() {
    fetch('partials/navbar.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navbar').innerHTML = data;
      });
  });
  
  
  /* js/components.js */
  // Component-specific JS if needed
  
  
  /* js/utils.js */
  // Utility functions can be added here
  
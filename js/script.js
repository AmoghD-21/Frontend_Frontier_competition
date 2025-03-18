/* js/script.js */
document.addEventListener('DOMContentLoaded', function() {
    fetch('partials/navbar.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navbar').innerHTML = data;
        const menuDropdown = document.querySelector('.menu-dropdown');
        const themeToggleOption = document.createElement('li');
        themeToggleOption.textContent = 'Toggle Light Theme';
        themeToggleOption.onclick = () => {
          document.body.classList.toggle('light-theme');
          document.body.classList.toggle('dark-theme');
        };
        menuDropdown.appendChild(themeToggleOption);
      });
  });
  
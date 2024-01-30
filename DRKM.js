document.addEventListener('DOMContentLoaded', function() {
  const darkModeToggle = document.getElementById('darkModeToggle');

  darkModeToggle.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode', darkModeToggle.checked);

    // Save the user's preference in localStorage
    localStorage.setItem('darkMode', darkModeToggle.checked);
  });

  // Check if user has a preference for dark mode in localStorage
  const isDarkModePreferred = localStorage.getItem('darkMode') === 'true';

  // Apply dark mode if user prefers it
  if (isDarkModePreferred) {
    darkModeToggle.checked = true;
    document.body.classList.add('dark-mode');
  }
});
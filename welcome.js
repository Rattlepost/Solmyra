(function () {
  const overlay = document.getElementById('welcome-overlay');
  const closeBtn = document.getElementById('welcome-close');
  const checkbox = document.getElementById('dont-show-again');

  // If user previously dismissed, skip
  if (localStorage.getItem('solmyra-welcome-dismissed') === 'true') {
    overlay.classList.add('hidden');
    return;
  }

  closeBtn.addEventListener('click', () => {
    if (checkbox.checked) {
      localStorage.setItem('solmyra-welcome-dismissed', 'true');
    }
    overlay.classList.add('hidden');
  });
})();
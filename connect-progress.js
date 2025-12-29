
(function () {
  const panels = document.querySelectorAll('.panel');
  const connectBtn = document.getElementById('connectButton');
  const restartBtn = document.getElementById('restartButton');

  function showState(state) {
    panels.forEach((panel) => {
      const isMatch = panel.dataset.state === state;
      panel.classList.toggle('is-active', isMatch);
      panel.setAttribute('aria-hidden', isMatch ? 'false' : 'true');
    });
  }

  if (connectBtn) {
    connectBtn.addEventListener('click', () => {
      // In production: trigger your real Tesla OAuth redirect here,
      // then show the connecting state while you wait for the callback.
      showState('connecting');

      // Demo only: simulate a short connection delay before "connected"
      setTimeout(() => {
        showState('connected');
      }, 2600);
    });
  }

  if (restartBtn) {
    restartBtn.addEventListener('click', () => {
      showState('idle');
    });
  }
})();

function startClock() {
    const clockEl = document.getElementById("liveClock");
    if (!clockEl) return; // safeguard if element not found
  
    setInterval(() => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      clockEl.textContent = `${hours}:${minutes}:${seconds}`;
    }, 1000);
  }
  
  // When the DOM is loaded, start the clock
  document.addEventListener('DOMContentLoaded', startClock);
  
function initPage() {
  // Update footer year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Initialize countdown
  startCountdown();
}

function startCountdown() {
  const countdownEl = document.getElementById("countdown-timer");

  // Adjust offset for daylight saving if needed (4 = EDT, 5 = EST).
  const offsetEST = 4; 
  const targetDate = new Date();
  // Set 'today' at 16:00 EST => add the offset to get UTC.
  targetDate.setHours(16 + offsetEST, 0, 0, 0);

  function updateTimer() {
    const now = new Date();
    const dist = targetDate.getTime() - now.getTime();
    if (dist <= 0) {
      countdownEl.textContent = "We’re Live!";
      return;
    }
    const hours = Math.floor(dist / (1000 * 60 * 60));
    const minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((dist % (1000 * 60)) / 1000);

    countdownEl.textContent = 
      `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

// Run on DOM load
document.addEventListener('DOMContentLoaded', initPage);

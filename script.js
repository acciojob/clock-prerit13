//your JS code here. If required.
function updateTimer() {
      const now = new Date();
      const formattedTime = now.toLocaleString(); // e.g., "6/8/2025, 7:21:35 PM"
      document.getElementById('timer').textContent = formattedTime;
    }

    // Initial call
    updateTimer();

    // Update every second
    setInterval(updateTimer, 1000)
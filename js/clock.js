// ===============================
// REAL TIME CLOCK (CURRENT TIME)
// ===============================

document.addEventListener("DOMContentLoaded", () => {
    const timeEl = document.getElementById("time");
    const clockEl = document.getElementById("clock");

    if (!timeEl || !clockEl) return;

    function updateClock() {
        const now = new Date();

        // Ambil jam saat ini
        const hours   = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");

        const timeString = `${hours}:${minutes}:${seconds}`;

        // Tentukan ikon berdasarkan jam
        let icon = "🌙";
        if (now.getHours() >= 6 && now.getHours() < 12) icon = "🌤️";
        else if (now.getHours() >= 12 && now.getHours() < 16) icon = "☀️";
        else if (now.getHours() >= 16 && now.getHours() < 18) icon = "🌥️";

        // Tampilkan jam
        clockEl.innerHTML = `${icon} <span id="time">${timeString}</span>`;
    }

    // Jalankan langsung
    updateClock();

    // Update setiap 1 detik
    setInterval(updateClock, 1000);
});

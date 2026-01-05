document.addEventListener("DOMContentLoaded", () => {
    const timeEl = document.getElementById("time");

    if (!timeEl) return;

    function updateClock() {
        const now = new Date();

        const hours   = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");

        timeEl.textContent = `${hours}:${minutes}:${seconds}`;
    }

    // tampilkan langsung saat halaman dibuka
    updateClock();

    // update tiap detik
    setInterval(updateClock, 1000);
});

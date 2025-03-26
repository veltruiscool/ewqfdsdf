function updateTime() {
    const currentTime = new Date().toLocaleTimeString();
    document.getElementById('current-time').textContent = currentTime;
    requestAnimationFrame(updateTime);
}
requestAnimationFrame(updateTime);

// Navigation handling
document.querySelectorAll('.nav-left a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.querySelectorAll('.welcome, .games-page').forEach(section => {
            section.style.display = section.id === targetId ? 'block' : 'none';
        });
    });
});

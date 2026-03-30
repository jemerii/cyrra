const modal = document.getElementById("discord-modal");
const btn = document.getElementById("discord-link");
const closeBtn = document.querySelector(".close-button");

window.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splash-screen');
    const splashText = document.getElementById('splash-text');

    // 1. Show text almost immediately (0.5s)
    setTimeout(() => {
        splashText.classList.add('text-visible');
    }, 500);

    // 2. Keep text visible for 3 seconds, then hide it (at 3.5s mark)
    setTimeout(() => {
        splashText.classList.remove('text-visible');
    }, 3500);

    // 3. Fade entire splash screen out after text starts hiding (at 4.5s mark)
    setTimeout(() => {
        splash.classList.add('fade-out');
    }, 4500);
});

// Open modal
btn.onclick = function() {
    modal.style.display = "flex";
}

// Close modal via (X) button
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close modal by clicking outside the box
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
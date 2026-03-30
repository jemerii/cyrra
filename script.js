const modal = document.getElementById("discord-modal");
const btn = document.getElementById("discord-link");
const closeBtn = document.querySelector(".close-button");

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

function setupModal(triggerId, modalId) {
    const trigger = document.getElementById(triggerId);
    const modal = document.getElementById(modalId);
    const content = modal.querySelector('.modal-content');
    const closeBtn = modal.querySelector('.close-btn');

    const closeModal = () => {
        // Add closing classes
        content.classList.add('modal-closing');
        modal.classList.add('overlay-closing');

        // Wait for animation to finish before hiding
        setTimeout(() => {
            modal.style.display = 'none';
            // Reset classes for next time it opens
            content.classList.remove('modal-closing');
            modal.classList.remove('overlay-closing');
        }, 300); 
    };

    trigger.onclick = () => {
        modal.style.display = 'flex';
    };

    closeBtn.onclick = closeModal;
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}


setupModal('trigger-games', 'modal-games');
setupModal('trigger-mock', 'modal-mock');
setupModal('trigger-docs', 'modal-docs');
setupModal('discord-link', 'discord-modal');

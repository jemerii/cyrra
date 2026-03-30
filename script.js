const modal = document.getElementById("discord-modal");
const btn = document.getElementById("discord-link");
const closeBtn = document.querySelector(".close-button");


function setupModal(triggerId, modalId) {
    const trigger = document.getElementById(triggerId);
    const modal = document.getElementById(modalId);
    if (!trigger || !modal) return;
    const content = modal.querySelector('.modal-content');
    const closeBtn = modal.querySelector('.close-btn') || modal.querySelector('.discord-close-button');

    const closeModal = () => {
        content.classList.add('modal-closing');
        modal.classList.add('overlay-closing');
        setTimeout(() => {
            modal.style.display = 'none';
            content.classList.remove('modal-closing');
            modal.classList.remove('overlay-closing');
        }, 300); 
    };
    
    trigger.onclick = (e) => {
        e.preventDefault();
        modal.style.display = 'flex';
    };

    if (closeBtn) {
        closeBtn.onclick = closeModal;
    }
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupModal('trigger-games', 'modal-games');
    setupModal('trigger-mock', 'modal-mock');
    setupModal('trigger-docs', 'modal-docs');
    setupModal('discord-link', 'discord-modal');
});

const countdownElement = document.getElementById('countdown');
const modal = document.getElementById('invitationModal');
const closeBtn = document.getElementById('closeCardBtn');

let countdown = 3;

const countdownInterval = setInterval(() => {
    countdown--;
    if (countdown >= 0) {
        countdownElement.textContent = countdown;
    }
    if (countdown === 0) {
        clearInterval(countdownInterval);
        countdownElement.style.display = 'none';
        modal.style.display = 'flex';
        generateFlowers();
    }
}, 1000);

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

function generateFlowers() {
    const container = document.querySelector('.flower-container');
    for (let i = 0; i < 7; i++) {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.style.left = Math.random() * 100 + '%';
        flower.style.animationDuration = Math.random() * 3 + 5 + 's';
        container.appendChild(flower);
    }
}
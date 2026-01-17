const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const yesBtn = document.querySelector('.js-yes-btn');
const noBtn = document.querySelector('.js-no-btn');

function moveButton() {
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const randomX = Math.max(10, Math.floor(Math.random() * maxX));
    const randomY = Math.max(10, Math.floor(Math.random() * maxY));

    noBtn.style.position = 'fixed'; 
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

noBtn.addEventListener('mouseenter', moveButton);

noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveButton();
});

yesBtn.addEventListener('click', () => {
    page1.style.display = 'none';
    page2.style.display = 'flex';

    setTimeout(() => {
        page2.style.display = 'none';
        page3.style.display = 'flex';
        page3.style.flexDirection = 'column';
    }, 2000);
});
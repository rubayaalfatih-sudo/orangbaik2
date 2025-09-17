document.addEventListener('DOMContentLoaded', () => {
  const questionCard = document.getElementById('question-card');
  const resultCard = document.getElementById('result-card');
  const yesBtn = document.getElementById('yes-btn');
  const noBtn = document.getElementById('no-btn');
  const music = document.getElementById('background-music');
  const heartsContainer = document.querySelector('.hearts-container');

  const playMusic = () => {
    music.play().catch(error => {
      console.log("Autoplay was prevented. User needs to interact with the page first.");
    });
    document.body.removeEventListener('click', playMusic);
    document.body.removeEventListener('mouseover', playMusic);
  };
  document.body.addEventListener('click', playMusic);
  document.body.addEventListener('mouseover', playMusic);

  const createHeart = () => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 7 + 's';
    const randomScale = Math.random() * 0.5 + 0.5;
    heart.style.transform = `scale(${randomScale}) rotate(-45deg)`;
    heartsContainer.appendChild(heart);
    setTimeout(() => {
      heart.remove();
    }, 10000);
  }
  setInterval(createHeart, 500);

  yesBtn.addEventListener('click', () => {
    questionCard.style.display = 'none';
    resultCard.style.display = 'block';
  });

  const moveNoButton = () => {
    if (!noBtn.classList.contains('is-running')) {
      noBtn.classList.add('is-running');
    }
    const maxWidth = window.innerWidth - noBtn.offsetWidth;
    const maxHeight = window.innerHeight - noBtn.offsetHeight;
    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
  };

  noBtn.addEventListener('mouseover', moveNoButton);
  noBtn.addEventListener('click', moveNoButton);
});

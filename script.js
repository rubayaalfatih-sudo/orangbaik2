document.addEventListener('DOMContentLoaded', () => {
  const questionCard = document.getElementById('question-card');
  const resultCard = document.getElementById('result-card');
  const yesBtn = document.getElementById('yes-btn');
  const noBtn = document.getElementById('no-btn');

  // Event saat tombol 'Yes' ditekan
  yesBtn.addEventListener('click', () => {
    questionCard.style.display = 'none';
    resultCard.style.display = 'block';
  });

  // Fungsi untuk memindahkan tombol 'No'
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

  // Jalankan fungsi saat kursor mendekat atau saat diklik
  noBtn.addEventListener('mouseover', moveNoButton);
  noBtn.addEventListener('click', moveNoButton);
});
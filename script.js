// Falling down emojis
  const emojis = ['❤️'];
  const maxEmojis = 12; // Total on screen at once

  function createOrReuseEmoji() {
    const existing = document.querySelectorAll('.falling-emoji');
    if (existing.length >= maxEmojis) return;

    const emoji = document.createElement('div');
    emoji.classList.add('falling-emoji');
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    // Random starting horizontal position
    emoji.style.left = Math.random() * 105 + 'vw';
    // Random animation speed
    emoji.style.animationDuration = (15 + Math.random() * 15) + 's';
    // Random opacity
    emoji.style.opacity = (0.5 + Math.random() * 0.4).toFixed(2);
    // Random size
    emoji.style.fontSize = (15 + Math.random() * 35) + 'px';
    document.body.appendChild(emoji);
  }
    function emojiLoop() {
    createOrReuseEmoji(); // Make one emoji now
    const nextDelay = 1500; // Delay before next one
    setTimeout(emojiLoop, nextDelay);
  }
    emojiLoop();


// Timer countdown logic
const startDate = new Date('2023-04-16T23:30:00');

function updateTimer() {
    const now = new Date();
    let diff = now - startDate;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    diff -= years * 1000 * 60 * 60 * 24 * 365.25;

    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    diff -= months * 1000 * 60 * 60 * 24 * 30;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * 1000 * 60 * 60 * 24;

    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * 1000 * 60 * 60;

    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * 1000 * 60;

    const seconds = Math.floor(diff / 1000);

    document.getElementById('years').textContent = String(years).padStart(2, '0');
    document.getElementById('months').textContent = String(months).padStart(2, '0');
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}
setInterval(updateTimer, 1000);
updateTimer();

// Songs list
const songs = [
  ["igiw3JVBATg", "A Sky Full of Stars", "Coldplay"],
  ["v27COkZT4GY", "Car's Outside", "James Arthur"],
  ["4lqYdS-Ell8", "Look After You", "The Fray"],
  ["1B34kyJ84ac", "Cupid's Chokehold", "Gym Class Heroes"],
  ["bBC7sPywo2M", "Yellow", "Coldplay"],
  ["7FrLlfWe_SI", "Sparks (Live)", "Coldplay"],
];
  // Add more songs here

const container = document.getElementById("songsContainer");

songs.forEach(([id, title, artist]) => {
  const link = document.createElement("a");
  link.href = `https://www.youtube.com/watch?v=${id}`;
  link.target = "_blank";
  link.rel = "noopener";
  link.className = "song";

  link.innerHTML = 
  `<div class="thumbnail-container">
      <img src="https://i.ytimg.com/vi/${id}/mqdefault.jpg" alt="Song-thumbnail" class="thumbnail">
    </div>
    <h2>${title}</h2>
    <p>${artist}</p>`;

  container.appendChild(link);
});

// 100 things I love about you
const texts = [
"Your Smile", "Your Eyes", "Your Laughter", "Your Kindness","Etc..."
];

const list = document.getElementById('things-list');

texts.forEach((text, i) => {
const li = document.createElement('li');
li.className = 'thing-item';
li.innerHTML = `
    <span class="thing-icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
                4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09 
                C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 
                22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
    </span>
${i + 1}. ${text}
`;
list.appendChild(li);
});

// Explode button logic
const explodeBtn = document.getElementById('explodeBtn');
const flowers = ['🌸', '🌼', '🌷', '🌹', '🌻'];

explodeBtn.addEventListener('click', () => {
    const rect = explodeBtn.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < 80; i++) {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
    document.body.appendChild(flower);

    // Random directions and distance
    const angle = Math.random() * 2 * Math.PI;
    const radius = 100 + Math.random() * 220; // further explosion

    flower.style.left = centerX + 'px';
    flower.style.top = centerY + 'px';
    flower.style.setProperty('--x', (Math.cos(angle) * radius) + 'px');
    flower.style.setProperty('--y', (Math.sin(angle) * radius) + 'px');

    // Longer smoother animation
    flower.style.animation = 'burst 1600ms forwards ease-out';

    // Remove after animation ends
    setTimeout(() => {
        flower.remove();
    }, 1600);
    }
});

const bgMusic = new Audio('./src/incredible.mp3');

bgMusic.volume = 0.04; 

const startTime = 39; 
const endTime = 55;   
const duration = endTime - startTime;

bgMusic.currentTime = startTime;

function createPetals() {
    const container = document.getElementById('petals-container');
    const petalCount = 20;
    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        const size = Math.random() * 15 + 10 + 'px';
        petal.style.width = size;
        petal.style.height = size;
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.animationDuration = Math.random() * 5 + 5 + 's';
        petal.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(petal);
    }
}

const playBtn = document.getElementById('playBtn');
const progressBar = document.getElementById('progressBar');

playBtn.addEventListener('click', function() {
    if (bgMusic.paused) {
        bgMusic.play();
        this.classList.add('playing'); 
    } else {
        bgMusic.pause();
        this.classList.remove('playing');
    }
});

bgMusic.addEventListener('timeupdate', function() {
    if (bgMusic.currentTime >= endTime) {
        bgMusic.pause();
        bgMusic.currentTime = startTime; 
        playBtn.classList.remove('playing');
    }

    const currentProgress = ((bgMusic.currentTime - startTime) / duration) * 100;
    if (currentProgress >= 0) {
        progressBar.style.width = currentProgress + '%';
    }
});

window.onload = createPetals;
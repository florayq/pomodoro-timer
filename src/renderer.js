const { ipcRenderer } = require('electron');
const closeBtn = document.getElementById('close-btn');

closeBtn.addEventListener('click', () => {
    ipcRenderer.send('close-window');
});

const minimizeBtn = document.getElementById('minimize-btn');
minimizeBtn.addEventListener('click', () => {
    ipcRenderer.send('minimize-window');
});

const images = [
    'blinkbirdie.png',
    'basebirdie.png',
];


let currentFrame = 0;
const imageElement = document.getElementById('animation');

function animate() {
    imageElement.src = images[currentFrame];
    currentFrame = (currentFrame + 1) % images.length;
}

setInterval(animate, 750);
const images = [
    '../img/1.jpg',
    '../img/2.jpg',
    '../img/3.jpg',
    '../img/4.jpg'
];

let index = Math.floor(Math.random() * images.length);

function mudarBackground() {
    document.body.style.backgroundImage = `url('${images[index]}')`;
}

window.onload = mudarBackground;

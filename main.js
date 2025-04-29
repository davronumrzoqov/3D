const imageBox = document.querySelector('.image-box');

document.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;

    imageBox.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

document.addEventListener('mouseleave', () => {
    imageBox.style.transform = 'rotateY(0deg) rotateX(0deg)';
});
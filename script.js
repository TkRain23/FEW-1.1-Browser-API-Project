var diagonalMove = [
    {
        transform: 'translate(0px, 0px)',
        background: '#2196F3'
    },
    {
        offset: .5,
        transform: 'translate(115px, 115px)',
        background: '#2196F3'
    },
    {
        transform: 'translate(230px, 230px)',
        background: '#EF5350'
    }
];

var circle = document.getElementById('circle');

circle.addEventListener('click', function() {
    circle.animate(diagonalMove, {
        duration: 400,
        fill: 'forwards'
    });
});

document.getElementById('pause').addEventListener('click', function() {
  squareAnimation.pause();
  document.getElementById('square').style.backgroundColor = "#EF5350";
});
document.getElementById('play').addEventListener('click', function() {
  squareAnimation.play();
  document.getElementById('square').style.backgroundColor = "#2196F3";
});
document.getElementById('reverse').addEventListener('click', function() {
  squareAnimation.reverse();
});

document.getElementById('slow').addEventListener('click', function() {
  squareAnimation.playbackRate = 0.5;
});
document.getElementById('normal').addEventListener('click', function() {
  squareAnimation.playbackRate = 1;
});
document.getElementById('fast').addEventListener('click', function() {
  squareAnimation.playbackRate = 2;
});

var square = document.getElementById('square');
var squareAnimation = square.animate([
    {
        transform: 'rotate(0)'
    },
    {
        transform: 'rotate(359deg)'
    }
], {
    duration: 750,
    iterations: Infinity
});

squareAnimation.pause();
document.getElementById('square').style.backgroundColor = "#EF5350";

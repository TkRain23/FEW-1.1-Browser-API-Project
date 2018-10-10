var moveAndChangeColor = [
    {
        transform: 'translateX(0)',
        background: '#2196F3'    // blue
    },
    {
        offset: 0.8,
        transform: 'translateX(100px)',
        background: '#2196F3'    // blue
    },
    {
        transform: 'translateX(100px)',
        background: '#EF5350'    // red
    }
];

var circle = document.getElementById('circle');

circle.addEventListener('click', function() {
    circle.animate(moveAndChangeColor, {
        duration: 400,
        fill: 'forwards'
    });
});

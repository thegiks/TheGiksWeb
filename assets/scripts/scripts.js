let next = document.querySelector('.next');
let prv = document.querySelector('.prev');

function slideNext() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
}

// Add event listeners for the buttons
next.addEventListener('click', slideNext);
prv.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
});

// Auto slide every 5 seconds
setInterval(slideNext, 5000); // Change 5000 to your desired interval in milliseconds

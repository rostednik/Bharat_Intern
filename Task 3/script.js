function changeHeaderBackground() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#333';
    } else {
        header.style.backgroundColor = 'transparent';
    }
}
window.addEventListener('scroll', changeHeaderBackground);

document.querySelector('.profile-info').addEventListener('click', function() {
    var options = document.querySelector('.profile-options');
    options.style.display = options.style.display === 'block' ? 'none' : 'block';
});

function scrollContent(containerId, direction) {
    const container = document.getElementById(containerId);
    const scrollAmount = 200;
    if (direction === 'left') {
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    } else if (direction === 'right') {
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}
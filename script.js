document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    const scrollThreshold = 50; // Adjust this value to set when the color changes

    window.addEventListener('scroll', function () {
        if (window.scrollY > scrollThreshold) {
            navbar.style.backgroundColor = '#444'; // Darker background when scrolled
        } else {
            navbar.style.backgroundColor = '#333'; // Original background color
        }
    });
});

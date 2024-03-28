function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}
const sliderWrapper = document.querySelector('.slider-wrapper');
    let slideIndex = 0;

    function showSlides() {
        slideIndex++;
        if (slideIndex >= document.querySelectorAll('.slide').length) {
            slideIndex = 0;
        }
        const translateValue = -slideIndex * 100;
        sliderWrapper.style.transform = `translateX(${translateValue}%)`;
    }

    setInterval(showSlides, 2000); // Adjust the interval (in milliseconds) for auto-sliding
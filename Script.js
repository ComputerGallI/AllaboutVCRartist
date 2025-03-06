document.addEventListener("DOMContentLoaded", function () {
    // Welcome prompt
    let userName = prompt("Welcome! What's your name?");
    if (userName) {
        document.getElementById("greeting").innerHTML = `<h2>Hello, ${userName}! Welcome to V.C.R's world.</h2>`;
    }

    // Slideshow Logic
    const images = [
        "assets/VCRphoto1.jpg",
        "assets/VCRphoto2.jpg",
        "assets/VCRphoto3.jpg",
        "assets/VCRphoto4.jpg",
        "assets/VCRphoto5.jpg",
        "assets/VCRphoto6.jpg",
        "assets/VCRphoto7.jpeg",
        "assets/VCRphoto8.jpg"
    ];
    
    let index = 0;
    const slideshowImg = document.getElementById("slideshow-img");

    function changeImage() {
        index = (index + 1) % images.length;
        slideshowImg.src = images[index];
    }

    setInterval(changeImage, 2000); // Change image every 2 seconds
});

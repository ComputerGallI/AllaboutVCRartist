document.addEventListener("DOMContentLoaded", function () {
  // -------------------------------
  // Index Page: Greeting, Slideshow & Logo Spin on Load
  // -------------------------------
  const greetingSection = document.getElementById("greeting");
  if (greetingSection) {
    // Prompt the user for their name (only on the landing page)
    let userName = prompt("Welcome! What's your name?");
    // Set the custom greeting message using the user's name
    if (userName) {
      greetingSection.innerHTML = `<h2>Hello, ${userName} Welcome to the World of the V.C.R.</h2>`;
    }
    
    // Slideshow: Cycle through images on the left side of the banner
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
    
    // Change the slideshow image every 2 seconds
    setInterval(changeImage, 2000);
    
    // Spin the logo once when the page loads
    const logo = document.getElementById("logo");
    if (logo) {
      logo.classList.add("spin-on-load");
      setTimeout(function () {
        logo.classList.remove("spin-on-load");
      }, 1000);
    }
  }
  
  // -------------------------------
  // Album Selection Form Handling (Contact Page)
  // -------------------------------
  const albumForm = document.getElementById("albumForm");
  if (albumForm) {
    albumForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const albumSelect = document.getElementById("albumSelect");
      const albumValue = albumSelect.value;
      let url = "";
      if (albumValue === "chronicles") {
        url = "https://songwhip.com/vcr/the-chronicles-of-a-caterpillar-the-egg";
      } else if (albumValue === "blue") {
        url = "https://songwhip.com/vcr/blue2022";
      } else if (albumValue === "newBlueSun") {
        url = "https://open.spotify.com/album/33Ek6daAL3oXyQIV1uoItD?si=es1JPG4xR--hbJO5xsZRcg&nd=1&dlsi=6047377c13f24cbc#login";
      }
      if (url) {
        // Open the selected album link in a new tab
        window.open(url, "_blank");
      }
    });
  }
  
  // -------------------------------
  // Contact Form: Live Preview & Submission Handling
  // -------------------------------
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const previewSubject = document.getElementById("preview-subject");
  const previewFrom = document.getElementById("preview-from");
  const previewBody = document.getElementById("preview-body");
  
  // Generate a random 4-digit number for the subject line
  const randomNum = Math.floor(Math.random() * 9000) + 1000;
  const subjectLine = `Interest #${randomNum}`;
  previewSubject.textContent = subjectLine;
  
  // Update the live preview as the user types their email
  if (emailInput) {
    emailInput.addEventListener("input", function () {
      previewFrom.textContent = emailInput.value;
    });
  }
  // Update the live preview as the user types their message
  if (messageInput) {
    messageInput.addEventListener("input", function () {
      previewBody.textContent = messageInput.value;
    });
  }
  
  // Handle the contact form submission
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      
      // Clear any previous error message
      document.getElementById("error-message").textContent = "";
      
      const userEmail = emailInput.value.trim();
      const userMessage = messageInput.value.trim();
      
      // Validate required fields
      if (!userEmail || !userMessage) {
        document.getElementById("error-message").textContent = "Please fill out all required fields.";
        return;
      }
      
      // Compose email details (simulate FROM in preview)
      const toEmail = "india.ratliff@gmail.com";
      const ccEmail = "Indiaratliffre@gmail.com";
      const bodyContent = `From: ${userEmail}\n\n${userMessage}`;
      const mailtoLink = `mailto:${toEmail}?cc=${ccEmail}&subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(bodyContent)}`;
      
      // Open the email client using the mailto link
      window.open(mailtoLink, "_blank");
      
      // Replace the contact form with a "Learn More" button
      contactForm.style.display = "none";
      const formSuccessContainer = document.getElementById("form-success");
      formSuccessContainer.innerHTML = `<button id="learn-more">Learn More</button>`;
      document.getElementById("learn-more").addEventListener("click", function () {
        window.location.href = "index.html";
      });
    });
  }
});

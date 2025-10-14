// ==========================
// Hero Section Image Slider
// ==========================

// Select all slide images
const slides = document.querySelectorAll(".slides img");
let currentSlide = 0;

// Function to show one slide at a time
function showSlide(index) {
  slides.forEach((img, i) => {
    img.style.opacity = i === index ? "1" : "0";
    img.style.transition = "opacity 1.5s ease-in-out";
  });
}

// Auto change every 4 seconds
function startSlider() {
  showSlide(currentSlide);
  currentSlide = (currentSlide + 1) % slides.length;
}

// Start the slider
if (slides.length > 0) {
  showSlide(currentSlide);
  setInterval(startSlider, 4000);
}

// ==========================
// Scroll-to-Top Button
// ==========================
const scrollTopBtn = document.getElementById("scrollTopBtn");

if (scrollTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

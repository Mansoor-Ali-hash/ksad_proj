document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});


// =======================
// HERO SLIDER FUNCTIONALITY
// =======================
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".hero-slider .slides img");
  const prevBtn = document.querySelector(".hero-slider .prev");
  const nextBtn = document.querySelector(".hero-slider .next");
  let currentIndex = 0;
  let slideInterval;
  const intervalTime = 4000; // 4 seconds per slide

  // Randomize slide order each time page loads
  const shuffledSlides = Array.from(slides);
  for (let i = shuffledSlides.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    shuffledSlides[i].parentNode.insertBefore(shuffledSlides[j], shuffledSlides[i].nextSibling);
  }

  // Function to show the current slide
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active", "fade-in", "zoom-in");
      if (i === index) {
        slide.classList.add("active", "fade-in", "zoom-in");
      }
    });
  }

  // Next slide
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  // Previous slide
  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  // Auto slide
  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  // Stop auto slide
  function stopAutoSlide() {
    clearInterval(slideInterval);
  }

  // Event listeners
  if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      stopAutoSlide();
      startAutoSlide();
    });

    prevBtn.addEventListener("click", () => {
      prevSlide();
      stopAutoSlide();
      startAutoSlide();
    });
  }

  // Pause on hover
  const heroSlider = document.querySelector(".hero-slider");
  if (heroSlider) {
    heroSlider.addEventListener("mouseenter", stopAutoSlide);
    heroSlider.addEventListener("mouseleave", startAutoSlide);
  }

  // Start everything
  showSlide(currentIndex);
  startAutoSlide();

  // =======================
  // NAVBAR SCROLL EFFECT
  // =======================
  const nav = document.querySelector("nav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  // =======================
  // ANNOUNCEMENTS DISPLAY
  // =======================
  const announcements = [
    {
      title: "Admissions Open (2025)",
      desc: "Registration is now open for all Coaching & Computer Programs. Apply online today!"
    },
    {
      title: "New Computer Lab",
      desc: "We are pleased to announce a newly upgraded computer lab with latest PCs and internet facilities."
    },
    {
      title: "Annual Result Week",
      desc: "Result week starts from November 1st. All students must collect their result cards from office."
    }
  ];

  const container = document.querySelector(".announcements");
  if (container) {
    announcements.forEach((a, i) => {
      const card = document.createElement("div");
      card.classList.add("announcement-card");
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      card.innerHTML = `
        <h3>${a.title}</h3>
        <p>${a.desc}</p>
      `;
      container.appendChild(card);

      // Animate cards one by one
      setTimeout(() => {
        card.style.transition = "all 0.6s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, i * 300);
    });
  }
});

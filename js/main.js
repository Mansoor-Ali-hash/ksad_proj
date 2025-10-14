// document.getElementById("admissionForm").addEventListener("submit", function(e) {
//     e.preventDefault();
  
//     const name = document.getElementById("name").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const dob = document.getElementById("dob").value;
//     const course = document.getElementById("course").value;
  
//     if (name && email && dob && course) {
//       document.getElementById("responseMsg").innerText = `Thank you, ${name}! Your application has been submitted.`;
//       this.reset();
//     } else {
//       document.getElementById("responseMsg").innerText = "Please fill in all fields.";
//     }
//   });

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 300) {
//     scrollTopBtn.style.display = "block";
//   } else {
//     scrollTopBtn.style.display = "none";
//   }
// });

// scrollTopBtn.addEventListener("click", () => {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// });
// document.getElementById("admissionForm").addEventListener("submit", function(e) {
//   e.preventDefault();

//   const name = document.getElementById("name").value.trim();
//   const fatherName = document.getElementById("fatherName").value.trim();
//   const dob = document.getElementById("dob").value;
//   const religion = document.getElementById("religion").value.trim();
//   const gender = document.getElementById("gender").value;
//   const currentAddress = document.getElementById("currentAddress").value.trim();
//   const email = document.getElementById("email").value.trim();
//   const selfContact = document.getElementById("selfContact").value.trim();
//   const fatherContact = document.getElementById("fatherContact").value.trim();
//   const currentClass = document.getElementById("currentClass").value.trim();
//   const studyGroup = document.getElementById("studyGroup").value;

//   if (name && fatherName && dob && religion && gender && currentAddress && email && selfContact && fatherContact && currentClass && studyGroup) {
//     document.getElementById("responseMsg").innerText = `🎉 Congratulations ${name}! Your application has been successfully submitted. We will contact you soon.`;
//     this.reset();
//   } else {
//     document.getElementById("responseMsg").innerText = "⚠️ Please fill in all fields.";
//   }
// });
// // EmailJS library load karo
// (function() {
//   emailjs.init("Mansoor_Ali"); // yeh apko EmailJS dashboard se milega
// })();

// // Jab form submit ho
// document.getElementById("admissionForm").addEventListener("submit", function(e) {
//   e.preventDefault();

//   emailjs.sendForm('GMail', 'khanscienceademy2@gmail.com', this)
//       .then(function() {
//           console.log('SUCCESS!');
//           document.getElementById("responseMsg").innerText = "🎉 Your application has been submitted successfully!";
//       }, function(error) {
//           console.log('FAILED...', error);
//           document.getElementById("responseMsg").innerText = "⚠️ There was an error. Please try again.";
//       });

//   this.reset(); // Form reset after sending
// });
// // EmailJS library load karo
// (function() {
//     emailjs.init("YOUR_USER_ID"); // yeh apko EmailJS dashboard se milega
// })();

// // Jab form submit ho
// document.getElementById("admissionForm").addEventListener("submit", function(e) {
//     e.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
//         .then(function() {
//             console.log('SUCCESS!');
//             document.getElementById("responseMsg").innerText = "🎉 Your application has been submitted successfully!";
//         }, function(error) {
//             console.log('FAILED...', error);
//             document.getElementById("responseMsg").innerText = "⚠️ There was an error. Please try again.";
//         });

//     this.reset(); // Form reset after sending
// });
// // Program for pics sliding

// const slides = document.querySelectorAll(".slides img");
// let current = 0;

// function showSlide(index) {
//   slides.forEach((img, i) => {
//     img.classList.toggle("active", i === index);
//   });
// }

// // Auto change every 4 seconds
// function startSlider() {
//   showSlide(current);
//   current = (current + 1) % slides.length;
// }

// setInterval(startSlider, 4000);
// ==========================
// Hero Section Image Slider
// ==========================

// Select all slide images
const slides = document.querySelectorAll(".slides img");
let index = 0;

// Function to show slide
function showSlide(i) {
  slides.forEach((img, j) => {
    img.classList.toggle("active", j === i);
  });
}

// Next button
document.querySelector(".next").addEventListener("click", () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

// Previous button
document.querySelector(".prev").addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

// Auto slide every 4 seconds
setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 4000);

// Show first image at start
showSlide(index);

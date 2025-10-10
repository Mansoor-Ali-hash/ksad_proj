document.getElementById("admissionForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const dob = document.getElementById("dob").value;
    const course = document.getElementById("course").value;
  
    if (name && email && dob && course) {
      document.getElementById("responseMsg").innerText = `Thank you, ${name}! Your application has been submitted.`;
      this.reset();
    } else {
      document.getElementById("responseMsg").innerText = "Please fill in all fields.";
    }
  });

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
document.getElementById("admissionForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const fatherName = document.getElementById("fatherName").value.trim();
  const dob = document.getElementById("dob").value;
  const religion = document.getElementById("religion").value.trim();
  const gender = document.getElementById("gender").value;
  const currentAddress = document.getElementById("currentAddress").value.trim();
  const email = document.getElementById("email").value.trim();
  const selfContact = document.getElementById("selfContact").value.trim();
  const fatherContact = document.getElementById("fatherContact").value.trim();
  const currentClass = document.getElementById("currentClass").value.trim();
  const studyGroup = document.getElementById("studyGroup").value;

  if (name && fatherName && dob && religion && gender && currentAddress && email && selfContact && fatherContact && currentClass && studyGroup) {
    document.getElementById("responseMsg").innerText = `🎉 Congratulations ${name}! Your application has been successfully submitted. We will contact you soon.`;
    this.reset();
  } else {
    document.getElementById("responseMsg").innerText = "⚠️ Please fill in all fields.";
  }
});
// EmailJS library load karo
(function() {
  emailjs.init("Mansoor_Ali"); // yeh apko EmailJS dashboard se milega
})();

// Jab form submit ho
document.getElementById("admissionForm").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm('GMail', 'khanscienceademy2@gmail.com', this)
      .then(function() {
          console.log('SUCCESS!');
          document.getElementById("responseMsg").innerText = "🎉 Your application has been submitted successfully!";
      }, function(error) {
          console.log('FAILED...', error);
          document.getElementById("responseMsg").innerText = "⚠️ There was an error. Please try again.";
      });

  this.reset(); // Form reset after sending
});
// EmailJS library load karo
(function() {
    emailjs.init("YOUR_USER_ID"); // yeh apko EmailJS dashboard se milega
})();

// Jab form submit ho
document.getElementById("admissionForm").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(function() {
            console.log('SUCCESS!');
            document.getElementById("responseMsg").innerText = "🎉 Your application has been submitted successfully!";
        }, function(error) {
            console.log('FAILED...', error);
            document.getElementById("responseMsg").innerText = "⚠️ There was an error. Please try again.";
        });

    this.reset(); // Form reset after sending
});

document.getElementById("slipForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const roll = document.getElementById("roll").value.trim();
  
    if (roll === "") return;
  
    // Dummy data — in real case, you'd fetch this from a server
    const studentData = {
      name: "Ali Raza",
      course: "Computer Science",
      center: "Govt. Boys College, Lahore",
      date: "20-May-2025"
    };
  
    document.getElementById("sName").innerText = studentData.name;
    document.getElementById("sRoll").innerText = roll;
    document.getElementById("sCourse").innerText = studentData.course;
    document.getElementById("sCenter").innerText = studentData.center;
    document.getElementById("sDate").innerText = studentData.date;
  
    document.getElementById("slipResult").style.display = "block";
  });
  